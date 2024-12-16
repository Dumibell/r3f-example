import { OrbitControls, OrbitControlsProps } from "@react-three/drei";
import { Canvas, CanvasProps } from "@react-three/fiber";
import { ReactElement, useState } from "react";
import { twMerge } from "tailwind-merge";
import Scene from "./Scene";
import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";

interface IMotionContainerProps extends Partial<CanvasProps> {
  children: ReactElement;
  position?: [number, number, number];
  scale?: [number, number, number] | number;
  minDistance?: number;
  maxDistance?: number;
  OrbitControls?: ForwardRefComponent<OrbitControlsProps, any>;
  className?: string;
}

export default function MotionContainer({
  children,
  position,
  scale,
  minDistance,
  maxDistance,
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

        <OrbitControls minDistance={minDistance} maxDistance={maxDistance} />
      </Canvas>

      {/* play/pause button */}
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
