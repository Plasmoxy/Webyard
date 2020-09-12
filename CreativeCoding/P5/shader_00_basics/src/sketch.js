
let shaderNames = ["red", "texcoord"]
let shaders = {}
let graphiks

function preload() {
  for (let name of shaderNames) {
    shaders[name] = loadShader(`src/${name}.vert`, `src/${name}.frag`)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  graphiks = createGraphics(1000, 1000, WEBGL)
  noStroke()
}

function draw() {
  background(255)
  
  push()
  graphiks.shader(shaders['texcoord'])
  graphiks.rect(0, 0, width, height)
  
  texture(graphiks)
  
  plane(150, 150)
  translate(100, 100)
  plane(150, 150)
  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}