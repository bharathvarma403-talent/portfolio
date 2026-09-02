import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, X, Eye, CheckCircle2 } from 'lucide-react';
import { portfolioData, CertificateItem } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { TiltCard } from '@/components/TiltCard';

export const CertificatesSection: React.FC = () => {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // Close modal on Escape key press
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
      id="certificates"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Verified Credentials"
          title="Official Certifications"
          subtitle="Accredited certifications validating frontend architecture, Bootstrap layout design, and Python programming fundamentals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert) => (
            <TiltCard
              key={cert.id}
              maxTilt={5}
              className="p-6 sm:p-7 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-violet-500/50 transition-all backdrop-blur-xl shadow-2xl flex flex-col justify-between cursor-pointer group hover:bg-slate-900/90"
              onClick={() => setSelectedCert(cert)}
            >
              <div>
                {/* Header: Issuer Logo & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 group-hover:scale-110 transition-transform shadow-md">
                      <Award size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider text-slate-200 block">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 size={11} /> Verified Credential
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 font-medium">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2.5 group-hover:text-violet-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-3">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Click Action Prompt */}
                <div className="flex items-center justify-between text-xs font-mono text-violet-400 pt-1">
                  <span className="flex items-center gap-1.5 group-hover:text-cyan-400 transition-colors">
                    <Eye size={14} /> Click to view certificate
                  </span>
                  <span className="text-slate-500 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* Certificate Lightbox / Modal */}
      {/* ----------------------------------------------------------- */}
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
            {/* Modal Header */}
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

            {/* Certificate Image Preview */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center group">
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[58vh] object-contain rounded-xl"
              />
            </div>

            {/* Modal Footer Actions */}
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
