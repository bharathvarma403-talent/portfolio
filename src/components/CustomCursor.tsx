import React, { useEffect, useState } from 'react';
import { useDeviceQuality } from '@/hooks/useDeviceQuality';

export const CustomCursor: React.FC = () => {
  const { isTouch } = useDeviceQuality();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;
    let animationFrame: number;

    const animate = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [pos, isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Primary Precision Dot */}
      <div
        className="fixed pointer-events-none z-50 w-2.5 h-2.5 rounded-full bg-violet-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-lg shadow-violet-500/80"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
        }}
      />

      {/* Outer Halo Glow */}
      <div
        className={`fixed pointer-events-none z-40 rounded-full border border-violet-400/40 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovering
            ? 'w-12 h-12 bg-violet-500/15 border-cyan-400/80 scale-125'
            : 'w-8 h-8 bg-violet-600/5'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      />
    </>
  );
};
