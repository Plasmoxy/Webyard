import p5 from 'p5'

new p5((p: p5) => {
  
  
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    console.log("xd")
  }
  
  p.draw = () => {
    p.background(0)
    
  }
  
  p.windowResized = () =>
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  
})