import { useState } from 'react';

export default function LazyImage({ src, alt = '', className = '' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full flex items-center justify-center">
      {!loaded && (
        <div className="absolute inset-0 m-auto w-2/3 h-2/3 bg-ink-3 animate-pulse rounded-lg" />
      )}
      <img
        key={src}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        ref={(node) => {
          if (node && node.complete) setLoaded(true);
        }}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
