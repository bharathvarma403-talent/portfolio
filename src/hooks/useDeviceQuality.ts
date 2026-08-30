import { useState, useEffect } from 'react';

export interface DeviceQuality {
  isMobile: boolean;
  isTablet: boolean;
  isTouch: boolean;
  particleCount: number;
  dpr: [number, number];
  hasWebGL: boolean;
}

export function useDeviceQuality(): DeviceQuality {
  const [quality, setQuality] = useState<DeviceQuality>({
    isMobile: false,
    isTablet: false,
    isTouch: false,
    particleCount: 1400,
    dpr: [1, 2],
    hasWebGL: true,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkQuality = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      // Check WebGL support
      let hasWebGL = true;
      try {
        const canvas = document.createElement('canvas');
        hasWebGL = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        hasWebGL = false;
      }

      setQuality({
        isMobile,
        isTablet,
        isTouch,
        particleCount: isMobile ? 350 : isTablet ? 700 : 1400,
        dpr: isMobile ? [1, 1.5] : [1, 2],
        hasWebGL,
      });
    };

    checkQuality();
    window.addEventListener('resize', checkQuality);
    return () => window.removeEventListener('resize', checkQuality);
  }, []);

  return quality;
}
