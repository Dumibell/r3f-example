"use client";

import { useGLTF } from "@react-three/drei";

export default function Wizard() {
  const { scene } = useGLTF("/models/scene.gltf", "/models");

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive object={scene} scale={2.5} />
    </>
  );
}
