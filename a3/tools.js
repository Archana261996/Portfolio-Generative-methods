
// Track the last mouse
let lastMouse = undefined
let mouse = new Vector(0,0)

// We can also store the last N points
let trailPoints = []
let trailPointMax = 120

// How big do you want the canvas?
let canvasSize = [600, 400]

// You can also track how long the user has been drawing
let lastPenDownTime = 0
let distanceTravelled = 0


// Which mode and color do we start with?
// You may want to change these starting values
let tool = {
	color0: [65,90,65],
	color1: [271,96,70],
	color2: [0, 100, 65],
	color3: [215, 85, 45],
	size: 1,
	mode: "NeonCircles",

	clearCanvas(p) {
		p.background(164, 95, 43)
	},
}


let tools = {

	Stars(p, size, color0, color1, color2, color3) {

		let mouse = new Vector()

		let emojiOptions = ["✨","🌟","🌃","🤩","🎖","🌟"]
		
		let index = Math.floor(emojiOptions.length*Math.random())
		let emoji = emojiOptions[index]
		
		let x = p.mouseX
		let y = p.mouseY

		x += 10*size*Math.random()
		y += 10*size*Math.random()

		p.textSize(Math.sqrt(size)*15)

		if (Math.random() < .5)
			p.text(emoji, x, y)
	},

	NeonCircles(p, size, color0, color1, color2, color3) {
		p.stroke(...color2, Math.random());
		p.fill(...color3, Math.random());
		p.circle(...mouse, 10*size*(0.5 + Math.random()))
	    let time = distanceTravelled
		for (var i = 0; i < trailPoints.length; i++) {
			let pct = i/trailPoints.length
			let point = trailPoints[i]
			p.fill((time*.5)%360, 100, 50, pct)
			p.circle(...point, 10*pct)
		}
	},


	PencilShades(p, size, color0, color1, color2, color3) {
		let d = mouse.getDistanceTo(lastMouse)
		p.stroke(...color3)
		p.line(...mouse, ...lastMouse)

		p.stroke(...color2)
		p.fill(...color0, .1)
	
        p.beginShape()
		for (var i = 0; i < trailPoints.length; i++) {
	
			let pos = trailPoints[i]
			pos[0] += Math.random()
			pos[1] += Math.random()
			p.curveVertex(...pos)
		}
		p.endShape()
	},

	curve(p, size, color0, color1, color2, color3) {
		drawCount++

		let dx = p.mouseX - mouse[0]
		let dy = p.mouseY - mouse[1]
		let d = Math.sqrt(dx**2 + dy**2)
		if (d > 50) {
			mouse = [p.mouseX, p.mouseY]

			positions.push(mouse)

			p.background(...color0, 0.1)
			p.noFill()
			p.stroke(...color0, 0.1)
			p.beginShape()
			positions.forEach((pt) => {
				p.curveVertex(...pt)
			}) 
			
			p.endShape()

			positions.forEach((pt) => {

				p.fill(...color3)
				p.circle(...pt, 2)
			})
		}
	},

}