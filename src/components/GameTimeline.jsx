import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import LazyVideo from './LazyVideo';

export default function GameTimeline({ items = [], activeIndex, onSelect }) {
  return (
    <section className="px-6 md:px-24 py-10 md:py-14">
      <div className="flex items-center gap-4 mb-8">
        <svg viewBox="0 0 20 20" width="12" height="12" className="shrink-0">
          <path d="M10 1 L16 10 L10 19 L4 10 Z" fill="none" stroke="var(--color-arcane-400)" strokeWidth="1.4" />
        </svg>
        <h2 className="text-sm tracking-[0.28em] font-mono text-arcane-400 font-bold uppercase">Pick a Title</h2>
      </div>

      <div className="flex items-center gap-0 overflow-x-auto pb-2 -mx-2 px-2">
        {items.map((item, i) => (
          <div key={item.title} className="flex items-center shrink-0">
            <motion.button
              onClick={() => onSelect?.(i)}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`w-40 text-left rounded-xl border overflow-hidden bg-ink-2/60 transition-colors ${
                i === activeIndex ? 'border-arcane-400' : 'border-line hover:border-line'
              }`}
            >
              <div className="px-3 pt-3 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-mist-dim">{item.status}</span>
                {i === activeIndex && <span className="w-1.5 h-1.5 rounded-full bg-arcane-400" />}
              </div>
              <div className="px-3 mt-1">
                <div className="text-sm font-bold text-fog truncate">{item.title}</div>
                <div className="text-[10px] text-mist-dim mt-0.5 font-mono">{item.year}</div>
              </div>
              <div className="mt-3 aspect-video bg-ink-3">
                {item.cover.type === 'video' ? (
                  <LazyVideo src={item.cover.src} className="w-full h-full object-cover" />
                ) : (
                  <LazyImage src={item.cover.src} alt={item.title} className="w-full h-full object-cover" />
                )}
              </div>
            </motion.button>

            {i < items.length - 1 && (
              <div className="flex items-center shrink-0 w-8">
                <span className="w-full h-px bg-line" />
                <span className="w-1.5 h-1.5 rounded-full bg-line shrink-0" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
