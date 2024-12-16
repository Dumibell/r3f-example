import { useFrame } from "@react-three/fiber";
import { ReactElement, useEffect, useRef } from "react";
import { Group } from "three";

interface ISceneProps {
  children: ReactElement;
  position?: [number, number, number];
  scale?: [number, number, number] | number;
  isPlaying: boolean;
}

export default function Scene({
  children,
  position,
  scale,
  isPlaying,
}: ISceneProps) {
  const groupRef = useRef<Group>(null!);

  useEffect(() => {
    groupRef.current.rotation.x = 0.5;
  }, []);

  useFrame((state, delta) => {
    if (isPlaying) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      <group ref={groupRef} scale={scale} position={position}>
        {children}
      </group>
    </>
  );
}
