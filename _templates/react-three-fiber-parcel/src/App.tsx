import { MeshWobbleMaterial, OrbitControls, softShadows } from "drei"
import React, { useRef, useState } from "react"
import { render } from "react-dom"
import { a, useSpring } from "react-spring/three"
import { Canvas, useFrame } from 'react-three-fiber'
import { Mesh, Vector3 } from 'three'
import './App.scss'

// soft Shadows
softShadows({});

const SpinningMesh = ({ position, color, speed, args }: any) => {
  //ref to target the mesh
  const mesh = useRef<Mesh>();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame((ctx, dt) => {
    const m = mesh.current!!
    m.rotation.x = m.rotation.y += 0.01
  });

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [4, 0.5, 1.4] : [1, 1, 1],
  });
  
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      onPointerOver={() => {
        document.body.style.cursor = "pointer"
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto"
      }}
      scale={props.scale as any}
      castShadow>
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach='material'
        factor={0.6}
      />
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
};

function App() {
  return <>
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [-5, 2, 10], fov: 60 }}>
      {/* This light makes things look pretty */}
      <ambientLight intensity={0.3} />
      {/* Our main source of light, also casting our shadow */}
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* A light to help illumnate the spinning boxes */}
      <pointLight position={[-10, 0, -20]} intensity={0.5}  />
      <pointLight position={[0, -10, 0]} intensity={0.5} />
      <group>
        {/* This mesh is the plane (The floor) */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
          receiveShadow>
          <planeBufferGeometry attach='geometry' args={[100, 100]} />
          <meshStandardMaterial attach='material' color="#111" />
        </mesh>
        <SpinningMesh
          position={[0, 1, 0]}
          color='#00e6da'
          args={[3, 2, 1]}
          speed={2}
        />
        <SpinningMesh position={[-2, 1, -5]} color='#ff8000' speed={6} />
        <SpinningMesh position={[5, 1, -2]} color='#03a1fc' speed={50} />
      </group>
      {/* Allows us to move the canvas around for different prespectives */}
      <OrbitControls target={[3, 1, -3]}/>
    </Canvas>
  </>
}

render(
  <App />,
  document.getElementById("reactRoot")
)
