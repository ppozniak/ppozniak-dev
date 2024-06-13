"use client";

import { useRef, useState } from "react";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { randomStarfield } from "src/utils/three-utils";
import { Points as ThreePoints } from "three";

const STARS_N = 10000;

export function Stars3D() {
  return (
    <Canvas className="animate-fade-in pointer-events-none">
      <Stars />
      <perspectiveCamera position={[0, 0, 2]} />
    </Canvas>
  );
}

function Stars() {
  const [{ positions, colors }] = useState(() => randomStarfield(STARS_N));

  const pointsRef = useRef<ThreePoints>(null!);

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta / 100;
    pointsRef.current.rotation.z += delta / 100;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      colors={colors}
      frustumCulled={false}
      stride={3}
    >
      <PointMaterial
        color="#fff"
        transparent
        size={0.01}
        depthWrite={false}
        sizeAttenuation={true}
        toneMapped={false}
      />
    </Points>
  );
}
