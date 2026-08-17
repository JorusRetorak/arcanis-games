import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import fullLogo from '../assets/FullLogoNoBG.png';

const MotionLink = motion(Link);

const links = [
  { to: '/', label: 'Home' },
  { to: '/games', label: 'Games' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-24 text-fog gap-4 w-full transition-all duration-300 relative ${
        scrolled
          ? 'bg-ink/80 backdrop-blur-md border-b border-line shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Link to="/" className="flex items-center">
        <motion.img
          whileHover={{ opacity: 0.85, scale: 1.03 }}
          src={fullLogo}
          alt="Arcanis Games"
          className="h-10 md:h-11 w-auto object-contain"
        />
      </Link>

      <div className="flex gap-2 relative md:absolute md:left-1/2 md:-translate-x-1/2">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <MotionLink
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to={link.to}
              className={`relative px-4 py-2 rounded-b-md transition-colors inline-block text-sm font-semibold uppercase tracking-wide ${
                isActive ? 'text-arcane-300' : 'text-mist hover:text-fog'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border"
                  style={{
                    background: 'linear-gradient(120deg, rgba(232,91,206,0.14), rgba(76,111,239,0.14))',
                    borderColor: 'rgba(232,91,206,0.3)',
                  }}
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </MotionLink>
          );
        })}
      </div>

      <Link
        to="/games"
        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg text-ink font-bold text-sm transition-transform hover:scale-105"
        style={{ background: 'linear-gradient(120deg, var(--color-arcane-400), var(--color-mystic-400))' }}
      >
        View our games →
      </Link>
    </nav>
  );
}
