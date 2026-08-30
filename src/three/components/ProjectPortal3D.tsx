import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface LayerPanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  label: string;
  subtitle: string;
}

const LayerPanel: React.FC<LayerPanelProps> = ({ position, rotation = [0, 0, 0], color, label, subtitle }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Glass Pane Frame */}
      <mesh>
        <boxGeometry args={[1.8, 1.1, 0.04]} />
        <meshPhysicalMaterial
          color="#0f172a"
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.9}
          transmission={0.6}
          thickness={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Glowing Border Edge */}
      <mesh>
        <boxGeometry args={[1.82, 1.12, 0.02]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Internal Mini Screen Element */}
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={[1.6, 0.9]} />
        <meshStandardMaterial
          color="#020617"
          roughness={0.8}
        />
      </mesh>
    </group>
  );
};

export const ProjectPortal3D: React.FC = () => {
  const portalGroupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (portalGroupRef.current) {
      portalGroupRef.current.rotation.y = Math.sin(t * 0.3) * 0.15 + pointer.x * 0.15;
      portalGroupRef.current.rotation.x = Math.cos(t * 0.25) * 0.1 - pointer.y * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={portalGroupRef} position={[0, 0, 0]}>
        {/* Central Core Console */}
        <LayerPanel
          position={[0, 0, 0.4]}
          color="#8b5cf6"
          label="Vasavi Admin Cockpit"
          subtitle="Real-time Inventory & Order Dispatch"
        />

        {/* Left Depth Layer - Product Browsing */}
        <LayerPanel
          position={[-1.7, 0.4, -0.3]}
          rotation={[0, 0.25, 0]}
          color="#06b6d4"
          label="Product Catalog"
          subtitle="Cement, Paints, Pipes, Tanks"
        />

        {/* Right Depth Layer - Material Reservation */}
        <LayerPanel
          position={[1.7, 0.3, -0.3]}
          rotation={[0, -0.25, 0]}
          color="#ec4899"
          label="Reservation Engine"
          subtitle="Contractor Booking & Scheduling"
        />

        {/* Top-Right Depth Layer - Auth & Orders */}
        <LayerPanel
          position={[1.2, -1.0, -0.7]}
          rotation={[0, -0.15, 0]}
          color="#10b981"
          label="Order Tracking"
          subtitle="Dispatch State & Notifications"
        />

        {/* Bottom-Left Depth Layer - Database Gateway */}
        <LayerPanel
          position={[-1.2, -1.0, -0.7]}
          rotation={[0, 0.15, 0]}
          color="#3b82f6"
          label="Supabase / Prisma"
          subtitle="PostgreSQL ACID Storage"
        />

        {/* Ambient Portal Glow */}
        <pointLight color="#8b5cf6" intensity={4} distance={8} decay={2} />
        <pointLight color="#06b6d4" intensity={3} distance={6} decay={2} position={[-2, 1, 0]} />
        <pointLight color="#ec4899" intensity={3} distance={6} decay={2} position={[2, 1, 0]} />
      </group>
    </Float>
  );
};
