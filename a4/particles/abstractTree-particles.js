class Edge {
	constructor(e0, e1, baseLength=50, strength=20, easeAmt=1) {
		this.e0 = e0
		this.e1 = e1
		this.baseLength = baseLength
		this.strength = strength
		this.easeAmt = 1

		this.force = new Vector(2,3)
		this.offset = new Vector(4,5)
		this.stretch = 2
	}

	calculateStretch() {
		this.offset = Vector.difference(this.e1, this.e0)
		this.length = this.offset.magnitude
		this.stretch = this.baseLength - this.length
	}

	update(p, time) {
		// Set the current force on this edge
		// How hard does this pull?
		this.calculateStretch()

		// Ignore 0-length springs, it get too weird
		if (this.length != 0) {
			let total = sliders.springStrength*this.stretch*this.strength
			
			this.force.setToAddMultiples(this.offset, total/this.length)
		}
	}

	// A hack for stiffer springs
	ease(p) {
		this.calculateStretch()
		
		let easePct = -sliders.springEase*.1
		// if (Math.random()>.99)
		// 	console.log(easePct)
		this.e0.addMultiples(this.offset, easePct*this.stretch/this.offset.magnitude)
		this.e1.addMultiples(this.offset, -easePct*this.stretch/this.offset.magnitude)
	}

	applyForces(p, time) {
		// Apply this spring's force to the particles at either end
		this.e0.force.addMultiples(this.force, -1)
		this.e1.force.addMultiples(this.force, 1)
	}

	draw(p) {
		p.stroke(110, 52,38)
		p.strokeWeight(2)
		p.line(...this.e0, ...this.e1)

	}

	drawDebug(p) {
		p.strokeWeight(Math.sqrt(this.force.magnitude)*.3 + 1)
		p.stroke(350, 100, 50, .9)
		p.line(...this.e0, ...this.e1)

		let multiple = .06
		this.force.drawArrow({p, 
			center: this.e1,
			multiple:-multiple, 
			color: [280, 100, 50]
		})
		this.force.drawArrow({p, 
			center: this.e0,
			multiple:multiple, 
			color: [360, 100, 50]
		})
	}

}

class AbstractTreeParticleSystem {
	constructor(p) {
		// Track particles AND edges

		this.particles = []
		this.edges = []

		// Make a lot of particles
		let count = 40;
		for (var i = 0; i < count; i++) {
			// Create a random particle
			let pt = new Vector(Math.random()*p.width, Math.random()*p.height)
			
			// Add to my particles
			this.particles.push(pt)

			// Add a velocity, 10 in ANY direction
			pt.velocity = Vector.polar(30, Math.random())
			pt.force = Vector.polar(50, Math.random())

		}

		// Create random edges
		// how many? Two for each node...for now
		for (var i = 0; i < 2; i++) {
			this.particles.forEach(pt => {
				// Make an edge
				let end = this.particles[Math.floor(Math.random()*this.particles.length)]
				if (end != pt) {
					let e = new Edge(pt, end, Math.random()*150 + 100)
					this.edges.push(e)
				}
			})
		}

	}

	getClosest(pt, range) {
		// Get the closest particle to this point
		return Vector.getClosest(pt, this.particles, range)
	}


	update(p, time) {
		
		// Move the particles
		this.particles.forEach(pt => {
			pt.force.mult(0)
		})

		this.edges.forEach(e => e.update(p, time))

		this.edges.forEach(e => e.applyForces())

		for (var i = 0; i < 3; i++) {
			this.edges.forEach(e => e.ease(p))
		}

		
		this.particles.forEach((pt, index) => {
			// Same forces as BasicForces!

			
			// Compute a force to attract to the middle
			let center = new Vector(p.width/2, p.height/2)
			let offset = center.getOffsetTo(pt)
			pt.offsetToCenter = offset

			pt.force.addMultiples(pt.offsetToCenter, -4)

			// Wiggle!
			pt.force.addPolar(500, 10*p.noise(index, 2*time.t))

			// Apply each particles force to its velocity
			pt.velocity.addMultiples(pt.force, time.dt)

			// Move each particle
			pt.addMultiples(pt.velocity, time.dt)
		})
	}

	draw(p, time) {
		// Draw the particles and edges
		
		this.edges.forEach(e => e.draw(p, time))
		
		p.noStroke()
		p.fill(0, 0, 100)
		this.particles.forEach(pt => {
			pt.draw(p, 10)
		})
	}


	drawDebug(p, time) {
		// Draw the particles
		this.edges.forEach(e => e.drawDebug(p, time))
		
		p.noStroke()
		this.particles.forEach(pt => {
			pt.draw(p, 10)
		})
	}
}