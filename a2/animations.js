function getLoopingNoise({
  p,
  loopPct,
  len,
  offset = 0
}) {

  let theta = Math.cos( 4 * Math.PI) * loopPct

  let x =  len * Math.sin(4*theta)
  let y = len * Math.sin(theta/4)

  let noiseVal = p.noise(x , y , offset)

  return noiseVal
}

let animations = [

  {
    title: "Abstract Snow Day with the Northern Lights",

    draw: function(p) {

      //The northern lights
 
      p.background(240,92,11);
       let t = p.millis()*.0003
      let length = 1
       let loopPct = t%1
      let thetaPct = 2*loopPct*Math.cos(Math.PI)
      p.noiseDetail(10, 0.2);
      let count = 100
      for (var j = 0; j < 20; j++) {
        p.stroke(j*3 + 180, 100, 50)
        p.fill(j*3 + 100, 50, 50, .3)
        p.beginShape()
        for (var i = 0; i < count; i++) {
          let pct = i/count
          let y = 200*p.noise(pct, Math.sin(thetaPct), j*.1)
          let x = pct*p.width
          p.vertex(x, y)
        }
        p.endShape()
      }
  
//Abstract snow

       t = p.millis() * .0010
       let count_balls = 50
       for (var i = 0; i < count_balls; i++) {
      let pct = i / count_balls
      p.fill(0, 100, 100)
      p.strokeWeight(5)
      p.stroke(0, 0, 75)
      let speed = 10;
      let x = pct * p.width
      let y = (.5 + .5 * Math.sin(t * 1 + i * 1)) * p.height + 80
      p.ellipse(x, y, 10, 10);
}
    }
  },

  {
    title: "Dancing Boxes",
    draw(p) {
      let t = p.millis()*.008
      let length = 20
      let loopPct = (t/length)

      p.background(102,100,48,1)
      p.translate(p.width/2, p.height/2)


      p.noiseDetail(3, 0.5);
      for (var i = 0; i < 20; i++) {

        p.fill((i*100 + 360)%360, 20, 75, 1)
        let offset = i*1.5
        let len = getLoopingNoise({
          p:p,
          loopPct: loopPct,
          len: 2,
          offset: offset
        })

        let x = getLoopingNoise({
          p:p,
          loopPct: loopPct,
          len: 1,
          offset: offset + 150
        }) - 0.5

        let y = getLoopingNoise({
          p:p,
          loopPct: loopPct,
          len: 1,
          offset: offset + 50
        }) - 1
        
      
        p.rect(x*500, y*200 + 100, 150*len)

      }

    }

  },
  {
    title: "Trail of Dust!!!",
    draw(p) {
       p.background(240, 92, 11, 0.03);
      

    let t = p.millis() * 0.001;
    let loopPct = (t / 16) % 1;
    let w = p.width;

    let x = loopPct * w * 2;



    p.noiseDetail(3, 0.3);
    let noiseY2 = p.noise(loopPct * 10);
    p.fill(50, 100, 50);
    p.stroke(320, 86, 52);

    p.circle(x, 200 * noiseY2 + 100, 8);
    p.rect(x, 250 * noiseY2 + 10, 5);
    p.circle(x, 300 * noiseY2 + 100, 2);
    p.rect(x, 350 * noiseY2 + 10, 7);

    p.noiseDetail(8, 0.6);
    let noiseY = p.noise(loopPct * 50);
    p.fill(0, 100, 50);
    p.stroke(0, 83, 70);
    p.circle(x, 20 * noiseY + 120, 8);
    p.circle(x, 40 * noiseY + 140, 5);


    let h = p.height;
    let hue = (150 + p.frameCount) % 360;
    t = p.millis() * 0.0001;
     x =   0.4  * Math.sin(t * 2) + w / 4;
     let y = 0.1 *   Math.cos(t * 2) + h / 2;

    p.translate(x/2, y/2);



    let scale = 2 * Math.sin(t * 10) + 3;
    p.scale(scale, scale);
    

    p.strokeWeight(2);
    p.stroke(hue, 100, 50, 0.9); 
    p.fill(hue, 100, 100);
    p.textSize(7);
    p.text("Trail of Dust!!!", 0, 0);
    

  }
  },
]
