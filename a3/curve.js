curveCount = 4

function drawCurves(p) {
	curvePoints.forEach(pt => {
		drawPoint(p, pt)
	})


	let t2 = p.millis()*.001%1

	for (var j = 0; j < 20; j++) {
		let t = (t2 + j *.05)%1

		let b = [0,0]
		let p1 = curvePoints[0]
		let p2 = curvePoints[1]
		let p3 = curvePoints[2]
		let p4 = curvePoints[3]
		for (var i = 0; i < 2; i++) {
			b[i] = ((1 - t)**3)*p1[i] 
				+ 3*(1- t)**2*t*p2[i]
				+ 3*(1- t)* t**2 * p3[i]
				+ t**3 * p4[i]
		

		}
			p.fill(150, 100, 50)
			p.circle(...b, 10)
	}

	
	
function getLerp(pt0, pt1, pct) {
	let pt2 = [0, 0]

	pt2[0] = (1 - pct)*pt0[0] + pct*pt1[0]


	pt2[1] = (1 - pct)*pt0[1] + pct*pt1[1]
	return pt2

}

function drawDashed(p, pt0, pt1) {

	for (var i = 0; i < 10; i++) {

	}
}

function drawPoint(p, pt) {
	let count = 5
	for (var i = 0; i < count; i++) {
		let pct = i/(count)
		let sat =  pt === tool.pointSelected?100:0
		p.fill(0, sat, pct*100)
		p.circle(...pt, 30*(1 - pct**2))
	}
}