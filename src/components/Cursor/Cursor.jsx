import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './cursor.css';

const HOVER_SELECTOR = 'a, button, .button, input, textarea, [role="button"], [data-cursor-hover]';

const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 28, stiffness: 320, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 320, mass: 0.5 });
  const visibleRef = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add('cursor-active');

    const move = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        document.body.classList.add('cursor-visible');
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
      <motion.div
        className="cursor-dot"
        style={{ left: dotX, top: dotY }}
        animate={{ scale: pressed ? 0.6 : hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={`cursor-ring ${hovering ? 'is-hovering' : ''}`}
        style={{ left: ringX, top: ringY }}
        animate={{ scale: pressed ? 0.85 : hovering ? 1.7 : 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
    </>
  );
};

export default Cursor;
