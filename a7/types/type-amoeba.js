

class Amoeba {
	// Create a branching system  Each branch can hold other branches
	constructor(aof) {
		
		this.aof = aof
		this.center = new Vector()
	}


	update(t, dt) {
		// No update needed here
		// Updates are good for if you want to maintain more complicated state 
	}

	draw(p) {
		let t = p.millis()*.001

		p.push()
		// Move the Amoeba around a bit
		p.translate(0, -300*p.noise(.2*t + this.id))
		p.rotate(1*p.noise(.3*t + this.id) - .7)

		
		let amoebaSize = this.aof.get("size")*20 + 10
		

		let pointCount = this.aof.get("Spikes")*30 + 10
		

		let threeD = this.aof.get("threeD")

		let hue = this.aof.get("hue")
		let hueOffset = this.aof.get("hueOffset") - .7

		// Make the point on the body
		let bodyPoint = (r, theta, index) => {
			// Make every other point lumpy

			r *= 1+this.aof.get("Spikes")*(index%3)
			let bp = Vector.polar(r, theta)
						
			// Use noise to offset each point
			let defR =  .3*r*this.aof.get("threeD")
			let scale = .01
			let defTheta =  10*p.noise((bp[0]*scale, bp[1]*scale +  t*.3))
			

			// Sweep the body back
			bp[0] += 1.5*this.aof.get("GoRight")*Math.abs(bp[1])
			bp.addPolar(defR, defTheta)
			return bp
		}

		// Draw a blobby shape, actually draw 2 shapes on top of each other
		for (var i = 0; i < 2; i++) {
			let size = amoebaSize*(1 - i*.2)
			p.fill(((hue + .2*i*hueOffset)%1)*360, 100, 50 - i*10, 1)
			p.beginShape()
			for (var j = 0; j < pointCount + 2; j++) {
				
				// get the point on this body
				let theta = j*Math.PI*2/pointCount
				let bp = bodyPoint(size, theta, j)
				p.curveVertex(...bp)

			}

			p.endShape()
		}
		

		
		p.push()
		p.translate(-amoebaSize*.3, -amoebaSize*.2)
		p.fill(0)
		p.fill(80)
		p.fill(100)
		p.pop()

		p.pop()
	}
}

// Optional background: drawn once per population
Amoeba.drawBackground = function(p) {
	p.background(190, 80, 90)
}

// Static properties for this class
Amoeba.landmarks = {
	"Shapeless": [0.4, 0.5, 0.1, 1.0, 0.1, 1.0],
	"Spikey": [0.4, 0.5, 0.1, 0.5, 1.0, 0.1],
	"Brightey": [0.4, 0.5, 1.0, 0.1],
	"Happy": [1.0, 0.1, 0.5, 1.0],
	"Leftey": [0.0, 1.0, 0.5, 1.0],
	"Clumsy": [1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
}
Amoeba.labels = ["GoRight", "size", "hue", "hueOffset", "Spikes", "threeD"]

