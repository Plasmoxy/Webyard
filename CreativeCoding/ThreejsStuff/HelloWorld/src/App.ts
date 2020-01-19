import { Clock, Color, LineBasicMaterial, LineSegments, PerspectiveCamera, Scene, SphereBufferGeometry, WireframeGeometry } from "three"
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls"
import { renderer } from "."
import TWEEN from '@tweenjs/tween.js'

const clock = new Clock()
let dt = 0
let scene = new Scene()
let cam = new PerspectiveCamera(
  110,
  window.innerWidth / window.innerHeight,
  0.05,
  10000
)

let controls: FirstPersonControls

const camSet = {
  fov: 110,
  camSpeed: 0.5
}
const tweenHyperspace = new TWEEN.Tween(camSet)
  .to({ fov: 179, camSpeed: 5 }, 1000)
  .easing(TWEEN.Easing.Quadratic.Out)
const tweenNormal = new TWEEN.Tween(camSet)
  .to({ fov: 110, camSpeed: 0.5}, 1000)
  .easing(TWEEN.Easing.Quadratic.Out)

const genSphere = (radius: number, lineColor: Color) => new LineSegments(
  new WireframeGeometry(new SphereBufferGeometry(radius, 12, 12)),
  new LineBasicMaterial( { color: lineColor, linewidth: 2 } )
)

export function setup() {
  controls = new FirstPersonControls(cam, renderer.domElement)
  controls.lookSpeed = 0.1
  controls.movementSpeed = 0
  cam.position.z = 70

  // generate spheres
  let color = new Color()
  for (let i = 0; i <= 3000; i++) {
    const spread = 100
    let x = (Math.random() - 0.5)*spread
    let y = (Math.random() - 0.5)*spread
    let z = (Math.random() - 0.5)*spread

    let vecLen = Math.sqrt( x*x + y*y + z*z )
    color.setHSL(0.48, 1, (spread - vecLen)/spread)

    let sph = genSphere(Math.random()*0.3, color)
    sph.position.x = x
    sph.position.y = y
    sph.position.z = z
    scene.add(sph)
  }
}

export function draw() {
  dt = clock.getDelta()

  if (camSet.camSpeed == 0.5 && controls.mouseDragOn) {
    tweenHyperspace.start();
  } else if (camSet.camSpeed == 5 && controls.mouseDragOn) {
    tweenNormal.start();
  }

  TWEEN.update()

  cam.position.z -= camSet.camSpeed * dt
  cam.fov = camSet.fov
  cam.updateProjectionMatrix()

  renderer.render(scene, cam)
}

export function resize(w: number, h: number) {
  cam.aspect = w / h
  cam.updateProjectionMatrix()
}