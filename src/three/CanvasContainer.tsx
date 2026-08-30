import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SceneManager } from './SceneManager';
import { useDeviceQuality } from '@/hooks/useDeviceQuality';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { SkillItem } from '@/data/portfolioData';

interface CanvasContainerProps {
  scrollProgress: number;
  activeSectionIndex: number;
  onSkillClick?: (skill: SkillItem) => void;
}

export const CanvasContainer: React.FC<CanvasContainerProps> = ({
  scrollProgress,
  activeSectionIndex,
  onSkillClick,
}) => {
  const { dpr, hasWebGL, isMobile } = useDeviceQuality();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,#1e1b4b,#030712)] opacity-70" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: isMobile ? 65 : 50 }}
        dpr={dpr}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true,
        }}
        className="w-full h-full pointer-events-auto"
      >
        <Suspense fallback={null}>
          <SceneManager
            scrollProgress={prefersReducedMotion ? 0 : scrollProgress}
            activeSectionIndex={activeSectionIndex}
            onSkillClick={onSkillClick}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
