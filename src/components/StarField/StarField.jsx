import { useEffect, useRef } from 'react';
import './starfield.css';

// Lightweight canvas starfield with subtle parallax + twinkle.
const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let stars = [];
    let mouseX = 0;
    let mouseY = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const buildStars = () => {
      const count = Math.min(160, Math.floor((width * height) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.25,
        baseAlpha: Math.random() * 0.6 + 0.25,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
        depth: Math.random() * 0.6 + 0.2,
      }));
    };

    const resize = () => {
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      buildStars();
    };

    const handleMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 1;
      stars.forEach((s) => {
        const twinkle = prefersReducedMotion
          ? s.baseAlpha
          : s.baseAlpha +
            Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.25;
        const px = s.x + mouseX * 12 * s.depth * dpr;
        const py = s.y + mouseY * 12 * s.depth * dpr;
        ctx.beginPath();
        ctx.arc(px, py, s.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(238, 236, 255, ${Math.max(0, Math.min(1, twinkle))})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div className="starfield-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="starfield-canvas" />
      <div className="starfield-glow glow-a" />
      <div className="starfield-glow glow-b" />
      <div className="starfield-grid" />
    </div>
  );
};

export default StarField;
