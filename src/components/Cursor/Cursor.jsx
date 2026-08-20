import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import './cursor.css';

const HOVER_SELECTOR = 'a, button, .button, input, textarea, [role="button"], [data-cursor-hover]';
const COLORS = ['#fff', '#b6a6ff', '#ffb088', '#cfc7ff'];
const MIN_DIST = 26;
const MAX_PARTICLES = 16;
const LIFETIME = 700;

let seq = 0;

const Star = ({ size = 10 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"
      fill="currentColor"
    />
  </svg>
);

const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [particles, setParticles] = useState([]);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const visibleRef = useRef(false);
  const lastRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add('cursor-active');

    const spawn = (x, y) => {
      const id = seq++;
      const color = COLORS[id % COLORS.length];
      const size = 8 + Math.random() * 8;
      const drift = (Math.random() - 0.5) * 30;
      setParticles((prev) => {
        const next = [...prev, { id, x, y, color, size, drift }];
        return next.length > MAX_PARTICLES ? next.slice(next.length - MAX_PARTICLES) : next;
      });
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, LIFETIME);
    };

    const move = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        document.body.classList.add('cursor-visible');
      }
      const dx = e.clientX - lastRef.current.x;
      const dy = e.clientY - lastRef.current.y;
      if (Math.hypot(dx, dy) > MIN_DIST) {
        lastRef.current = { x: e.clientX, y: e.clientY };
        spawn(e.clientX, e.clientY);
      }
    };
    const over = (e) => {
      if (e.target.closest && e.target.closest(HOVER_SELECTOR)) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest && e.target.closest(HOVER_SELECTOR)) setHovering(false);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => {
      visibleRef.current = false;
      document.body.classList.remove('cursor-visible');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.documentElement.addEventListener('mouseleave', leave);

    return () => {
      document.body.classList.remove('cursor-active', 'cursor-visible');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <>
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="cursor-star"
            style={{ left: p.x, top: p.y, color: p.color }}
            initial={{ opacity: 1, scale: 0.2, rotate: 0, x: -p.size / 2, y: -p.size / 2 }}
            animate={{
              opacity: 0,
              scale: 1.15,
              rotate: 90,
              x: -p.size / 2 + p.drift,
              y: -p.size / 2 - 24,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: LIFETIME / 1000, ease: [0.16, 1, 0.3, 1] }}
          >
            <Star size={p.size} />
          </motion.span>
        ))}
      </AnimatePresence>

      <motion.div
        className={`cursor-dot ${hovering ? 'is-hovering' : ''}`}
        style={{ left: dotX, top: dotY }}
        animate={{ scale: pressed ? 0.6 : hovering ? 1.8 : 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 320 }}
      />
    </>
  );
};

export default Cursor;
