import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, var(--color-arcane-400), var(--color-mystic-400))',
      }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
    />
  );
}
