import { useRef, useEffect, useState } from 'react';

export default function LazyVideo({
  src,
  poster,
  preload = 'none',
  className,
  playOnHover = false
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (playOnHover) return;

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [playOnHover]);

  useEffect(() => {
    if (!ref.current) return;

    const shouldPlay = playOnHover ? isHovered : inView;

    if (shouldPlay) {
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  }, [inView, isHovered, playOnHover]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload={preload}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
