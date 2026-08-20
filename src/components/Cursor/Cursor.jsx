import { useEffect, useRef } from 'react';
import './cursor.css';

const MAX_PARTICLES = 260;
const SPAWN_PER_PX = 1 / 4;

const Cursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    document.body.classList.add('cursor-active');

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let particles = [];
    let last = null;
    let rafId;

    const spawnAt = (x, y, speed) => {
      if (particles.length >= MAX_PARTICLES) return;
      const angle = Math.random() * Math.PI * 2;
      const jitter = Math.min(speed, 6) * (0.2 + Math.random() * 0.3);
      particles.push({
        x: x + (Math.random() - 0.5) * 3,
        y: y + (Math.random() - 0.5) * 3,
        vx: Math.cos(angle) * jitter * 0.15,
        vy: Math.sin(angle) * jitter * 0.15 - 0.08,
        size: 0.6 + Math.random() * 1.6,
        life: 0,
        maxLife: 500 + Math.random() * 450,
        warm: Math.random() < 0.12,
      });
    };

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.floor(dist * SPAWN_PER_PX));
        for (let i = 0; i < steps; i++) {
          const t = i / steps;
          spawnAt(last.x + dx * t, last.y + dy * t, dist);
        }
      } else {
        spawnAt(x, y, 0);
      }
      last = { x, y };
    };

    const onLeave = () => {
      last = null;
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);

    let prevTime = performance.now();
    const tick = (now) => {
      const dt = now - prevTime;
      prevTime = now;
      ctx.clearRect(0, 0, width, height);

      particles = particles.filter((p) => p.life < p.maxLife);
      for (const p of particles) {
        p.life += dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy -= 0.0006 * dt;
        const t = p.life / p.maxLife;
        const alpha = 1 - t;
        const size = p.size * (1 - t * 0.4);
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(size, 0.2), 0, Math.PI * 2);
        ctx.fillStyle = p.warm
          ? `rgba(255, 176, 136, ${alpha * 0.9})`
          : `rgba(238, 234, 255, ${alpha * 0.95})`;
        ctx.shadowColor = p.warm ? 'rgba(255,176,136,0.6)' : 'rgba(182,166,255,0.5)';
        ctx.shadowBlur = 3;
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove('cursor-active');
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-canvas" aria-hidden="true" />;
};

export default Cursor;
