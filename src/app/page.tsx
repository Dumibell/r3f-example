"use client";

import Wizard from "@/components/Atoms/Wizard";
import MotionContainer from "@/components/Molcules/MotionContainer";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen bg-black text-white">
        <div className="flex flex-col h-full justify-center">
          <MotionContainer
            className="h-[450px]"
            position={[0, -4, 0]}
            scale={[2, 2, 2]}
            minDistance={12}
            maxDistance={40}
          >
            <Wizard />
          </MotionContainer>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in">
              R3F Playground
            </h1>
            <h2 className="text-2xl mb-6 opacity-80">
              Learning Three.js with React Three Fiber
            </h2>
            <p className="text-lg text-center opacity-70 max-w-xl">
              Exploring 3D web development with React Three Fiber and Three.js.
              Interactive demo featuring model loading, lighting, and camera
              controls.
            </p>
          </div>
          <div className="text-sm opacity-50 hover:opacity-80 absolute z-1 bottom-3 right-3">
            <p>3D Model: "Wizard" from Sketchfab</p>
            <a
              href="https://sketchfab.com/3d-models/wizard-asset-fot-tower-of-the-wizard-scene-2bee14d9fbf649d28ba20aad3e0c6790"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline pointer-events-auto"
            >
              Visit Sketchfab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
