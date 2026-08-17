import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import LazyVideo from './LazyVideo';
import Eyebrow from './Eyebrow';

export default function GamesShowcase({ games = [] }) {
  return (
    <section className="px-6 md:px-24 py-16 md:py-20">
      <div className="flex items-center justify-between mb-2">
        <Eyebrow>Our Games</Eyebrow>
        <Link
          to="/games"
          className="hidden md:flex items-center gap-2 text-arcane-400 hover:text-arcane-300 font-semibold text-sm transition-colors mb-8"
        >
          View All Games <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col border border-line rounded-2xl overflow-hidden bg-ink-2/60 hover:border-arcane-500/40 transition-colors"
          >
            <div className="relative aspect-video bg-ink-3 overflow-hidden">
              {p.cover.type === 'image' ? (
                <LazyImage src={p.cover.src} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <LazyVideo src={p.cover.src} className="w-full h-full object-cover" preload="metadata" playOnHover />
              )}
              <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[10px] tracking-widest uppercase text-arcane-300 font-mono font-bold">
                {p.kicker}
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-display font-semibold text-fog">{p.title}</h3>
              <p className="mt-2 text-sm text-mist flex-1">{p.description}</p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-md border border-line text-mist font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg text-ink font-bold group-hover:scale-105 transition-transform"
                    style={{ background: 'linear-gradient(120deg, var(--color-arcane-400), var(--color-mystic-400))' }}
                    aria-label={`Play ${p.title}`}
                  >
                    →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
