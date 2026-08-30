import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { EnergyRings } from './EnergyRings';

export const DigitalCore: React.FC = () => {
  const coreGroupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const wireframeCageRef = useRef<THREE.Mesh>(null);
  const outerCageRef = useRef<THREE.Mesh>(null);
  const satellite1Ref = useRef<THREE.Mesh>(null);
  const satellite2Ref = useRef<THREE.Mesh>(null);
  const satellite3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();

    if (coreGroupRef.current) {
      // Dynamic mouse tracking + gentle orbital rotation
      coreGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        coreGroupRef.current.rotation.y,
        t * 0.2 + pointer.x * 0.6,
        0.05
      );
      coreGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        coreGroupRef.current.rotation.x,
        Math.sin(t * 0.25) * 0.15 - pointer.y * 0.4,
        0.05
      );
    }

    if (innerSphereRef.current) {
      const scale = 1 + Math.sin(t * 2.2) * 0.08;
      innerSphereRef.current.scale.set(scale, scale, scale);
      innerSphereRef.current.rotation.y = t * 0.4;
    }

    if (wireframeCageRef.current) {
      wireframeCageRef.current.rotation.x = -t * 0.25;
      wireframeCageRef.current.rotation.y = t * 0.35;
    }

    if (outerCageRef.current) {
      outerCageRef.current.rotation.y = -t * 0.18;
      outerCageRef.current.rotation.z = t * 0.22;
    }

    // Orbiting satellite polyhedrons
    if (satellite1Ref.current) {
      satellite1Ref.current.position.x = Math.cos(t * 0.8) * 3.2;
      satellite1Ref.current.position.y = Math.sin(t * 0.8) * 1.5;
      satellite1Ref.current.position.z = Math.sin(t * 0.8) * 3.2;
      satellite1Ref.current.rotation.x = t * 1.2;
      satellite1Ref.current.rotation.y = t * 0.8;
    }

    if (satellite2Ref.current) {
      satellite2Ref.current.position.x = Math.cos(t * 0.6 + 2.1) * 3.8;
      satellite2Ref.current.position.y = Math.sin(t * 0.5 + 1.0) * 1.8;
      satellite2Ref.current.position.z = Math.sin(t * 0.6 + 2.1) * 3.8;
      satellite2Ref.current.rotation.y = t * 1.0;
      satellite2Ref.current.rotation.z = t * 0.7;
    }

    if (satellite3Ref.current) {
      satellite3Ref.current.position.x = Math.cos(t * 0.7 + 4.2) * 2.8;
      satellite3Ref.current.position.y = Math.sin(t * 0.9 + 3.0) * 2.2;
      satellite3Ref.current.position.z = Math.sin(t * 0.7 + 4.2) * 2.8;
      satellite3Ref.current.rotation.x = -t * 0.9;
      satellite3Ref.current.rotation.z = -t * 1.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.9}>
      <group ref={coreGroupRef} position={[0, 0, 0]}>
        {/* Core Pulsating High-Emissive Sphere */}
        <mesh ref={innerSphereRef}>
          <sphereGeometry args={[1.0, 32, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#a855f7"
            emissiveIntensity={2.5}
            roughness={0.1}
            metalness={0.9}
            wireframe={false}
          />
        </mesh>

        {/* Primary Polyhedral Wireframe Core */}
        <mesh ref={wireframeCageRef}>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={2.0}
            wireframe
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Outer Dodecahedral Geometric Shield */}
        <mesh ref={outerCageRef}>
          <dodecahedronGeometry args={[2.1, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={1.5}
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Orbiting Satellite 1 - Cyan Octahedron */}
        <mesh ref={satellite1Ref}>
          <octahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={3.0}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Orbiting Satellite 2 - Magenta Tetrahedron */}
        <mesh ref={satellite2Ref}>
          <tetrahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={3.0}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Orbiting Satellite 3 - Violet Icosahedron */}
        <mesh ref={satellite3Ref}>
          <icosahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={3.0}
            wireframe
          />
        </mesh>

        {/* Orbiting Energy Gyro Rings */}
        <EnergyRings />

        {/* Dynamic Point Lights */}
        <pointLight color="#a855f7" intensity={12} distance={16} decay={2} />
        <pointLight color="#06b6d4" intensity={10} distance={14} decay={2} position={[2, 2, 2]} />
        <pointLight color="#ec4899" intensity={8} distance={12} decay={2} position={[-2, -2, -1]} />
      </group>
    </Float>
  );
};
