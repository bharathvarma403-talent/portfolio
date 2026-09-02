import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Core Emblem */}
        <a
          href="#home"
          className="flex items-center gap-3 group select-none cursor-pointer focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px] shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
            <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
              <span className="font-heading font-extrabold text-sm text-white group-hover:text-cyan-300 transition-colors">
                PBV
              </span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-sm font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
              Pavan Bharath Varma
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">
              DIGITAL CORE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/8 backdrop-blur-lg shadow-inner shadow-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-violet-600/30 border border-violet-500/40 shadow-sm shadow-violet-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <MagneticButton
            as="a"
            href={portfolioData.personal.resumeUrl}
            download="Pavan_Bharath_Varma_CV.jpg"
            target="_blank"
            variant="outline"
            size="sm"
            icon={<FileText size={14} />}
          >
            Resume
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            variant="primary"
            size="sm"
            icon={<Sparkles size={14} />}
          >
            Let's Talk
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-slate-950/98 border-b border-slate-800 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-violet-600/20 border border-violet-500/40 text-violet-300 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={portfolioData.personal.resumeUrl}
                download="Pavan_Bharath_Varma_CV.jpg"
                target="_blank"
                className="w-full text-center py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-medium text-slate-200"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-sm font-semibold text-white shadow-lg shadow-violet-900/40"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
