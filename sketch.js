 
var hr, mn, sc

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)
  
}

function draw() {
  background(0); 

  translate(400, 200)

  rotate(-90)

  hr = hour()
  sc = second()
  mn = minute()

  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr % 12, 0, 12, 0, 360)

  push()
  rotate(scAngle)
  stroke('red')
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()

  push()
  rotate(mnAngle)
  stroke('lime')
  strokeWeight(7)
  line(0, 0, 75, 0)
  pop()

  push()
  rotate(hrAngle)
  stroke('blue')
  strokeWeight(7)
  line(0, 0, 50, 0)
  pop()

  
  point(0,0)
  strokeWeight(8)
  noFill()
  stroke('red')
  arc(0, 0, 280, 280, 0, scAngle)
  stroke('lime')
  arc(0, 0, 260, 260, 0, mnAngle)
  stroke('blue')
  arc(0, 0, 240, 240, 0, hrAngle)
  

  drawSprites();
}