import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoMark from '../assets/LogoNoBG.png';

const MotionLink = motion(Link);

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/games', label: 'Games' },
  { to: '/contact', label: 'Contact' },
];

const social = [
  { href: 'https://discord.com/users/344941451689328640', label: 'Discord' },
  { href: 'https://devforum.roblox.com/u/jorusretorak/summary', label: 'Devforum' },
  { href: 'https://x.com/JorusDev', label: 'X' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink/80 backdrop-blur-md">
      <div className="px-6 md:px-24 py-10 flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
        <div className="max-w-xs">
          <motion.img
            whileHover={{ opacity: 0.85, rotate: 3, scale: 1.06 }}
            src={logoMark}
            alt="Arcanis Games"
            className="h-10 w-auto object-contain"
          />
          <p className="text-sm text-mist mt-3 leading-relaxed">
            A Roblox studio building systems-driven worlds, from voxel mines to competitive courts.
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.2em] text-arcane-400 font-mono font-bold uppercase mb-3">
            Studio
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <MotionLink whileHover={{ x: 3 }} to={link.to} className="text-sm text-mist hover:text-fog transition-colors inline-block">
                  {link.label}
                </MotionLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:ml-auto">
          <h3 className="text-xs tracking-[0.2em] text-arcane-400 font-mono font-bold uppercase mb-3">
            Elsewhere
          </h3>
          <ul className="flex flex-col gap-2 md:items-end">
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-mist hover:text-fog transition-colors inline-block">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-24 py-4 border-t border-line-soft text-xs text-mist-dim font-mono">
        © {new Date().getFullYear()} Arcanis Games. All rights reserved.
      </div>
    </footer>
  );
}
