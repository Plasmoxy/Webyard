
let shaderNames = ["red", "texcoord"]
let shaders = {}

function preload() {
  for (let name of shaderNames) {
    shaders[name] = loadShader(`src/${name}.vert`, `src/${name}.frag`)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  noStroke()
}

function draw() {
  background(255)
  
  shader(shaders['texcoord'])
  rect(0, 0, width, height)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}