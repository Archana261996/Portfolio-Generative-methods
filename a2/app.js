const gifSize = 300

	window.addEventListener("load", function() {
	console.log("Hello, animation!")

	let swatchCount = 9


	let holderEl = document.getElementById("main")

	animations.forEach(animation => {
		if (!animation.skip) {
			let el = document.createElement("div")
			el.className = "swatch"
			let titleEl = document.createElement("h3")
			let canvasHolder = document.createElement("div")
			holderEl.append(el)
			el.append(titleEl)
			el.append(canvasHolder)
			titleEl.innerHTML = animation.title



			mainP5 = new p5(

				function(p) {
					
					p.colorMode(p.HSL);
					p.ellipseMode(p.ELLIPSE_RADIUS);

					p.setup = () => {
						p.createCanvas(gifSize, gifSize);
						if (animation.setup)
							animation.setup(p)
					}
					p.draw = () => {
						animation.draw(p)
					}
				}, canvasHolder)
			}
		})
	})