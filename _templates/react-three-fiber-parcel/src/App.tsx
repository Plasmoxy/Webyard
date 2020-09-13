import './App.scss'
import React from "react"
import { render } from "react-dom"
import { Canvas } from 'react-three-fiber'

function App() {
  return <>
    <Canvas>
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="red" />
      </mesh>
    </Canvas>
  </>
}

render(
  <App />,
  document.getElementById("reactRoot")
)
