import { motion } from 'framer-motion';
import tennisShowcase from '../assets/nextGenThumb2.png';

export default function NextGenBackground({ className = '', imgClassName = '', align = 'center' }) {
  const isTop = align === 'top';

  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'top-0' : 'top-1/2 -translate-y-1/2'} w-[150vw] lg:w-[85vw] h-[80vh] lg:h-[90vh] scale-90 flex items-center justify-center -z-10 ${className}`}
      style={{
        WebkitMaskImage: isTop
          ? 'radial-gradient(ellipse 70% 65% at 50% 10%, black 45%, transparent 95%)'
          : 'radial-gradient(ellipse closest-side, black 30%, transparent 90%)',
        maskImage: isTop
          ? 'radial-gradient(ellipse 70% 65% at 50% 10%, black 45%, transparent 95%)'
          : 'radial-gradient(ellipse closest-side, black 30%, transparent 90%)'
      }}
    >
      <div className="absolute w-[60%] h-[60%] rounded-full bg-arcane-500/10 blur-[150px]" />
      <div className="absolute w-[20rem] h-[20rem] md:w-[45rem] md:h-[45rem] rounded-full border-[2px] border-arcane-400/20 blur-[2px]" />
      <div className="absolute w-[20rem] h-[20rem] md:w-[45rem] md:h-[45rem] rounded-full border border-mystic-400/10" />
      <img
        src={tennisShowcase}
        alt="NextGen Tennis Showcase"
        className={`relative z-10 w-full h-full object-cover object-[50%_center] opacity-85 ${imgClassName}`}
      />
    </motion.div>
  );
}