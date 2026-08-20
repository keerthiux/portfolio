import { motion } from 'framer-motion';
import './doodles.css';

const doodleSets = {
  hero: ['✦', '🎨', '💡', '⚡'],
  career: ['🚀', '📈', '🏆', '✨'],
  cta: ['👋', '💬', '⭐'],
};

const FloatingDoodles = ({ variant = 'hero' }) => {
  const items = doodleSets[variant] || doodleSets.hero;

  return (
    <div className={`doodles doodles-${variant}`} aria-hidden="true">
      {items.map((glyph, i) => (
        <motion.span
          key={i}
          className={`doodle doodle-${i}`}
          animate={{
            y: [0, -14, 0],
            rotate: [0, i % 2 === 0 ? 8 : -8, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        >
          {glyph}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingDoodles;
