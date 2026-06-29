import { motion } from 'framer-motion';

/**
 * Animated button component with smooth hover and tap effects
 */
export default function AnimatedButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  ...props
}) {
  const buttonVariants = {
    whileHover: {
      scale: 1.05,
      boxShadow: '0 8px 16px rgba(255, 0, 79, 0.2)',
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.button
      className={`animated-button ${className}`}
      variants={buttonVariants}
      whileHover="whileHover"
      whileTap="whileTap"
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
