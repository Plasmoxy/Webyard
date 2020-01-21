/*
konštanty (sigma, r, b) = (S, R, B)

rovnice atraktora:
dx/dt = S(y - x)
dy/dt = x(R - z) - y
dz/dt = xy - Bz

*/

let x = 0.01, y = 0, z = 0
let S = 10, B = 8/3.0, R = 28
let points = []
let hue = 130

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL)
  createEasyCam()
  document.oncontextmenu = () => false

  colorMode(HSB)

}

function draw() {
  background(0)

  let dt = 0.01
  let dx = ( S*(y - x) )*dt
  let dy = ( x*(R - z) - y )*dt
  let dz = ( x*y - B*z )*dt
  x += dx
  y += dy
  z += dz

  points.push(createVector(x, y, z))
  noFill()
  scale(4)

  /*
  // draw line between points a(i-1) and a(i)
  for ( let i = 1; i < points.length; i++ ) {
    let p1 = points[i-1]
    let p2 = points[i]
    beginShape()
    stroke(hue, 255, 255)
    vertex(p1.x, p1.y, p1.z)
    vertex(p2.x, p2.y, p2.z)
    endShape()
    hue += 0.1
  }
  */

  stroke(hue, 255, 255)
  beginShape()
  for (let p of points) {
    vertex(p.x, p.y, p.z)
  }
  hue += 0.1
  endShape()
}