
// Cyberpunk DJ mask.  Could make the ears vibrate with music

masks.Egyptian = function( p) {
	let t = p.millis()*.001
		
	p.background(331,71,63)


	// Make an outline but also make it weird
	let outlineCount = 5
	for (var i = 0; i < outlineCount; i++) {
		let pct = (i/outlineCount + t*.5)%1
		let opacity = Math.sin(pct* 2 * Math.PI)
		let faceOutline = joinSides(face.sides[0].faceRings[0],face.sides[1].faceRings[0]).map(((pt,index) => {
			let pt2 = new Vector()
			pt2.setToLerp(face.center, pt, .9 +pct + pct*noise(t + index*.4 + pct))
			pt2[0] *= 2.5
			return pt2
		}))
		p.stroke(100, 100, 200, opacity)
		drawContour(p, faceOutline.slice(1), true)

	}


	face.sideOrder.forEach((side) => {



		// Draw the three ear points
		p.fill(0, 0, 0, .1)
		side.ear[1].draw(p, 20*face.scale)
		side.ear[1].draw(p, 10*face.scale)

		// Draw the face background by filling in between the face side and the centerline
		// side.index is either 1 or -1, so we can use that to change color between sides
		p.fill(225, 100, 47 + side.index*2)

			side.faceRings.forEach ((ring,index) =>{
	       p.fill(100, +50 *index, 47, 50)
	       drawContour(p, ring)
           })

		drawStrip(p, side.faceRings[0], face.centerLine)

		hand.forEach(h => {
			h.fingers.forEach(finger => {
                let blue = SLIDER.FingerColour*100
				// let green = SLIDER.Fingerb*100
				// let red = SLIDER.Fingera*200

				drawNeonContour(p, finger, [blue, 100, 52], 4, false)

				finger.forEach(f => {
					f.draw(p, 5)
				})
				let tip = finger[3]
				p.push()

				
          
				p.noStroke()
				p.translate(...tip)
				p.textSize(40)
				p.fill(100, 20, 100)
				p.text("🤙", 0, 0)
				p.pop()
			})
		})
	})

face.sideOrder.forEach((side) => {
        let eyebrow = side.eyeRings[0].slice(2, 7).map(pt => {
            let pt2 = new Vector(0,0)

            pt2.setToLerp(side.eye, pt, .1 + 1.5 * SLIDER.eyebrow)
            return pt2
        })
        p.stroke(360, 100, 0)
        p.fill(360, 100, 52)
        drawContour(p, eyebrow)
    })

	// Draw the eye on either side
	face.sideOrder.forEach((side) => {
		// Draw the eye lines
		side.eyeRings.forEach((eyeRing,eyeIndex) => {
			if (eyeIndex === 4) {
				p.fill(0)
				p.noStroke()
				drawContour(p, eyeRing, true)
			}

			let h = (40 + 70*eyeIndex + t*80)%360
			

			side.eyeRings[2].forEach(pt => p.circle(...pt,4))
			drawNeonContour(p, side.eyeRings[1],false)
			drawNeonContour(p, eyeRing, [h, 100, 50], 5, true)

		})


	})
	face.mouth.forEach((mouthLine,mouthIndex) => {
		if (mouthIndex > 2) {
			if (mouthIndex === 4) {
				p.noFill()
				p.stroke(0)
				drawContour(p, mouthLine, true)
			}

			let h = (40 + 70*mouthIndex + 100*t)%360
			
			// Neon style
			drawNeonContour(p, mouthLine, [h, 100, 50], 5, true)
		
		}
	})
}
