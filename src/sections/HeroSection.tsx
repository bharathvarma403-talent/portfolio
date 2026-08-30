import React from 'react';
import { ArrowDown, Download, Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { portfolioData } from '@/data/portfolioData';
import { MagneticButton } from '@/components/MagneticButton';
import { TiltCard } from '@/components/TiltCard';

export const HeroSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Hero Story */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-violet-500/30 backdrop-blur-md shadow-lg shadow-violet-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-slate-300">
              {personal.status}
            </span>
          </div>

          {/* Intro & Name */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-mono text-cyan-400 tracking-wider">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-heading">
              <span className="text-gradient-purple block">Pavan Bharath</span>
              <span className="text-gradient-cyan block">Varma Datla</span>
            </h1>
          </div>

          {/* Subtitle / Role */}
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200">
              {personal.title}
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-xl">
            {personal.tagline}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <MagneticButton
              as="a"
              href="#projects"
              variant="primary"
              size="lg"
              icon={<Sparkles size={18} />}
            >
              Explore My Work
            </MagneticButton>

            <MagneticButton
              as="a"
              href={personal.resumeUrl}
              download="Pavan_Bharath_Varma_CV.pdf"
              target="_blank"
              variant="secondary"
              size="lg"
              icon={<Download size={18} />}
            >
              Download Resume
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              variant="outline"
              size="lg"
              icon={<Mail size={18} />}
            >
              Contact Me
            </MagneticButton>
          </div>

          {/* Social Links */}
          <div className="pt-6 flex flex-wrap items-center gap-4 text-slate-400">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
              <Terminal size={14} className="text-violet-400" />
              Connect:
            </span>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personal.social.email}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Floating 3D Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <TiltCard
            maxTilt={10}
            className="w-full max-w-sm sm:max-w-md p-3 sm:p-4 rounded-3xl bg-slate-950/70 border border-violet-500/30 backdrop-blur-2xl shadow-2xl shadow-violet-950/60"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 group">
              <img
                src={personal.profilePhoto}
                alt="Pavan Bharath Varma Datla"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-white">
                      B.Tech CSE (AI & ML)
                    </span>
                    <span className="block text-[11px] font-mono text-cyan-400">
                      Lovely Professional University
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300">
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors cursor-pointer group"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest">
          Scroll Into Journey
        </span>
        <ArrowDown size={16} className="animate-bounce text-violet-400" />
      </a>
    </section>
  );
};
