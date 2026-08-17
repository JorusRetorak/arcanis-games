export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <svg viewBox="0 0 20 20" width="12" height="12" className="shrink-0">
        <path d="M10 1 L16 10 L10 19 L4 10 Z" fill="none" stroke="var(--color-arcane-400)" strokeWidth="1.4" />
      </svg>
      <h2 className="text-xs tracking-[0.28em] font-mono font-bold uppercase text-arcane-400">
        {children}
      </h2>
      <span className="h-px flex-1 max-w-16 bg-line" />
    </div>
  );
}
