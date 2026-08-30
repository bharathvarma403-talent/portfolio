import React from 'react';
import { Award, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';

export const CertificatesSection: React.FC = () => {
  const { certificates } = portfolioData;

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Verified Credentials"
          title="Official Certifications"
          subtitle="Accredited certifications validating foundational frontend layout design, Bootstrap, and static web development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <TiltCard
              key={idx}
              maxTilt={6}
              className="p-7 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-violet-500/40 transition-all backdrop-blur-xl shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-4">
                  Issuing Organization: <strong className="text-slate-200">{cert.issuer}</strong>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
