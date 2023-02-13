

class SnowFlakeParticleSystem {
	constructor(p) {
		// Do this on startup ONCE
		this.particles = []

		// Make a lot of particles
		let count = 40;
		for (var i = 0; i < count; i++) {
			// Create a random particle
			let pt = new Vector(Math.random()*2*p.width, Math.random()*4*p.height)
			
			// Add a velocity, 10 in ANY direction
			pt.velocity = Vector.polar(100, 100)
			pt.velocity.mult(1 - .5 * Math.random())


			
			// Add an empty force
			pt.force = new Vector(0,0)

			// Add to my particles
			this.particles.push(pt)
		}
	}

	getClosest(pt, range) {
		// Get the closest particle to this point
		return Vector.getClosest(pt, this.particles, range)
	}



	
	update(p, time) {

         let gravity = new Vector(0, 0.02*120 - 10)

		// Calculate forces and move each particle
		this.particles.forEach((pt,index) => {
			// Recalculate forces
			pt.force.mult(0)
			
			//--------------------------------
			// Compute all  the forces

			// Add a gravity force
            pt.force.add(gravity)

			// Compute a force to attract to the middle
			// Use a slider to control how much they are attracted to the center
			let center = new Vector(p.width/2, p.height/2)
			let offset = pt.getOffsetTo(center)
			let attraction = sliders.snowFlakeAttraction*5
			pt.force.addMultiples(offset, attraction)

			// Compute a "wiggle" force to move the particles 
			// in some amount, in some direction (a polar coordinate!)
			// based on their index and time
			// (ie, each particle has its own motion
			//    and it changes over time)
			
			let wiggleSpeedChange = .08
			let wiggleDir = 70*p.noise(index, time.t*wiggleSpeedChange)
			let wiggleAmt = 900
			pt.force.addPolar(wiggleAmt, wiggleDir)


			// Fake drag by reducing velocity
			pt.velocity.mult(1 - .1*sliders.snowFlakeDrag)

			//--------------------------------
			// Move the particles
		
			// Apply each particles force to its velocity
			pt.velocity.addMultiples(pt.force, time.dt)

			// Move each particle
			pt.addMultiples(pt.velocity, time.dt)
		})
	}

	draw(p, time) {
		// Draw each of the particles
		this.particles.forEach(pt => {
			p.push()

			// Translate to this particle's position
			p.translate(...pt)

			// rotate in the direction of my velocity
			let angle = pt.velocity.angle
			//p.rotate(angle + Math.sin(4*Math.PI))
			p.rotate(angle)
			// then we can draw the particle at (0,0), rotated
			// p.rect(0, 0, 30, 10)
			let textSize = 40
			p.fill(100)
			p.textSize(textSize)
			p.text("❄️", - textSize/2, textSize/2)

			p.pop()

		})
	}

	drawDebug(p, time) {
		this.particles.forEach(pt => {
		
			// // Draw forces
			pt.velocity.drawArrow({p, 
				center: pt,
				multiple:1,
				color: [251, 100, 79] 
			})

			pt.force.drawArrow({p, 
				center: pt,
				multiple:1, 
				color: [60, 81, 75]
			})

			
			p.circle(...pt, 10)
		})

	}
}