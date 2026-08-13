"use client";

import { useReveal } from "@/hooks/useReveal";
import AnimatedStat from "./AnimatedStat";
import Typewriter from "./Typewriter";

const BIO =
  "I build interfaces, but I like understanding what happens behind them. I'm a frontend-focused software engineer with 2 years of professional experience, working primarily with React, JavaScript, and TypeScript. At TCS, I work on enterprise applications while exploring architecture, APIs, performance, and AI. Outside of work, I build products end-to-end, from database schemas to pixel-level UI.";

const STATS = [
  { value: "2", label: "YEARS OF\nEXPERIENCE" },
  { value: "10+", label: "PROJECTS\nSHIPPED" },
  { value: "15+", label: "TECHNOLOGIES\nMASTERED" },
  { value: "100%", label: "COMMITMENT" },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""}`}
    >
      <div className="section-head">
        <span className="dot-lead">•</span>
        <h2>// ABOUT ME</h2>
      </div>
      <div className="about-grid">
        <p>
          <Typewriter text={BIO} start={visible} speed={9} />
        </p>
        <div className="stats">
          {STATS.map((stat, i) => (
            <div
              className="stat"
              key={stat.value + i}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <AnimatedStat value={stat.value} start={visible} />
              <span>
                {stat.label.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j === 0 && <br />}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
