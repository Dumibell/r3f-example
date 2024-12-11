"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Mesh } from "three";
import { type MeshProps } from "@react-three/fiber";

export default function Box(props: MeshProps) {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <>
      <mesh
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        {...props}
      >
        <boxGeometry args={[5, 5, 5]} />

        <meshStandardMaterial />
      </mesh>
    </>
  );
}
