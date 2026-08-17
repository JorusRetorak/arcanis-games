export default function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div
        className="w-10 h-10 rounded-full animate-spin"
        style={{
          border: '2px solid var(--color-line)',
          borderTopColor: 'var(--color-arcane-400)',
        }}
      />
    </div>
  );
}
