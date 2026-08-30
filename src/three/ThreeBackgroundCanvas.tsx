import React, { useEffect, useRef } from 'react';

interface ThreeBackgroundCanvasProps {
  scrollProgress: number;
  activeSectionIndex: number;
}

export const ThreeBackgroundCanvas: React.FC<ThreeBackgroundCanvasProps> = ({
  scrollProgress,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollProgressRef = useRef(scrollProgress);
  scrollProgressRef.current = scrollProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Damped Smooth Mouse Physics
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // 1. Serene Floating 3D Prisms & Glowing Monoliths (Peaceful, Slow, Elegant)
    const monoliths = [
      { x: -320, y: -120, z: -80, size: 45, rotX: 0.2, rotY: 0.3, speed: 0.005, color: '#8b5cf6', type: 'icosa' },
      { x: 380, y: -90, z: -120, size: 55, rotX: -0.3, rotY: 0.1, speed: -0.004, color: '#06b6d4', type: 'octa' },
      { x: -280, y: 220, z: -60, size: 40, rotX: 0.1, rotY: -0.2, speed: 0.006, color: '#ec4899', type: 'tetra' },
      { x: 320, y: 240, z: -100, size: 48, rotX: 0.4, rotY: 0.2, speed: -0.005, color: '#38bdf8', type: 'icosa' },
      { x: 0, y: -260, z: -140, size: 60, rotX: 0.1, rotY: 0.4, speed: 0.003, color: '#a855f7', type: 'octa' },
    ];

    // 2. Gentle Ambient Starfield (Peaceful Stardust)
    const numStars = 140;
    const stars: { x: number; y: number; z: number; size: number; alpha: number; color: string; speed: number }[] = [];
    const starColors = ['#8b5cf6', '#06b6d4', '#ec4899', '#ffffff', '#38bdf8'];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 1800,
        y: (Math.random() - 0.5) * 1200,
        z: Math.random() * 800 + 100,
        size: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.7 + 0.2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        speed: Math.random() * 0.2 + 0.1,
      });
    }

    // 3D Geometric Math helper for icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const icosaVerts = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];
    const icosaEdges = [
      [0,11],[0,5],[0,1],[0,7],[0,10],[1,5],[1,9],[1,8],[1,7],[2,11],
      [2,4],[2,3],[2,6],[2,10],[3,9],[3,4],[3,8],[3,6],[4,11],[4,5],
      [4,9],[5,9],[5,11],[6,10],[6,7],[6,8],[7,8],[7,10],[8,9],[10,11]
    ];

    let t = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      t += 0.008; // Very slow, calm time step

      // Ultra-smooth mouse dampening (no jerkiness)
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + (mouse.x - width / 2) * 0.06;
      const centerY = height / 2 + (mouse.y - height / 2) * 0.06;

      // -------------------------------------------------------------
      // A. Velvety, Deep Ambient Luminous Nebulae (Calm Radial Gradients)
      // -------------------------------------------------------------
      const grad1 = ctx.createRadialGradient(
        centerX - 240, centerY - 140, 20,
        centerX - 240, centerY - 140, 500
      );
      grad1.addColorStop(0, 'rgba(139, 92, 246, 0.16)');
      grad1.addColorStop(0.5, 'rgba(139, 92, 246, 0.04)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        centerX + 280, centerY + 160, 20,
        centerX + 280, centerY + 160, 520
      );
      grad2.addColorStop(0, 'rgba(6, 182, 212, 0.14)');
      grad2.addColorStop(0.5, 'rgba(6, 182, 212, 0.03)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // B. Smooth Wave Mesh Grid (Serene Flowing Water/Cyber Horizon)
      // -------------------------------------------------------------
      ctx.save();
      const waveCols = 32;
      const waveRows = 16;
      const waveSpacingX = width / waveCols;
      const waveBaseY = height * 0.72;

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.12)';

      for (let r = 0; r < waveRows; r++) {
        ctx.beginPath();
        const rowDepth = (r / waveRows);
        const yOffset = Math.pow(rowDepth, 1.8) * (height * 0.35);

        for (let c = 0; c <= waveCols; c++) {
          const x = c * waveSpacingX;
          const waveHeight = Math.sin(c * 0.25 + t * 1.5 + r * 0.4) * 14 * (1 - rowDepth * 0.4);
          const y = waveBaseY + yOffset + waveHeight;

          if (c === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const alpha = Math.max(0.04, 0.2 - rowDepth * 0.14);
        ctx.strokeStyle = r % 2 === 0 ? `rgba(6, 182, 212, ${alpha})` : `rgba(139, 92, 246, ${alpha})`;
        ctx.stroke();
      }
      ctx.restore();

      // -------------------------------------------------------------
      // C. Gentle Deep Stardust (Slow Drift)
      // -------------------------------------------------------------
      stars.forEach((star) => {
        star.z -= star.speed;
        if (star.z <= 50) star.z = 900;

        const k = 450 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath();
          ctx.arc(px, py, star.size * k * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.alpha * (1 - star.z / 900);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1.0;

      // -------------------------------------------------------------
      // D. Serene 3D Floating Wireframe Monoliths (Calm Rotation)
      // -------------------------------------------------------------
      monoliths.forEach((m, idx) => {
        m.rotX += m.speed;
        m.rotY += m.speed * 1.2;

        const floatY = Math.sin(t * 1.2 + idx * 1.5) * 18;
        const px = centerX + m.x;
        const py = centerY + m.y + floatY;

        const cosX = Math.cos(m.rotX), sinX = Math.sin(m.rotX);
        const cosY = Math.cos(m.rotY), sinY = Math.sin(m.rotY);

        // Project Icosahedron
        const proj = icosaVerts.map(([vx, vy, vz]) => {
          const x1 = vx * cosY + vz * sinY;
          const y1 = vy;
          const z1 = -vx * sinY + vz * cosY;

          const x2 = x1;
          const y2 = y1 * cosX - z1 * sinX;
          const z2 = y1 * sinX + z1 * cosX;

          const scale = m.size * 0.65;
          return { x: px + x2 * scale, y: py + y2 * scale };
        });

        // Soft Subtle Glow
        const halo = ctx.createRadialGradient(px, py, 5, px, py, m.size * 1.8);
        halo.addColorStop(0, m.color + '33');
        halo.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, m.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // Draw Clean Wireframe
        ctx.strokeStyle = m.color;
        ctx.lineWidth = 1.2;
        ctx.shadowColor = m.color;
        ctx.shadowBlur = 10;

        icosaEdges.forEach(([i1, i2]) => {
          const p1 = proj[i1];
          const p2 = proj[i2];
          if (p1 && p2) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
        ctx.shadowBlur = 0;
      });

      // -------------------------------------------------------------
      // E. Soft, Subtle Mouse Follower Aura
      // -------------------------------------------------------------
      const mouseAura = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160);
      mouseAura.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
      mouseAura.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
      mouseAura.addColorStop(1, 'transparent');
      ctx.fillStyle = mouseAura;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 160, 0, Math.PI * 2);
      ctx.fill();
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ width: '100vw', height: '100vh' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100vw', height: '100vh', display: 'block' }}
      />
    </div>
  );
};
