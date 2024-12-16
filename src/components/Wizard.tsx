"use client";

import { useRef, useEffect } from "react";
import { useFrame, GroupProps } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Group } from "three";

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
