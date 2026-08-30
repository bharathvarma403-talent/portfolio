import React from 'react';
import { DigitalCore } from './components/DigitalCore';
import { ParticlesField } from './components/ParticlesField';
import { FloatingTimelinePillar } from './components/FloatingTimelinePillar';
import { SkillConstellation3D } from './components/SkillConstellation3D';
import { ProjectPortal3D } from './components/ProjectPortal3D';
import { HologramCertificates } from './components/HologramCertificates';
import { CameraController } from './CameraController';
import { useDeviceQuality } from '@/hooks/useDeviceQuality';
import { SkillItem } from '@/data/portfolioData';

interface SceneManagerProps {
  scrollProgress: number;
  activeSectionIndex: number;
  onSkillClick?: (skill: SkillItem) => void;
}

export const SceneManager: React.FC<SceneManagerProps> = ({
  scrollProgress,
  activeSectionIndex,
  onSkillClick,
}) => {
  const { particleCount } = useDeviceQuality();

  return (
    <>
      {/* Scroll-Driven Dynamic Camera */}
      <CameraController
        scrollProgress={scrollProgress}
        activeSectionIndex={activeSectionIndex}
      />

      {/* Cinematic Ambient & Directional Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 15, 10]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#8b5cf6" />
      <pointLight position={[0, 3, 3]} intensity={8} color="#06b6d4" distance={25} />
      <pointLight position={[0, -3, -2]} intensity={6} color="#ec4899" distance={20} />

      {/* Floating Particles Matrix across the entire scene */}
      <ParticlesField count={particleCount} />

      {/* Persistent Central Digital Core with Orbiting Satellites */}
      <group position={[0, 0, 0]}>
        <DigitalCore />
      </group>

      {/* 3D Vertical Timeline Pillar (Active in Resume section) */}
      <group visible={activeSectionIndex === 2}>
        <FloatingTimelinePillar />
      </group>

      {/* 3D Interactive Skill Constellation (Active in Skills section) */}
      <group visible={activeSectionIndex === 3}>
        <SkillConstellation3D onSkillClick={onSkillClick} />
      </group>

      {/* 3D Project Portal (Active in Projects section) */}
      <group visible={activeSectionIndex === 4}>
        <ProjectPortal3D />
      </group>

      {/* 3D Hologram Certificates (Active in Certificates & Achievements) */}
      <group visible={activeSectionIndex === 5 || activeSectionIndex === 6}>
        <HologramCertificates />
      </group>
    </>
  );
};
