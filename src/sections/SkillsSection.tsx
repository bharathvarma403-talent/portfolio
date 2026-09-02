import React from 'react';
import {
  Terminal,
  FileCode,
  Cpu,
  Layers,
  Atom,
  Server,
  Globe,
  Palette,
  LayoutGrid,
  Wind,
  Database,
  Leaf,
  HardDrive,
  GitBranch,
  PenTool,
  Code,
  Lightbulb,
  Users,
  Clock,
  Compass,
  Zap,
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { portfolioData, SkillItem } from '@/data/portfolioData';

interface SkillsSectionProps {
  onSkillSelect?: (skill: SkillItem) => void;
  selectedSkill?: SkillItem | null;
}

const SkillIcon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 16,
  className = '',
}) => {
  switch (name.toLowerCase()) {
    // 01 — Programming Languages
    case 'python':
      return <Terminal size={size} className={`text-cyan-400 ${className}`} />;
    case 'javascript':
      return <FileCode size={size} className={`text-amber-400 ${className}`} />;
    case 'c':
      return <Cpu size={size} className={`text-slate-400 ${className}`} />;
    case 'c++':
      return <Layers size={size} className={`text-sky-400 ${className}`} />;

    // 02 — Technologies & Development
    case 'html':
    case 'html5':
      return <Globe size={size} className={`text-orange-400 ${className}`} />;
    case 'css':
    case 'css3':
      return <Palette size={size} className={`text-blue-400 ${className}`} />;
    case 'bootstrap':
      return <LayoutGrid size={size} className={`text-purple-400 ${className}`} />;
    case 'react':
    case 'react.js':
      return <Atom size={size} className={`text-cyan-400 ${className}`} />;
    case 'node.js':
      return <Server size={size} className={`text-emerald-400 ${className}`} />;
    case 'tailwind css':
      return <Wind size={size} className={`text-teal-400 ${className}`} />;

    // 03 — Databases & Tools
    case 'mysql':
      return <Database size={size} className={`text-sky-400 ${className}`} />;
    case 'git':
      return <GitBranch size={size} className={`text-rose-400 ${className}`} />;
    case 'github':
      return <GithubIcon size={size} className={`text-slate-300 ${className}`} />;
    case 'mongodb':
      return <Leaf size={size} className={`text-emerald-400 ${className}`} />;
    case 'postgresql':
      return <HardDrive size={size} className={`text-indigo-400 ${className}`} />;
    case 'figma':
      return <PenTool size={size} className={`text-pink-400 ${className}`} />;
    case 'vs code':
      return <Code size={size} className={`text-blue-400 ${className}`} />;

    // 04 — Soft Skills & Strengths
    case 'problem solving':
      return <Lightbulb size={size} className={`text-violet-400 ${className}`} />;
    case 'team collaboration':
      return <Users size={size} className={`text-cyan-400 ${className}`} />;
    case 'time management':
      return <Clock size={size} className={`text-amber-400 ${className}`} />;
    case 'adaptability':
      return <Compass size={size} className={`text-emerald-400 ${className}`} />;
    case 'quick learner':
      return <Zap size={size} className={`text-pink-400 ${className}`} />;

    default:
      return <Code size={size} className={`text-violet-400 ${className}`} />;
  }
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSkillSelect, selectedSkill }) => {
  const { skills } = portfolioData;

  const techItems = (skills as any).technologies || (skills as any).development || [];
  const softItems = (skills as any).soft || (skills as any).strengths || [];

  const categories: {
    number: string;
    id: string;
    title: string;
    description: string;
    badgeStyle: string;
    items: SkillItem[];
  }[] = [
    {
      number: '01',
      id: 'languages',
      title: 'PROGRAMMING LANGUAGES',
      description: 'Core languages for software and AI development.',
      badgeStyle: 'text-violet-300 bg-violet-950/40 border-violet-500/20',
      items: skills.languages || [],
    },
    {
      number: '02',
      id: 'technologies',
      title: 'TECHNOLOGIES & FRAMEWORKS',
      description: 'Responsive frontend markup, modern styles, and layout frameworks.',
      badgeStyle: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/20',
      items: techItems,
    },
    {
      number: '03',
      id: 'tools',
      title: 'DATABASES & TOOLS',
      description: 'Data persistence, developer tooling, and workflow environments.',
      badgeStyle: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/20',
      items: skills.tools || [],
    },
    {
      number: '04',
      id: 'soft',
      title: 'SOFT SKILLS & STRENGTHS',
      description: 'Professional execution, critical thinking, and collaborative teamwork.',
      badgeStyle: 'text-pink-300 bg-pink-950/40 border-pink-500/20',
      items: softItems,
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Intro */}
        <div className="text-center mx-auto max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/30 backdrop-blur-md mb-4 shadow-sm shadow-violet-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-widest text-violet-300 uppercase">
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 font-heading">
            Technical Toolkit
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Verified technologies, tools, and competencies from official curriculum.
          </p>
        </div>

        {/* 4 Categorized Skill Groups */}
        <div className="space-y-12 sm:space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              {/* Category Header Hierarchy */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-md border ${category.badgeStyle}`}
                  >
                    {category.number}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase font-mono">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs font-mono text-slate-400">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {category.items.map((skill: SkillItem) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onClick={() => onSkillSelect && onSkillSelect(skill)}
                      className={`group relative flex items-center justify-between p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer select-none backdrop-blur-md ${
                        isSelected
                          ? 'bg-slate-900/90 border-violet-400 shadow-md shadow-violet-950/40 ring-1 ring-violet-500/50'
                          : 'bg-slate-950/60 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700 hover:-translate-y-0.5 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Compact Icon Container */}
                        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800/90 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                          <SkillIcon name={skill.name} size={16} />
                        </div>

                        {/* Skill Name & Sub-label */}
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white tracking-tight truncate">
                            {skill.name}
                          </h4>
                          {(skill.subLabel || skill.level) && (
                            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 group-hover:text-slate-300 block truncate">
                              {skill.subLabel || skill.level}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Soft Status Accent Dot */}
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors ml-1.5 flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
