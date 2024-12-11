"use client";

import Box from "@/components/Box";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ width: "50vw", height: "50vh" }}>
        <Canvas
          camera={{
            position: [0, 1, 10],
          }}
        >
          <Box position={[0, 0, 0]} />
          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}
