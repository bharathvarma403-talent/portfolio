import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const timelineNodes = [
  { y: 3.5, label: 'LPU B.Tech (AI & ML)', color: '#8b5cf6' },
  { y: 1.8, label: 'NxtWave Full-Stack', color: '#06b6d4' },
  { y: 0.1, label: 'Vasavi Traders Deployment', color: '#ec4899' },
  { y: -1.6, label: 'Narayana Jr College (97.8%)', color: '#3b82f6' },
  { y: -3.3, label: 'Royal School (93.3%)', color: '#10b981' },
];

export const FloatingTimelinePillar: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const beamRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }
    if (beamRef.current) {
      const mat = beamRef.current.material as THREE.MeshStandardMaterial;
      mat.opacity = 0.5 + Math.sin(t * 2) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[2.5, 0, -2]}>
      {/* Central Illuminated Pillar Beam */}
      <mesh ref={beamRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 8.5, 16]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Nodes Along the Pillar */}
      {timelineNodes.map((node, idx) => (
        <group key={idx} position={[0, node.y, 0]}>
          {/* Beacon Orb */}
          <mesh>
            <sphereGeometry args={[0.18, 24, 24]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={2.5}
              roughness={0.1}
            />
          </mesh>

          {/* Orbiting Halo Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.35, 0.02, 12, 32]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={1.8}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Subtle Point Light for Node */}
          <pointLight color={node.color} intensity={1.5} distance={3} decay={2} />
        </group>
      ))}
    </group>
  );
};
