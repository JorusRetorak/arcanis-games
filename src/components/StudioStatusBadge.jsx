export default function StudioStatusBadge() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-line rounded-full w-fit mx-auto md:mx-0 bg-ink-2/60">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
      </span>
      <span className="text-sm text-mist">Working on: Nextgen Tennis</span>
    </div>
  );
}
