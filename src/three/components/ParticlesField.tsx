import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesFieldProps {
  count?: number;
}

export const ParticlesField: React.FC<ParticlesFieldProps> = ({ count = 900 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions and colors
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color('#8b5cf6'), // Violet
      new THREE.Color('#a855f7'), // Purple
      new THREE.Color('#06b6d4'), // Cyan
      new THREE.Color('#38bdf8'), // Sky Blue
      new THREE.Color('#ec4899'), // Pink
      new THREE.Color('#ffffff'), // Star White
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 2.5 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = (Math.random() - 0.5) * 40;
      pos[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame(({ clock, pointer }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime();

    pointsRef.current.rotation.y = time * 0.04 + pointer.x * 0.08;
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.06 - pointer.y * 0.06;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};
