import p5 from 'p5'

new p5((p: p5) => {
  
  let m = p.createVector(2, 2)
  
  async function t() {
    console.log("from t")
  }
  
  t()
  
  p.setup = () => {
    p.createCanvas(p.width, p.height)
    console.log("xd")
  }
  
  p.draw = () => {
    p.background(255, 0, 255)
  }
  
})