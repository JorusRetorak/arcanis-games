import { motion } from 'framer-motion';
import NextGenBackground from '../assets/hero-bg.png';

const icons = {
  controller: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4M8 10v4M15 11h.01M18 13h.01M6 8h9a5 5 0 013.9 8.1c-.6.8-1.7 1-2.5.5l-2-1.3a3 3 0 00-3.3 0l-2 1.3c-.8.5-1.9.3-2.5-.5A5 5 0 016 8z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9 11a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  ),
};

const stats = [
  { icon: 'controller', value: '1', label: 'Title Developing' },
  { icon: 'users', value: '55K+', label: 'Player Visits' },
  { icon: 'calendar', value: '1+', label: 'Years Active' },
];

export default function GamesHero() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-24 pt-10 md:pt-16 pb-14">
      <div className="flex flex-col items-start text-left w-full lg:w-1/2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="text-arcane-400 text-xs tracking-[0.3em] font-mono font-bold uppercase">The Roster</span>
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-fog tracking-tight mt-3">
            OUR GAMES
          </h1>
          <p className="mt-3 text-mist text-lg max-w-lg">
            Every world we've shipped, and the systems built to keep it running.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-5 mt-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 px-6 py-5 border border-line rounded-xl bg-ink-2/60">
              <span className="text-arcane-400">{icons[s.icon]}</span>
              <div>
                <div className="text-fog font-display font-semibold text-2xl leading-none">{s.value}</div>
                <div className="text-xs text-mist-dim font-mono uppercase tracking-wide mt-1.5">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative w-full lg:w-1/2 flex items-center justify-center pointer-events-none min-h-[360px] lg:min-h-0">
        <img 
          src={NextGenBackground} 
          alt="NextGen Tennis" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}