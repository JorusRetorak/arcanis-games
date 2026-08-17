import { useEffect, useRef, useState } from 'react';

const stack = [
  'Luau', 'Roblox Studio', 'Knit', 'ReplicaService', 'ProfileService',
  'React', 'Rojo', 'Fusion', 'Datastores', 'Remote Security',
  'Figma', 'Affinity Designer', 'Framer Motion', 'Maid', 'Trove',
  'PartCache', 'Parallel Luau',
];

export default function RuneMarquee() {
  const containerRef = useRef(null);
  const setRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current || !setRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const setWidth = setRef.current.offsetWidth;
      if (setWidth === 0) return;
      const needed = Math.ceil(containerWidth / setWidth) + 2;
      setRepeatCount(Math.max(2, needed));
    };

    calculate();
    const ro = new ResizeObserver(calculate);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', calculate);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', calculate);
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden w-full py-6 border-y border-line">
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${repeatCount * 8}s linear infinite`,
          '--marquee-shift': `-${100 / repeatCount}%`,
        }}
      >
        {Array.from({ length: repeatCount }).map((_, setIndex) => (
          <div key={setIndex} ref={setIndex === 0 ? setRef : null} className="flex shrink-0">
            {stack.map((tech, i) => (
              <span key={i} className="text-mist-dim font-mono font-semibold text-lg whitespace-nowrap mr-12">
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
