import React, { useState } from 'react';
import { Layers, ArrowDown, Database, Server, Cpu, Globe, CheckCircle2 } from 'lucide-react';

const architectureLayers = [
  {
    id: 'frontend',
    title: 'Presentation Layer',
    tech: 'React.js + Tailwind CSS',
    icon: Globe,
    color: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/40',
    glowColor: 'shadow-cyan-500/20',
    description: 'Component-driven client interface with responsive product catalogs, reservation modal forms, real-time UI state management, and Tailwind design tokens.',
  },
  {
    id: 'api',
    title: 'API & Gateway Layer',
    tech: 'RESTful API Endpoints',
    icon: Layers,
    color: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-500/40',
    glowColor: 'shadow-violet-500/20',
    description: 'Stateless JSON endpoints for client requests, material booking submissions, user credentials validation, and administrative queries.',
  },
  {
    id: 'backend',
    title: 'Application Server',
    tech: 'Node.js & Express.js',
    icon: Server,
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/40',
    glowColor: 'shadow-emerald-500/20',
    description: 'Central business logic orchestration, order state transitions, user session management, error handling pipelines, and request routing.',
  },
  {
    id: 'orm',
    title: 'Data Modeling & ORM',
    tech: 'Prisma ORM',
    icon: Cpu,
    color: 'from-indigo-500 to-violet-500',
    borderColor: 'border-indigo-500/40',
    glowColor: 'shadow-indigo-500/20',
    description: 'Declarative schema modeling, type-safe database queries, automated SQL migrations, and optimized relational data mapping.',
  },
  {
    id: 'database',
    title: 'Database & Cloud Storage',
    tech: 'Supabase (PostgreSQL)',
    icon: Database,
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/40',
    glowColor: 'shadow-pink-500/20',
    description: 'ACID-compliant relational database, Row Level Security (RLS), persistent product records, customer reservations, and order history.',
  },
];

export const ArchitectureDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('frontend');

  const selectedData = architectureLayers.find((l) => l.id === activeLayer) || architectureLayers[0];

  return (
    <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 md:p-8 backdrop-blur-xl">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Visual Architecture Flow Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-2">
          {architectureLayers.map((layer, index) => {
            const Icon = layer.icon;
            const isSelected = activeLayer === layer.id;

            return (
              <React.Fragment key={layer.id}>
                <button
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full max-w-md p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between text-left cursor-pointer group ${
                    isSelected
                      ? `bg-slate-900 ${layer.borderColor} shadow-lg ${layer.glowColor} scale-102`
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${layer.color} text-white shadow-md`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        {layer.title}
                      </span>
                      <span className="block text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {layer.tech}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                    </span>
                  )}
                </button>

                {/* Animated Arrow Connector */}
                {index < architectureLayers.length - 1 && (
                  <div className="flex flex-col items-center my-0.5 text-slate-600">
                    <div className="w-0.5 h-3 bg-gradient-to-b from-violet-500/50 to-cyan-500/50" />
                    <ArrowDown size={14} className="text-cyan-400 animate-bounce -mt-0.5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Layer Deep Dive Details */}
        <div className="w-full lg:w-1/2 rounded-xl bg-slate-900/70 border border-violet-500/30 p-6 md:p-8 flex flex-col justify-between min-h-[340px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300">
                Layer Specification
              </span>
              <span className="text-xs text-slate-400 font-mono">Vasavi Traders</span>
            </div>

            <h4 className="text-2xl font-bold text-white mb-2">{selectedData.tech}</h4>
            <p className="text-sm font-mono text-cyan-400 mb-4">{selectedData.title}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedData.description}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>Integrated with full-stack CI/CD and production deployment</span>
          </div>
        </div>
      </div>
    </div>
  );
};
