'use client';

import { useEffect, useRef, useState } from 'react';

function parseValue(raw: string) {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw, decimals: 0 };
  const [, numStr, suffix] = match;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { target: parseFloat(numStr), suffix, decimals };
}

export default function AnimatedStat({ value, start }: { value: string; start: boolean }) {
  const { target, suffix, decimals } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const frameRef = useRef<number>();
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [start, target]);

  return (
    <b>
      {display.toFixed(decimals)}
      {suffix}
    </b>
  );
}
