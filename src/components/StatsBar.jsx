const stats = [
  { value: '6+', label: 'Years Building' },
  { value: '1', label: 'Game Shipped' },
  { value: '55K+', label: 'Player Visits' },
];

export default function StatsBar() {
  return (
    <div className="flex flex-wrap justify-center gap-10 md:gap-20 py-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-4xl font-display font-semibold text-gradient-arcane">{s.value}</div>
          <div className="text-mist text-sm mt-1 font-mono uppercase tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
