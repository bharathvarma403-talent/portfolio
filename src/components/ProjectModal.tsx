import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Layers, Shield, Sparkles, Package, Calendar, Truck, UserCheck, Settings } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ProjectDetail } from '@/data/portfolioData';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { MagneticButton } from './MagneticButton';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Package: <Package className="text-cyan-400" size={20} />,
  CalendarCheck: <Calendar className="text-violet-400" size={20} />,
  ShieldCheck: <Shield className="text-emerald-400" size={20} />,
  Truck: <Truck className="text-amber-400" size={20} />,
  LayoutDashboard: <Settings className="text-pink-400" size={20} />,
  MessageSquare: <UserCheck className="text-blue-400" size={20} />,
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-5xl my-auto rounded-3xl bg-slate-950/95 border border-violet-500/30 shadow-2xl shadow-violet-950/80 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-violet-300 tracking-wider uppercase">
              Case Study / Architecture Blueprint
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10 overflow-y-auto custom-scrollbar">
          {/* Hero Banner Section */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/15 border border-violet-500/30 text-violet-300">
                {project.duration}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                {project.role}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading">
              {project.title}
            </h3>

            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                as="a"
                href={project.githubUrl}
                target="_blank"
                variant="primary"
                size="md"
                icon={<GithubIcon size={18} />}
              >
                View GitHub Code
              </MagneticButton>
            </div>
          </div>

          {/* Technology Matrix Grid */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <Layers size={16} className="text-violet-400" />
              Verified Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-mono text-slate-200 hover:border-violet-500/50 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* System Architecture Diagram */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              Interactive Full-Stack Architecture
            </h4>
            <ArchitectureDiagram />
          </div>

          {/* Detailed Features Breakdown */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6">
              Core Engineered Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-violet-500/40 transition-colors flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 flex-shrink-0">
                    {iconMap[feat.icon] || <Sparkles size={20} className="text-violet-400" />}
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-white mb-1.5">{feat.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Engineering Highlights */}
          <div className="rounded-2xl bg-gradient-to-r from-violet-950/30 via-slate-900/60 to-cyan-950/30 border border-violet-500/20 p-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-violet-300 mb-4">
              Key Engineering Milestones
            </h4>
            <ul className="space-y-3">
              {(project.bullets || (project as any).highlights || []).map((h: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 flex-shrink-0">
                    <Check size={12} />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
