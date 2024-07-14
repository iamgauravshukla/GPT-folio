import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls } from '@react-three/drei';
import Model from './Model';

const GLBModelViewer = ({ modelUrl }) => {
    const orbitRef = useRef();
  
    return (
      <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }} style={{ width: '600px', height: '70vh' }}>
        <ambientLight intensity={2} />
        <directionalLight
          position={[0, 10, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <OrbitControls ref={orbitRef} />
        <Bounds fit  observe margin={1}>
          <Model url={modelUrl} />
        </Bounds>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
    );
  };

  export default GLBModelViewer;