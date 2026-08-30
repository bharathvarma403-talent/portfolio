import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioData, SkillItem } from '@/data/portfolioData';

interface NodeProps {
  skill: SkillItem;
  position: [number, number, number];
  onSelect: (skill: SkillItem) => void;
  isSelected: boolean;
}

const ConstellationNode: React.FC<NodeProps> = ({ skill, position, onSelect, isSelected }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    const targetScale = isSelected ? 1.6 : hovered ? 1.4 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(skill);
        }}
      >
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial
          color={skill.color || '#8b5cf6'}
          emissive={skill.color || '#8b5cf6'}
          emissiveIntensity={hovered || isSelected ? 3.0 : 1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Floating 3D Label on Hover or Selection */}
      {(hovered || isSelected) && (
        <Html distanceFactor={8} position={[0, 0.4, 0]} center>
          <div className="pointer-events-none px-2.5 py-1 rounded-md bg-slate-900/90 border border-violet-500/50 backdrop-blur-md text-[11px] font-mono text-white whitespace-nowrap shadow-lg shadow-violet-950/50">
            <span className="font-bold text-violet-300">{skill.name}</span>
            <span className="block text-[9px] text-slate-400">{skill.subLabel || skill.level}</span>
          </div>
        </Html>
      )}
    </group>
  );
};

export const SkillConstellation3D: React.FC<{ onSkillClick?: (skill: SkillItem) => void }> = ({ onSkillClick }) => {
  const constellationRef = useRef<THREE.Group>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const devSkills = (portfolioData.skills as any).development || (portfolioData.skills as any).technologies || [];
  const strengthSkills = (portfolioData.skills as any).strengths || (portfolioData.skills as any).soft || [];
  const langSkills = portfolioData.skills.languages || [];
  const toolSkills = portfolioData.skills.tools || [];

  const allSkills = useMemo(() => {
    return [
      ...langSkills,
      ...devSkills,
      ...toolSkills,
      ...strengthSkills,
    ];
  }, [langSkills, devSkills, toolSkills, strengthSkills]);

  // Compute 3D positions in 4 spherical clusters
  const nodePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const clusterCenters = [
      [-2.8, 1.4, -0.8], // Languages
      [2.8, 1.4, -0.8],  // Development
      [-2.4, -1.8, -0.8], // Databases & Tools
      [2.4, -1.8, -0.8],  // Core Strengths
    ];

    let skillIndex = 0;
    const categories = [
      langSkills,
      devSkills,
      toolSkills,
      strengthSkills,
    ];

    categories.forEach((cat, cIdx) => {
      const center = clusterCenters[cIdx];
      cat.forEach((_: any, sIdx: number) => {
        const angle = (sIdx / (cat.length || 1)) * Math.PI * 2;
        const radius = 1.1 + (sIdx % 2) * 0.3;
        positions[skillIndex] = [
          center[0] + Math.cos(angle) * radius,
          center[1] + (Math.sin(angle) * radius * 0.7) + (sIdx % 2 === 0 ? 0.2 : -0.2),
          center[2] + Math.sin(angle * 2) * 0.3,
        ];
        skillIndex++;
      });
    });

    return positions;
  }, [langSkills, devSkills, toolSkills, strengthSkills]);

  // Line connections between nearby nodes
  const linePoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    let offset = 0;
    const counts = [
      langSkills.length,
      devSkills.length,
      toolSkills.length,
      strengthSkills.length,
    ];

    counts.forEach((count) => {
      for (let i = 0; i < count; i++) {
        const next = (i + 1) % count;
        const p1 = nodePositions[offset + i];
        const p2 = nodePositions[offset + next];
        if (p1 && p2) {
          points.push(new THREE.Vector3(...p1));
          points.push(new THREE.Vector3(...p2));
        }
      }
      offset += count;
    });

    return points;
  }, [nodePositions]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
    return geo;
  }, [linePoints]);

  useFrame(({ clock }) => {
    if (!constellationRef.current) return;
    const t = clock.getElapsedTime();
    constellationRef.current.rotation.y = t * 0.04;
  });

  const handleSelect = (skill: SkillItem) => {
    setSelectedSkill(skill);
    if (onSkillClick) onSkillClick(skill);
  };

  return (
    <group ref={constellationRef} position={[0, 0, 0]}>
      {/* Connecting Cyber Lines */}
      {linePoints.length > 0 && (
        <lineSegments geometry={lineGeometry}>
          <lineBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      )}

      {/* 3D Nodes */}
      {allSkills.map((skill, index) => (
        <ConstellationNode
          key={skill.name}
          skill={skill}
          position={nodePositions[index] || [0, 0, 0]}
          onSelect={handleSelect}
          isSelected={selectedSkill?.name === skill.name}
        />
      ))}
    </group>
  );
};
