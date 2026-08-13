'use client';

import { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%_-';

export default function ScrambleText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    let raf = 0;
    const totalFrames = text.length * 3;

    const tick = () => {
      const revealCount = Math.floor((frame / totalFrames) * text.length);
      let output = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          output += ' ';
        } else if (i < revealCount) {
          output += text[i];
        } else {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(output);
      frame++;
      if (frame <= totalFrames) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [text, delay]);

  return <>{display}</>;
}
