"use client";

import { useRef, useState } from "react";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils, Points as ThreePoints } from "three";

export function Stars3D() {
  return (
    <Canvas className="animate-fade-in pointer-events-none">
      <Stars />
      <perspectiveCamera position={[0, 0, 2]} />
    </Canvas>
  );
}

function Stars() {
  const randomVertices = () => {
    const NUMBER_OF_PARTICLES = 10000;
    const MAX_SPREAD = 7;

    const positions = new Float32Array(NUMBER_OF_PARTICLES * 3);
    const colors = new Float32Array(NUMBER_OF_PARTICLES * 3);

    for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
      const x = MathUtils.randFloatSpread(MAX_SPREAD);
      const y = MathUtils.randFloatSpread(MAX_SPREAD);
      const z = MathUtils.randFloatSpread(MAX_SPREAD);

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      const r = Math.random();
      const g = Math.random();
      const b = Math.random();

      colors[i] = r;
      colors[i + 1] = g;
      colors[i + 2] = b;
    }

    return {
      positions,
      colors,
    };
  };

  const [{ positions, colors }] = useState(() => randomVertices());

  const pointsRef = useRef<ThreePoints>(null!);

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta / 100;
    pointsRef.current.rotation.z += delta / 100;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      frustumCulled={false}
      colors={colors}
      stride={3}
    >
      <PointMaterial
        vertexColors
        color="#fff"
        transparent
        size={0.009}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </Points>
  );
}
