"use client";

import { useEffect, useState } from "react";

const STAR_COUNT = 420;

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

function generateStars(): Star[] {
  return Array.from({ length: STAR_COUNT }, (_, id) => ({
    id,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() < 0.85 ? 1 : 2,
    duration: 2 + Math.random() * 4,
    delay: Math.random() * 6,
  }));
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
      <span className="comet comet-a" />
      <span className="comet comet-b" />
    </div>
  );
}
