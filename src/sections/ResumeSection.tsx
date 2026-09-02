import React, { useState, useEffect } from 'react';
import { Download, GraduationCap, Briefcase, Award, CheckCircle, FileText, Calendar, MapPin, Sparkles, ExternalLink, X, Eye } from 'lucide-react';
import { portfolioData, CertificateItem } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { MagneticButton } from '@/components/MagneticButton';
import { TiltCard } from '@/components/TiltCard';

export const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'training' | 'credentials'>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const { education, training, certificates, achievements, personal } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

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
              download="Pavan_Bharath_Varma_CV.docx"
              variant="primary"
              size="lg"
              icon={<Download size={18} />}
              className="w-full md:w-auto"
            >
              Download Verified CV (.docx)
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-violet-500/50 hover:bg-slate-900 flex flex-col justify-between gap-3 cursor-pointer transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-[10px] font-mono font-bold text-violet-300">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400">
                          {cert.issueDate}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-violet-300 transition-colors block">
                        {cert.title}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
                      <span className="flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                        <Eye size={12} /> View Certificate
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-violet-500/40 p-5 sm:p-7 shadow-2xl shadow-violet-950/80 max-h-[90vh] overflow-y-auto space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-xs font-mono font-bold text-violet-300">
                    {selectedCert.issuer}
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    {selectedCert.issueDate}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  {selectedCert.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer flex-shrink-0"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[58vh] object-contain rounded-xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                {selectedCert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <a
                  href={selectedCert.imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-all flex items-center gap-1.5"
                >
                  <Eye size={14} /> Full Image
                </a>

                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs font-mono transition-all flex items-center gap-1.5 shadow-md shadow-violet-900/50"
                  >
                    <ExternalLink size={14} /> Verify Credential
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
