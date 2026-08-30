import React, { useState } from 'react';
import { Download, GraduationCap, Briefcase, Award, CheckCircle, FileText, Calendar, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { MagneticButton } from '@/components/MagneticButton';
import { TiltCard } from '@/components/TiltCard';

export const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'training' | 'credentials'>('all');

  const { education, training, certificates, achievements, personal } = portfolioData;

  return (
    <section
      id="resume"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Curriculum Vitae"
          title="Education, Training & Credentials"
          subtitle="Directly aligned with official CV records from Lovely Professional University, NxtWave Academy, and academic institutions."
        />

        {/* Prominent Resume Download Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-violet-950/40 to-slate-950 border border-violet-500/30 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px] flex-shrink-0 shadow-lg shadow-violet-600/30">
              <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center text-white">
                <FileText size={26} className="text-violet-300" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">
                Pavan Bharath Varma Datla — Official CV
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-400">
                Pavan Bharath Varma CV (1) • Verified Document • Updated 2026
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <MagneticButton
              as="a"
              href={personal.resumeUrl}
              download="Pavan_Bharath_Varma_CV.pdf"
              target="_blank"
              variant="primary"
              size="lg"
              icon={<Download size={18} />}
              className="w-full sm:w-auto"
            >
              Download CV (PDF)
            </MagneticButton>
            <MagneticButton
              as="a"
              href={personal.resumeDocxUrl}
              download="Pavan_Bharath_Varma_CV.docx"
              variant="secondary"
              size="lg"
              icon={<FileText size={18} />}
              className="w-full sm:w-auto"
            >
              Download (.docx)
            </MagneticButton>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {[
              { id: 'all', label: 'Complete CV Trajectory' },
              { id: 'education', label: 'Education' },
              { id: 'training', label: 'Training' },
              { id: 'credentials', label: 'Certificates & Achievements' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-900/50'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Timeline Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Education Entries */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-violet-400 flex items-center gap-2 mb-2">
                <GraduationCap size={16} />
                EDUCATION (From CV)
              </h4>

              {education.map((edu, idx) => (
                <TiltCard
                  key={idx}
                  maxTilt={4}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-violet-500/40 transition-all backdrop-blur-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-base sm:text-lg font-bold text-white block">
                        {edu.degree}
                      </span>
                      <span className="text-sm font-medium text-cyan-400 block">
                        {edu.institution}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar size={13} className="text-violet-400" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                    <MapPin size={13} className="text-pink-400" />
                    <span>{edu.location}</span>
                    {edu.score && (
                      <span className="ml-2 px-2.5 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 font-semibold">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </TiltCard>
              ))}
            </div>
          )}

          {/* Technical Training */}
          {(activeTab === 'all' || activeTab === 'training') && (
            <div className="space-y-4 pt-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2 mb-2">
                <Briefcase size={16} />
                TRAINING (From CV)
              </h4>

              {training.map((t, idx) => (
                <TiltCard
                  key={idx}
                  maxTilt={4}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all backdrop-blur-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-base sm:text-lg font-bold text-white block">
                        {t.title}
                      </span>
                      <span className="text-sm font-medium text-cyan-400 block">
                        {t.provider}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700">
                      {t.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {t.description}
                  </p>

                  {/* Bullet Highlights from CV */}
                  <ul className="space-y-2 mb-4">
                    {t.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {t.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              ))}
            </div>
          )}

          {/* Credentials & Milestones */}
          {(activeTab === 'all' || activeTab === 'credentials') && (
            <div className="space-y-4 pt-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-pink-400 flex items-center gap-2 mb-2">
                <Award size={16} />
                CERTIFICATES & ACHIEVEMENTS (From CV)
              </h4>

              {/* Achievements Highlight */}
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-violet-950/40 to-slate-900 border border-violet-500/40 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-violet-300 uppercase tracking-wider mb-2">
                    <Sparkles size={14} className="text-cyan-400" />
                    ACHIEVEMENT
                  </div>
                  <h5 className="text-base sm:text-lg font-bold text-white mb-2">{ach.title}</h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {ach.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ach.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-[10px] font-mono text-violet-200 border border-violet-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Certifications List */}
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-sm font-bold text-white block">{cert.title}</span>
                    <span className="text-xs text-slate-400 font-mono">
                      {cert.issuer} • {cert.issueDate}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
