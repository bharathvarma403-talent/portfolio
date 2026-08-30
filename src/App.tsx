import React, { useState } from 'react';
import { ThreeBackgroundCanvas } from '@/three/ThreeBackgroundCanvas';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ResumeSection } from '@/sections/ResumeSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { CertificatesSection } from '@/sections/CertificatesSection';
import { AchievementsSection } from '@/sections/AchievementsSection';
import { ContactSection } from '@/sections/ContactSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { SkillItem } from '@/data/portfolioData';

export function App() {
  const { scrollProgress, activeSection, activeSectionIndex } = useScrollProgress();
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const handleSkillSelect = (skill: SkillItem) => {
    setSelectedSkill(skill);
    const el = document.getElementById('skills');
    if (el && activeSection !== 'skills') {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-violet-600/30 selection:text-violet-200 overflow-x-hidden font-sans">
      {/* Custom Fluid Glowing Cursor */}
      <CustomCursor />

      {/* Persistent Fullscreen 3D WebGL Background Scene */}
      <ThreeBackgroundCanvas
        scrollProgress={scrollProgress}
        activeSectionIndex={activeSectionIndex}
      />

      {/* Cyber Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-30" />

      {/* Global Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Journey */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <SkillsSection
          selectedSkill={selectedSkill}
          onSkillSelect={handleSkillSelect}
        />
        <ProjectsSection />
        <CertificatesSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
