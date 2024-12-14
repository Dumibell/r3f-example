"use client";

import { useState, useRef, useEffect } from "react";
import { useFrame, type MeshProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export default function Wizard(props: MeshProps) {
  const { nodes, materials } = useGLTF("/models/scene.gltf", "/models");
  const groupRef = useRef<Group>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // 모델을 초기에 90도 회전 (X축 기준)
  useEffect(() => {
    groupRef.current.rotation.x = -Math.PI / 2;
  }, []);

  useFrame((state, delta) => {
    // Y축 대신 Z축으로 회전
    groupRef.current.rotation.z += delta;
  });

  return (
    <group
      ref={groupRef}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={0.7} // 전체 크기를 줄임
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <mesh
        // @ts-ignore
        geometry={nodes.Cube002_0.geometry}
        material={materials.color}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        {...props}
      />
    </group>
  );
}
