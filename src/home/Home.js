import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import {  SpotLight } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function BodyShape(props) {
  const glb = useLoader(GLTFLoader, "/male-human.glb");
  // access to the mesh
  const mesh = useRef()
  // const [hovered, setHover] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.y += (delta * 2)))
    return <primitive ref={mesh} object={glb.scene} dispose={null} />;
}

function Home() {
  return (
    <div className="flex flex-col">

      <Canvas camera={{ position: [0, 0, 20], fov: 25 }}

        style={{
          borderRadius: '15px',
          margin: 'auto',
          backgroundColor: '#111a21',
          width: '80vw',
          height: '80vh',
        }} >

        <SpotLight opacity={0.6} color={"red"} position={[2, 2, 1]} />
        <SpotLight opacity={0.6}d color={"red"} position={[-4, 2, 3]} />
        <SpotLight opacity={0.6} color={"blue"} position={[4, 2, 3]} />
        <SpotLight opacity={0.6}d color={"blue"} position={[-2, 2, 1]} />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <BodyShape position={[0, 1, 0]} />
        
      </Canvas>
    </div>
  );
}

export default Home;
