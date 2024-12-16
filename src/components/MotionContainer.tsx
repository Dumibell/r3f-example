import { OrbitControls } from "@react-three/drei";
import { Canvas, CanvasProps, useFrame } from "@react-three/fiber";
import { ReactElement, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Group } from "three";

interface IMotionContainerProps extends Partial<CanvasProps> {
  children: ReactElement;
  position?: [number, number, number];
  scale?: [number, number, number] | number;
  className?: string;
}

export default function MotionContainer({
  children,
  position,
  scale,
  className,
  ...props
}: IMotionContainerProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className={twMerge("relative", className)}>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        camera={{
          position: [0, 0, 20],
          fov: 50,
        }}
        {...props}
      >
        <Scene isPlaying={isPlaying} position={position} scale={scale}>
          {children}
        </Scene>
        <OrbitControls minDistance={15} maxDistance={40} />
      </Canvas>
      <div className="absolute w-full flex gap-2 justify-end z-10  top-0 right-28">
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="w-10 h-10 border border-white rounded-xl cursor-pointer"
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
}

interface ISceneProps {
  children: ReactElement;
  position?: [number, number, number];
  scale?: [number, number, number] | number;
  isPlaying: boolean;
}

// Scene 컴포넌트 분리
function Scene({ children, position, scale, isPlaying }: ISceneProps) {
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
      <OrbitControls minDistance={15} maxDistance={40} />
    </>
  );
}
