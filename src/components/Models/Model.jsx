import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model = ({ url }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += 0.005;
//     }
//   });

  return (
    <group ref={group} dispose={null} position={[0, -1, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} castShadow />
    </group>
  );
};

export default Model;
