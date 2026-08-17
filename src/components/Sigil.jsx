import { motion } from 'framer-motion';

/**
 * The studio's signature mark: a rotating rune-circle built from the same
 * vocabulary as the logo (diamond apex, angular "A/R" glyph, twin crescent
 * arcs). Used large in the hero, small as a section marker, and as a loading
 * glyph. size in px.
 */
export default function Sigil({ size = 520, className = '', spin = true }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* outer tick ring */}
      {spin && (
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0"
          style={{ animation: 'sigil-spin 40s linear infinite' }}
        >
          <circle cx="100" cy="100" r="94" fill="none" stroke="url(#arcaneRing)" strokeWidth="0.6" strokeDasharray="1 7" />
          <defs>
            <linearGradient id="arcaneRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-arcane-400)" />
              <stop offset="100%" stopColor="var(--color-mystic-400)" />
            </linearGradient>
          </defs>
        </motion.svg>
      )}

      {/* mid ring, counter-rotating */}
      {spin && (
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0"
          style={{ animation: 'sigil-spin-reverse 55s linear infinite' }}
        >
          <circle cx="100" cy="100" r="76" fill="none" stroke="var(--color-line)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="76" fill="none" stroke="var(--color-arcane-500)" strokeWidth="1" strokeDasharray="0.5 22" opacity="0.7" />
        </motion.svg>
      )}

      {/* twin crescents (from the logo) */}
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <motion.path
          d="M62 46 A64 64 0 0 0 62 154"
          fill="none"
          stroke="var(--color-arcane-400)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
        <motion.path
          d="M138 46 A64 64 0 0 1 138 154"
          fill="none"
          stroke="var(--color-mystic-400)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.15 }}
        />
      </svg>

      {/* the rune glyph itself - diamond apex + angular R, drawn like ink settling */}
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <defs>
          <linearGradient id="runeStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-arcane-300)" />
            <stop offset="100%" stopColor="var(--color-mystic-400)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M100 34 L112 56 L100 78 L88 56 Z
             M100 78 L128 130 L108 130 L100 116 L92 130 L72 130 Z
             M100 116 L118 150"
          fill="none"
          stroke="url(#runeStroke)"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </svg>

      <div className="absolute inset-0 rounded-full" style={{
        background: 'radial-gradient(circle at 50% 45%, rgba(232,91,206,0.10), transparent 60%)',
        filter: 'blur(20px)',
      }} />
    </div>
  );
}
