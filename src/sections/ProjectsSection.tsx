import React from 'react';
import { Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { portfolioData, ProjectDetail } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader
          badge="Featured Engineering Projects"
          title="Production Projects"
          subtitle="Full-stack web applications built with modern frameworks, cloud databases, and live deployments."
        />

        {/* Stacked Projects (Up & Down Layout) */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-950/80 border border-violet-500/30 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl shadow-violet-950/30 hover:border-violet-500/50 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Essential Project Info & Actions */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-xs font-mono font-bold text-violet-300 border border-violet-500/40">
                      0{idx + 1} PROJECT
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                      <Sparkles size={13} />
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                    {project.title}
                  </h3>

                  {/* Bullet Points from CV */}
                  <div className="space-y-2 pt-1">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle size={15} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges from CV */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-mono text-cyan-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Clean Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <MagneticButton
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="primary"
                        size="md"
                        icon={<ExternalLink size={15} />}
                      >
                        Live Website
                      </MagneticButton>
                    )}

                    <MagneticButton
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline"
                      size="md"
                      icon={<GithubIcon size={15} />}
                    >
                      View on GitHub
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Column: Clean Visual Image Showcase */}
                <div className="lg:col-span-5">
                  <TiltCard
                    maxTilt={6}
                    className="p-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl overflow-hidden group"
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </TiltCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
