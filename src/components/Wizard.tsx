"use client";

import { useRef, useEffect } from "react";
import { useFrame, GroupProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export default function Wizard(props: GroupProps) {
  const { scene } = useGLTF("/models/scene.gltf", "/models");

  const groupRef = useRef<Group>(null!);

  useEffect(() => {
    groupRef.current.rotation.x = 0.5;
  }, []);

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={groupRef} scale={[2, 2, 2]} position={[0, 2, 0]} {...props}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive object={scene} />
    </group>
  );
}
