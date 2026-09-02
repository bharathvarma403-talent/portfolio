import React from 'react';
import { BrainCircuit, Code2, Database, Rocket, Sparkles, GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioData;

  const coreFocusAreas = [
    {
      icon: BrainCircuit,
      title: 'AI & Machine Learning Foundations',
      description: 'Undergraduate study at Lovely Professional University concentrating on computational algorithms, neural concepts, and analytical data modeling.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Code2,
      title: 'Full-Stack Web Engineering',
      description: 'Hands-on training at NxtWave Academy building end-to-end web architectures with React, Node.js, Express, and modern REST APIs.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Database,
      title: 'Data Analytics & Databases',
      description: 'Designing normalized schemas, relational queries, and ACID transactional pipelines with MySQL, PostgreSQL, Supabase, and Prisma.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Rocket,
      title: 'AI-Assisted Accelerated Workflow',
      description: 'Leveraging cutting-edge AI developer tools to architect, debug, test, and deploy resilient cloud software applications rapidly.',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Background & Foundations"
          title="Engineering Purpose-Driven Software"
          subtitle="Combining computational thinking, full-stack systems, and data analytics to solve practical engineering challenges."
        />

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-300">
                <GraduationCap size={14} />
                <span>B.Tech CSE (AI & ML) — Lovely Professional University</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading leading-snug">
                Building scalable web systems with analytical precision.
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {personal.bio}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                Currently advancing through hands-on full-stack development training at <strong className="text-slate-200">NxtWave Academy</strong>, building production systems and deploying cloud applications across Vercel, Render, and Supabase.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                <span>Academic Distinction (97.8% XII)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                <span>Production Projects: Vasavi & VIRTUAL</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 size={16} className="text-violet-400 flex-shrink-0" />
                <span>100+ Problems Solved (Codetantra)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                <span>AI-Assisted Software Dev</span>
              </div>
            </div>
          </div>

          {/* Core Focus Quadrant */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {coreFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <TiltCard
                  key={idx}
                  maxTilt={6}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-violet-500/40 transition-colors backdrop-blur-md flex items-start gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{area.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{area.description}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
