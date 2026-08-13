'use client';

import { useEffect, useRef, useState } from 'react';

export default function Typewriter({
  text,
  start,
  speed = 16,
}: {
  text: string;
  start: boolean;
  speed?: number;
}) {
  const [display, setDisplay] = useState('');
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(text);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed]);

  return (
    <>
      {display}
      <span className="caret">_</span>
    </>
  );
}
