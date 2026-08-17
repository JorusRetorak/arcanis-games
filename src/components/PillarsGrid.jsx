import { motion } from 'framer-motion';
import Eyebrow from './Eyebrow';

const icons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M3 9h18" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
    </svg>
  ),
  gauge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 12l4-4M12 7v1" />
    </svg>
  ),
  signal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M10 20V4M16 20v-7M22 20v-3" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 22h4M12 2a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.3v.2h6v-.2c0-.9.4-1.7 1-2.3A6 6 0 0012 2z" />
    </svg>
  ),
};

const pillars = [
  { icon: 'cube', title: 'Game Systems', subtitle: 'Core loops & mechanics' },
  { icon: 'layout', title: 'UI/UX Design', subtitle: 'Interfaces players trust' },
  { icon: 'code', title: 'Procedural Tech', subtitle: 'Worlds that generate' },
  { icon: 'signal', title: 'Live Operations', subtitle: 'Events & economies' },
  { icon: 'gauge', title: 'Optimization', subtitle: 'Built to hold scale' },
  { icon: 'bulb', title: 'Playtesting', subtitle: 'Tuned by real players' },
];

export default function PillarsGrid() {
  return (
    <section className="px-6 md:px-24 py-16 md:py-20">
      <Eyebrow>What We Build</Eyebrow>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {pillars.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center text-center gap-3 p-6 border border-line rounded-2xl bg-ink-2/60 hover:border-arcane-500/50 transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-line text-arcane-400 group-hover:border-arcane-400 group-hover:bg-arcane-500/10 transition-colors">
              {icons[s.icon]}
            </div>
            <div>
              <div className="text-fog font-bold text-sm">{s.title}</div>
              <div className="text-mist-dim text-xs mt-1">{s.subtitle}</div>
            </div>
            <span className="w-6 h-0.5 rounded-full bg-arcane-500/40 group-hover:w-10 transition-all" style={{ backgroundImage: 'linear-gradient(90deg, var(--color-arcane-400), var(--color-mystic-400))' }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
