import { motion } from 'framer-motion';
import Slideshow from './Slideshow';

const icons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={20} height={20} className="w-5 h-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={20} height={20} className="w-5 h-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={20} height={20} className="w-5 h-5 shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={20} height={20} className="w-5 h-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function FeaturedGame({ game }) {
  return (
    <section className="px-6 md:px-24 py-10 md:py-14">
      <div className="flex items-center gap-4 mb-8">
        <svg viewBox="0 0 20 20" width="12" height="12" className="shrink-0">
          <path d="M10 1 L16 10 L10 19 L4 10 Z" fill="none" stroke="var(--color-arcane-400)" strokeWidth="1.4" />
        </svg>
        <h2 className="text-sm tracking-[0.28em] font-mono text-arcane-400 font-bold uppercase">Now Featuring</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
        <div className="w-full lg:w-1/2 flex justify-center border border-line rounded-2xl overflow-hidden">
          <Slideshow media={game.media} />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-mono font-bold text-mist-dim border border-line rounded-md px-2 py-1">
              {game.status}
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-fog mt-4">{game.title}</h3>
            <p className="text-arcane-400 font-semibold text-sm uppercase tracking-wide mt-1 font-mono">{game.genre}</p>

            <p className="text-mist mt-4">{game.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {game.tags.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-md border border-line text-mist font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {game.link && (
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-ink font-bold rounded-lg transition-transform hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(120deg, var(--color-arcane-400), var(--color-mystic-400))' }}
                >
                  Play Now →
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6"
          >
            {game.stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <div className="flex items-center gap-2 text-mist-dim">
                  {icons[s.icon]}
                  <span className="text-[10px] uppercase tracking-wide leading-tight truncate font-mono">{s.label}</span>
                </div>
                <div className="text-fog font-display font-semibold text-lg mt-1">{s.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
