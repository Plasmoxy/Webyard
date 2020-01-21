import { AmbientLight, BoxGeometry, Color, DoubleSide, Mesh, MeshLambertMaterial, PerspectiveCamera, PlaneGeometry, PointLight, Scene, ShaderMaterial, ShaderMaterialParameters, Geometry } from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as three from 'three'
import { appClock, appRenderer } from "."
import gradientFrag from "./gradient.frag"
import gradientVert from './gradient.vert'

let controls: OrbitControls
let scene = new Scene()
let cam = new PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.05,
  1000
)

let meshes: Mesh[][]

export function setup() {
  cam.position.z = 3
  controls = new OrbitControls(cam, appRenderer.domElement)

  let pointLight = new PointLight(0xdddddd)
  pointLight.position.set(-5, 3, 3)
  scene.add(pointLight)

  let ambientLight = new AmbientLight(0x505050)
  scene.add(ambientLight)

  let planeGeo = new PlaneGeometry(10, 10)
  let planeMesh = new Mesh(planeGeo,
    new MeshLambertMaterial({side: DoubleSide, color: 0x222223})
  )

  //planeMesh.position.y = -1
  planeMesh.rotation.x = -Math.PI/2
  scene.add(planeMesh)

  // generate meshes
  meshes = new Array(5).fill(null).map( (row, yi) =>
    new Array(5).fill(null).map( (val, xi) => {
      let height = Math.random()
      let m = createShaderCube(0.5*(xi-2), height/2, 0.5*(yi-2), 0.2, height, 0.2)
      scene.add(m)
      return m
    })
  )
  
  console.log(meshes)

  window.D.meshes = meshes
  window.D.three = three
}

export function draw(dt: number) {

  // update uSeconds uniform
  for (let row of meshes) {
    for (let m of row) {
      m.rotation.x += Math.PI/4 * dt
      m.rotation.y += Math.PI/4 * dt
      m.material.uniforms.uSeconds.value = appClock.getElapsedTime();
    }
  }

  controls.update()

  appRenderer.render(scene, cam)
}

export function resize(w: number, h: number) {
  cam.aspect = w / h
  cam.updateProjectionMatrix()
}

function createShaderCube(x: number, y: number, z: number, wx:number=1, wy:number=1, wz:number=1) {
  let geo = new BoxGeometry(wx, wy, wz)
  let mesh = new Mesh(geo, new ShaderMaterial({
    uniforms: {
      color: {type: "vec3", value: new Color(0xFF0000)},
      uSeconds: {type: "float", value: appClock.getElapsedTime()}
    },
    fragmentShader: gradientFrag,
    vertexShader: gradientVert,
    transparent: true
  }))

  mesh.position.x = x
  mesh.position.y = y
  mesh.position.z = z

  return mesh
}
