import React from 'react';
import { Trophy, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioData;

  return (
    <section
      id="achievements"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Milestones & Impact"
          title="Key Achievements"
          subtitle="Verified computational milestones and algorithmic problem-solving on competitive coding platforms."
        />

        <div className="max-w-3xl mx-auto">
          {achievements.map((ach, idx) => (
            <TiltCard
              key={idx}
              maxTilt={6}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-950 via-violet-950/30 to-slate-950 border border-violet-500/40 backdrop-blur-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-pink-500 p-[1px] shadow-lg shadow-amber-500/20">
                  <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center text-amber-300">
                    <Trophy size={24} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block">
                      Verified CV Achievement
                    </span>
                    <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-500/30">
                      {ach.date}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                    {ach.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {ach.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {ach.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-xs font-mono text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
