import p5 from 'p5'

(window as any).p = new p5((p: p5) => {
  
  
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    
  }
  
  p.draw = () => {
    p.background(0)
    
  }
  
  p.windowResized = () => p.resizeCanvas(
    p.windowWidth, p.windowHeight
  )
  
  
  
})