import { PerspectiveCamera, Scene } from "three"
import { appRenderer } from "."


let scene = new Scene()
let cam = new PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.05,
  1000
)

export function setup() {
  cam.position.z = 2
}

export function draw(dt: number) {

  appRenderer.render(scene, cam)
}

export function resize(w: number, h: number) {
  cam.aspect = w / h
  cam.updateProjectionMatrix()
}