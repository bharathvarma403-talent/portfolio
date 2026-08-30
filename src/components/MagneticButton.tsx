import React, { useRef, useState } from 'react';
import { cn } from '@/utils/cn';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  download?: boolean | string;
  className?: string;
  icon?: React.ReactNode;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  download,
  className,
  icon,
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setOffset({
      x: distanceX * 0.22,
      y: distanceY * 0.22,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const baseStyles = 'group relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 select-none overflow-hidden cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base font-semibold tracking-wide',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:brightness-110 active:scale-95 border border-white/20',
    secondary:
      'bg-slate-900/80 text-white border border-slate-700/60 backdrop-blur-md hover:bg-slate-800 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-950/40 active:scale-95',
    outline:
      'bg-transparent text-slate-200 border border-violet-500/40 hover:border-cyan-400 hover:text-white hover:bg-violet-600/10 active:scale-95',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 active:scale-95',
  };

  const combinedClass = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
        {children}
      </span>
      {/* Gloss Shimmer Effect */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
    </>
  );

  const style = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: offset.x === 0 && offset.y === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
  };

  if (as === 'a') {
    return (
      <a
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        download={download}
        className={combinedClass}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick as any}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      className={combinedClass}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {innerContent}
    </button>
  );
};
