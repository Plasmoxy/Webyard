import { WebGLRenderer } from "three"
import { draw, resize, setup } from "./App"

declare global {
  interface Window {
    D: any // add debug exposing variable to window interface
  }
}
window.D = {}

export const renderer = new WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener("resize", ev => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  resize(window.innerWidth, window.innerHeight)
})

function animate() {
  requestAnimationFrame(animate);
  draw();
}

setup();
animate();

