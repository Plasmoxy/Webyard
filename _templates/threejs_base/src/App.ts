import { PerspectiveCamera, Scene } from "three"
import { appRenderer } from "."


let scene = new Scene()
let cam = new PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.05,
  10000
)

export function setup() {

}

export function draw(dt: number) {

  appRenderer.render(scene, cam)
}

export function resize(w: number, h: number) {
  cam.aspect = w / h
  cam.updateProjectionMatrix()
}