import { WebGLRenderer, Clock } from "three"
import { draw, resize, setup } from "./App"

declare global {
  interface Window {
    D: any // add debug exposing variable to window interface
  }
}
window.D = {}

export const appRenderer = new WebGLRenderer()
export const appClock = new Clock();

// setup renderer
appRenderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(appRenderer.domElement)

window.addEventListener("resize", ev => {
  appRenderer.setSize(window.innerWidth, window.innerHeight)
  resize(window.innerWidth, window.innerHeight)
})

// setup and launch animation after setup
function animate() {
  requestAnimationFrame(animate);
  draw(appClock.getDelta());
}

setup();
animate();

