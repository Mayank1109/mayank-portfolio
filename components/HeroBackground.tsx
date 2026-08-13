'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 -> 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${x * -12}px, ${y * -8}px, 0) scale(1.06)`;
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <div className="hero-bg" ref={bgRef} />
      <div className="grain" />
    </>
  );
}
