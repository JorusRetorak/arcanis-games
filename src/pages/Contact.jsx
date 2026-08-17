import { motion } from 'framer-motion';
import discordLogo from '../assets/discord.png';
import devforumLogo from '../assets/devforum.png';
import xLogo from '../assets/tw.webp';

const icons = {
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  ),
  bug: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V7a3 3 0 016 0v2M6 12h12M7 20l-2-3M17 20l2-3M4 9l3 2M20 9l-3 2M12 9v11" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l5-4 4 3 3-3 5 4M7 15l3 3M14 15l3 3" />
    </svg>
  ),
};

const CONTACT_METHODS = [
  { href: 'https://discord.com/users/344941451689328640', logo: discordLogo, name: 'Discord', handle: '_jorusretorak', badge: 'Preferred' },
  { href: 'https://devforum.roblox.com/u/jorusretorak/summary', logo: devforumLogo, name: 'Roblox Devforum', handle: 'JorusRetorak', badge: 'Active' },
  { href: 'https://x.com/JorusDev', logo: xLogo, name: 'X (for contact only)', handle: '@JorusDev', badge: 'Reply via DM' },
];

const AVAILABILITY = [
  { icon: 'globe', label: 'Status', value: 'Available', note: 'Open to new projects and collaborations.' },
  { icon: 'clock', label: 'Average Response', value: '< 24 hours', note: 'Usually much faster on Discord.' },
  { icon: 'bolt', label: 'Timezone', value: 'CST', note: '(UTC-6)' },
];

const INFO_STRIP = [
  { icon: 'clock', title: 'Response Time', body: 'We usually reply within 24 hours — fastest on Discord.' },
  { icon: 'handshake', title: 'Community', body: 'Join the Discord to chat with the team, share ideas, or get involved.' },
  { icon: 'bug', title: 'Bug Reports', body: 'Found an issue in NextGen Tennis? Drop it in Discord or Devforum.' },
  { icon: 'eye', title: 'Privacy', body: 'Anything you share with us stays confidential.' },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full px-6 md:px-24 pt-10 md:pt-16 pb-20 flex flex-col gap-14"
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-4 mb-4">
          <svg viewBox="0 0 20 20" width="12" height="12" className="shrink-0">
            <path d="M10 1 L16 10 L10 19 L4 10 Z" fill="none" stroke="var(--color-arcane-400)" strokeWidth="1.4" />
          </svg>
          <h2 className="text-sm tracking-[0.28em] font-mono text-arcane-400 font-bold uppercase">Let's talk</h2>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-semibold text-fog tracking-tight">CONTACT</h1>
        <p className="mt-3 text-mist text-lg max-w-lg">
          Questions, feedback, or just want to say hi? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="border border-line rounded-2xl bg-ink-2/60 p-6 flex flex-col gap-4"
        >
          <h3 className="text-xs tracking-[0.2em] text-arcane-400 font-mono font-bold uppercase">Contact Methods</h3>

          {CONTACT_METHODS.map((c) => (
            <motion.a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 p-4 border border-line rounded-xl hover:border-arcane-500/50 transition-colors"
            >
              <img src={c.logo} className="w-11 h-11 object-contain shrink-0" alt={c.name} />
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-fog truncate">{c.name}</h4>
                  <span className="text-[10px] uppercase tracking-wide text-arcane-400 border rounded-md px-1.5 py-0.5 shrink-0" style={{ borderColor: 'rgba(232,91,206,0.3)' }}>
                    {c.badge}
                  </span>
                </div>
                <span className="text-sm text-mist mt-0.5">{c.handle}</span>
              </div>
            </motion.a>
          ))}

          <div className="border-t border-line pt-4 text-sm text-mist-dim">
            Discord is the fastest way to get a response.
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-line rounded-2xl bg-ink-2/60 p-6 flex flex-col gap-5"
        >
          <h3 className="text-xs tracking-[0.2em] text-arcane-400 font-mono font-bold uppercase">Availability</h3>

          {AVAILABILITY.map((a) => (
            <div key={a.label} className="flex gap-3">
              <span className="text-arcane-400 shrink-0 mt-0.5">{icons[a.icon]}</span>
              <div>
                <div className="text-[10px] uppercase tracking-wide text-mist-dim">{a.label}</div>
                <div className="font-bold text-fog">{a.value}</div>
                <p className="text-sm text-mist-dim mt-0.5">{a.note}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="border border-line rounded-2xl bg-ink-2/60 p-6"
      >
        <h3 className="text-xs tracking-[0.2em] text-arcane-400 font-mono font-bold uppercase mb-6">Good to Know</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INFO_STRIP.map((info) => (
            <div key={info.title}>
              <span className="text-arcane-400">{icons[info.icon]}</span>
              <h4 className="font-bold text-fog mt-3">{info.title}</h4>
              <p className="text-sm text-mist-dim mt-1.5 leading-relaxed">{info.body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}