import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyVideo from './LazyVideo';
import LazyImage from './LazyImage';

export default function Slideshow({ media = [], className = "" }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!media.length) return;
    const nextIndex = (index + 1) % media.length;
    const prevIndex = (index - 1 + media.length) % media.length;

    [media[nextIndex], media[prevIndex]].forEach(item => {
      if (item.type === 'image') {
        const img = new Image();
        img.src = item.src;
      }
    });
  }, [index, media]);

  if (!media.length) return null;

  const goPrev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setIndex((i) => (i - 1 + media.length) % media.length);
  };
  const goNext = (e) => {
    e.stopPropagation();
    setDirection(1);
    setIndex((i) => (i + 1) % media.length);
  };

  const current = media[index];

  return (
    <div
      className={`relative group inline-block mx-auto md:mx-0 overflow-hidden rounded-xl ${className}`}
      style={{ height: 420 }}
    >
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction * 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -10 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="h-full w-full flex items-center justify-center"
        >
          {current.type === 'image' ? (
            <LazyImage src={current.src} alt="" className="block h-full w-auto object-contain" />
          ) : (
            <LazyVideo src={current.src} poster={current.poster} preload="metadata" className="block h-full w-auto object-contain" />
          )}
        </motion.div>
      </AnimatePresence>

      {current.note && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <p className="text-xs text-fog text-center italic">* {current.note}</p>
        </div>
      )}

      <motion.button
        onClick={goPrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-fog backdrop-blur-sm z-20"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={goNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-fog backdrop-blur-sm z-20"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
}
