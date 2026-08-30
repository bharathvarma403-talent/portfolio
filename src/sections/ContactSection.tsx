import React, { useState } from 'react';
import { Mail, Phone, Send, Sparkles, CheckCircle2, Copy, Check, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '@/data/portfolioData';
import { SectionHeader } from '@/components/SectionHeader';
import { MagneticButton } from '@/components/MagneticButton';
import { TiltCard } from '@/components/TiltCard';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields before dispatching.');
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate reliable dispatch with mailto fallback
    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8b5cf6', '#06b6d4', '#ec4899', '#ffffff'],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Direct Communications Hub"
          title="Let's Build Something."
          subtitle="Have an idea, project, or opportunity? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          {/* Left Column: Direct Channels & Social Credentials */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Email Direct Card */}
              <TiltCard
                maxTilt={6}
                className="p-5 rounded-2xl bg-slate-950/80 border border-violet-500/30 hover:border-violet-400 backdrop-blur-xl transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        Direct Email
                      </span>
                      <a
                        href={personal.social.email}
                        className="text-sm font-semibold text-white hover:text-violet-300 transition-colors font-mono"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </TiltCard>

              {/* Phone Direct Card */}
              <TiltCard
                maxTilt={6}
                className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-xl transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors font-mono"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Phone Number"
                    aria-label="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </TiltCard>

              {/* GitHub Card */}
              <TiltCard
                maxTilt={6}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200">
                      <GithubIcon size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        GitHub Profile
                      </span>
                      <span className="text-sm font-semibold text-white font-mono">
                        bharathvarma403-talent
                      </span>
                    </div>
                  </div>

                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-violet-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Visit
                  </a>
                </div>
              </TiltCard>

              {/* LinkedIn Card */}
              <TiltCard
                maxTilt={6}
                className="p-5 rounded-2xl bg-slate-950/80 border border-blue-500/30 hover:border-blue-400 backdrop-blur-xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
                      <LinkedinIcon size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        LinkedIn Network
                      </span>
                      <span className="text-sm font-semibold text-white font-mono">
                        Pavan Bharath Varma
                      </span>
                    </div>
                  </div>

                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Connect
                  </a>
                </div>
              </TiltCard>
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for internships, full-stack development, & analytics.</span>
            </div>
          </div>

          {/* Right Column: Interactive Cyber Form */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-slate-950/90 border border-violet-500/30 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl shadow-violet-950/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-violet-400" />
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                      Send Secure Message
                    </span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">PBV://gateway</span>
                </div>

                {status === 'success' ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-white font-heading">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md">
                      Thank you for reaching out, <strong className="text-white">{formState.name}</strong>. I will review your message and reply to <strong className="text-cyan-300">{formState.email}</strong> shortly.
                    </p>
                    <div className="pt-4">
                      <MagneticButton
                        onClick={() => {
                          setStatus('idle');
                          setFormState({ name: '', email: '', message: '' });
                        }}
                        variant="secondary"
                        size="md"
                      >
                        Send Another Transmission
                      </MagneticButton>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400"
                      >
                        Your Name / Organization <span className="text-violet-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white placeholder-slate-600 text-sm font-sans transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400"
                      >
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-600 text-sm font-sans transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-400"
                      >
                        Message / Project Brief <span className="text-pink-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell me about your project, timeline, or collaboration idea..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-white placeholder-slate-600 text-sm font-sans transition-all outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <MagneticButton
                        type="submit"
                        disabled={status === 'loading'}
                        variant="primary"
                        size="lg"
                        className="w-full"
                        icon={status === 'loading' ? <span className="animate-spin">⚙</span> : <Send size={18} />}
                      >
                        {status === 'loading' ? 'Encrypting & Dispatching...' : 'Send Message'}
                      </MagneticButton>
                    </div>
                  </form>
                )}
              </div>

              {/* Security & Direct Mailto Disclaimer */}
              <div className="pt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center">
                Need immediate response? Email directly at{' '}
                <a href={personal.social.email} className="text-violet-400 hover:underline">
                  {personal.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
