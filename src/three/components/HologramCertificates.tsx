import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const HologramCertificates: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Certificate 1 Hologram Shield */}
        <group position={[-1.4, 0.2, 0]} rotation={[0, 0.2, 0]}>
          <mesh>
            <boxGeometry args={[2.0, 1.4, 0.05]} />
            <meshPhysicalMaterial
              color="#0c1322"
              emissive="#8b5cf6"
              emissiveIntensity={0.4}
              roughness={0.1}
              metalness={0.8}
              transmission={0.7}
              thickness={0.4}
              transparent
              opacity={0.85}
            />
          </mesh>
          <mesh>
            <boxGeometry args={[2.04, 1.44, 0.03]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={1.5}
              wireframe
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>

        {/* Certificate 2 Hologram Shield */}
        <group position={[1.4, -0.2, 0.3]} rotation={[0, -0.2, 0]}>
          <mesh>
            <boxGeometry args={[2.0, 1.4, 0.05]} />
            <meshPhysicalMaterial
              color="#0c1322"
              emissive="#06b6d4"
              emissiveIntensity={0.4}
              roughness={0.1}
              metalness={0.8}
              transmission={0.7}
              thickness={0.4}
              transparent
              opacity={0.85}
            />
          </mesh>
          <mesh>
            <boxGeometry args={[2.04, 1.44, 0.03]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={1.5}
              wireframe
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>
      </group>
    </Float>
  );
};
