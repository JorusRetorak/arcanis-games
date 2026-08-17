import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Spotlight from '../components/Spotlight';
import StatsBar from '../components/StatsBar';
import StudioStatusBadge from '../components/StudioStatusBadge';
import PillarsGrid from '../components/PillarsGrid';
import GameGallery from '../components/GameGallery';
import Eyebrow from '../components/Eyebrow';
import Sigil from '../components/Sigil';
import NextGenBackground from '../assets/hero-bg.png';

import nextgenVid1 from '../assets/nextgenvideo1.mp4';
import nextgenVid2 from '../assets/nextgenvideo2.mp4';
import nextgenVid3 from '../assets/nextgenvideo3.mp4';
import tennisui1 from '../assets/tennisui1.png';

export default function Home() {
  const nextGenMedia = useMemo(() => [
    { type: 'video', src: nextgenVid1 },
    { type: 'video', src: nextgenVid2 },
    { type: 'video', src: nextgenVid3, note: 'Only did UI Programming' },
    { type: 'image', src: tennisui1 },
  ], []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      {/* ---------------- HERO ---------------- */}
      <Spotlight className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-24 py-10 md:py-16">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          <StudioStatusBadge />
          <span className="mt-6 text-arcane-400 text-xs tracking-[0.3em] font-mono font-bold uppercase">Roblox Game Studio</span>
          <h1 className="text-4xl md:text-6xl font-display font-semibold mt-4 mb-6 text-fog leading-tight">
            GAMES WORTH <br />
            <span className="text-gradient-arcane">GETTING LOST IN.</span>
          </h1>
          <p className="text-base md:text-lg text-mist max-w-lg">
            Arcanis Games builds highly complex games, with meaningful mechanics and gameplay.
            We are currently working on Nextgen Tennis, set to release 9/18/2026.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#gallery" className="px-6 py-3 text-ink font-bold rounded-lg transition-transform hover:scale-105"
              style={{ background: 'linear-gradient(120deg, var(--color-arcane-400), var(--color-mystic-400))' }}>
              Play Our Games →
            </a>
            <a href="https://discord.gg/FyZcsytktN" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-line hover:border-arcane-400 hover:text-arcane-400 text-fog font-bold rounded-lg transition-colors">
              Join the Community →
            </a>
          </div>

          <StatsBar />
        </div>

        <div className="relative w-full lg:w-1/2 flex items-center justify-center pointer-events-none min-h-[400px] lg:min-h-0">
          <NextGenBackground />
        </div>
      </Spotlight>

      {/* ---------------- NEXTGEN TENNIS GALLERY ---------------- */}
      <section id="gallery" className="px-6 md:px-24 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <Eyebrow>Now Playing</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-fog -mt-4">NextGen Tennis</h2>
            <p className="text-mist mt-2 max-w-xl">
              Our main project right now — singles, doubles, full match logic, and projectile-based physics.
            </p>
          </div>
          <a
            href="https://www.roblox.com/games/86250988287261/NextGen-Tennis"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 text-ink font-bold rounded-lg transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(120deg, var(--color-arcane-400), var(--color-mystic-400))' }}
          >
            Play Now →
          </a>
        </div>
      </section>

      <GameGallery items={nextGenMedia} showHeader={false} />

      {/* ---------------- PILLARS ---------------- */}
      <PillarsGrid />

      {/* ---------------- CTA ---------------- */}
      <div className="relative w-full py-24 md:py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none select-none">
          <Sigil size={640} spin={true} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
          className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 py-10 max-w-3xl pointer-events-none bg-ink/70 backdrop-blur-md rounded-3xl border border-line mx-6"
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-fog mb-6">
            Ready to get lost?
          </h2>
          <p className="text-lg md:text-xl text-mist mb-10 leading-relaxed">
            Drop into NextGen Tennis, and follow along for what we're building next.
          </p>
          <a
            href="/games"
            className="px-8 py-4 text-ink font-bold rounded-full hover:scale-105 transition-all duration-300 pointer-events-auto shadow-[0_0_30px_rgba(232,91,206,0.35)]"
            style={{ background: 'linear-gradient(120deg, var(--color-arcane-400), var(--color-mystic-400))' }}
          >
            Explore Our Games
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}