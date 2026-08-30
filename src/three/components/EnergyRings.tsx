import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const EnergyRings: React.FC = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.35;
      ring1Ref.current.rotation.y = t * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.4;
      ring2Ref.current.rotation.z = t * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.2;
      ring3Ref.current.rotation.z = -t * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Ring 1 - Violet */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.2, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Middle Ring 2 - Cyan */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.7, 0.014, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Outer Gyro Ring 3 - Magenta */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.2, 0.012, 16, 100]} />
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={1.4}
          roughness={0.3}
          metalness={0.9}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};
