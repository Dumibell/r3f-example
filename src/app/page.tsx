"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Wizard from "@/components/Wizard";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen mt-20">
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          shadows
          camera={{
            position: [0, 0, 20], // z축 값을 더 크게 (더 멀리)
            fov: 50, // 시야각을 좁게 (기본값은 50)
          }}
        >
          <Wizard position={[0, -2, 0]} />
          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}
