import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronRight, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { portfolioData } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';

export const ProjectsSection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const project = portfolioData.projects[0];

  if (!project) return null;

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Featured Engineering Project"
          title="Vasavi Traders"
          subtitle="Full-stack commercial construction material platform engineered with material reservations, order tracking, and dynamic admin management."
        />

        {/* Main Project Hero Card */}
        <div className="rounded-3xl bg-slate-950/80 border border-violet-500/30 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl shadow-violet-950/40 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Project Overview & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Sparkles size={14} />
                <span>{project.duration}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Exact Bullets from CV */}
              <div className="space-y-2.5 pt-2">
                {project.bullets.map((bullet, idx) => (
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
                  {project.techStack.map((tech) => (
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
                <MagneticButton
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
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
                    src={project.images[activeImageIndex] || project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </TiltCard>

              {/* Thumbnail Selector */}
              <div className="grid grid-cols-5 gap-2">
                {project.images.map((img, idx) => (
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
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.features.map((feat, idx) => (
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
