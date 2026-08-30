import React from 'react';
import { ArrowUp, Heart, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/95 py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Rights */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-base text-white">
              Pavan Bharath Varma Datla
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-violet-950/60 border border-violet-500/30 text-violet-300">
              PBV CORE
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            © 2026 Pavan Bharath Varma Datla. All verified rights reserved.
          </p>
        </div>

        {/* Tech Stack Attribution */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 text-center">
          <Sparkles size={14} className="text-cyan-400" />
          <span>Engineered with React • Three.js • R3F • GSAP • Tailwind CSS</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-violet-500/50 transition-all cursor-pointer"
          aria-label="Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} className="text-violet-400" />
        </button>
      </div>
    </footer>
  );
};
