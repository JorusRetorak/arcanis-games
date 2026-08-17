import { motion } from 'framer-motion';
import GamesHero from '../components/GamesHero';
import FeaturedGame from '../components/FeaturedGame';

import nextgenVid1 from '../assets/nextgenvideo1.mp4';
import nextgenVid2 from '../assets/nextgenvideo2.mp4';
import nextgenVid3 from '../assets/nextgenvideo3.mp4';

const GAME = {
  status: 'Live',
  title: 'NextGen Tennis',
  year: '2024 — Present',
  genre: 'Competitive Sports Sim',
  description:
    'An extensively featured tennis game using programmed projectile motion — singles, doubles, multiple sets, and varying game formats all coded in.',
  tags: ['LuaU', 'Game Systems', 'UI/UX', 'Projectile Motion', 'Networking'],
  link: 'https://www.roblox.com/games/86250988287261/NextGen-Tennis',
  media: [
    { type: 'video', src: nextgenVid1 },
    { type: 'video', src: nextgenVid2 },
    { type: 'video', src: nextgenVid3 },
  ],
  stats: [
    { icon: 'cube', label: 'Systems', value: '25+' },
    { icon: 'clock', label: 'Dev Time', value: '6+ Months' },
    { icon: 'eye', label: 'Total Visits', value: '55K+' },
  ],
};

export default function Games() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full pb-24"
    >
      <GamesHero />

      <FeaturedGame game={GAME} />

      <div className="px-6 md:px-24 mt-4">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 border border-line rounded-2xl bg-arcane-500/5"
          style={{ borderColor: 'rgba(232,91,206,0.25)' }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-semibold text-fog">Want to see more?</h3>
            <p className="text-mist mt-1">Check out the full gallery on our home page, or come say hi on Discord.</p>
          </div>
          <a
            href="/#gallery"
            className="shrink-0 px-6 py-3 text-ink font-bold rounded-full transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(120deg, var(--color-arcane-400), var(--color-mystic-400))' }}
          >
            See the Gallery →
          </a>
        </div>
      </div>
    </motion.div>
  );
}