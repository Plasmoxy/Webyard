let vyraz = ""
let mapa = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]


let a, b, c, d

let sketch = function(p) {
  
  $("#vyraz").keydown(e => {
    vyraz = $("#vyraz").val()
  })
  
  p.setup = () => {
    p.createCanvas(400, 400)
  }
  
  p.draw = () => {
    p.background(0)
    p.fill(0, 255, 255)
    p.stroke(0, 255, 255)
    
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (mapa[y][x] > 0) {
          p.rect(x*100, y*100, 100, 100)
        }
      }
    }
  }
  
  p.windowResized = () => {
    p.resizeCanvas(windowWidth, windowHeight)
  }
}

new p5(sketch, 'sketch')

