import React, { useState } from 'react';
import { Sparkles, CheckCircle, ExternalLink, Globe } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { portfolioData, ProjectDetail } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0]?.id || 'vasavi-traders');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  if (!currentProject) return null;

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Featured Engineering Projects"
          title="Production Platforms"
          subtitle="Full-stack web systems engineered with modern architectures, user authentication, responsive design, and live deployments."
        />

        {/* Project Selector Tabs */}
        {projects.length > 1 && (
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveProjectId(p.id);
                    setActiveImageIndex(0);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeProjectId === p.id
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold shadow-lg shadow-violet-950/50'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Project Hero Card */}
        <div className="rounded-3xl bg-slate-950/80 border border-violet-500/30 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl shadow-violet-950/40 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Project Overview & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Sparkles size={14} />
                <span>{currentProject.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading leading-tight">
                {currentProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Exact Bullets from CV */}
              <div className="space-y-2.5 pt-2">
                {currentProject.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges from CV */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2.5">
                  Tech Stack (From CV):
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {currentProject.liveUrl && (
                  <MagneticButton
                    as="a"
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    size="md"
                    icon={<ExternalLink size={16} />}
                  >
                    Live Website
                  </MagneticButton>
                )}

                <MagneticButton
                  as="a"
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  size="md"
                  icon={<GithubIcon size={16} />}
                >
                  View on GitHub
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Interactive Product Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <TiltCard
                maxTilt={8}
                className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl overflow-hidden"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={currentProject.images[activeImageIndex] || currentProject.heroImage}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </TiltCard>

              {/* Thumbnail Selector */}
              {currentProject.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {currentProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-cyan-400 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentProject.features.map((feat, idx) => (
            <TiltCard
              key={idx}
              maxTilt={6}
              className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md"
            >
              <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
