import { useRef } from 'react';

export default function Spotlight({ children, className = '' }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(232,91,206,0.12), transparent 40%)',
      }}
    >
      {children}
    </div>
  );
}
