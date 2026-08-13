"use client";

import { useReveal } from "@/hooks/useReveal";

type ExperienceEntry = {
  role: string;
  org: string;
  date: string;
  desc: string;
  bullets?: string[];
};

type EducationEntry = {
  role: string;
  org: string;
  date: string;
  desc: string;
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Systems Engineer - React Developer",
    org: "Tata Consultancy Services (TCS)",
    date: "January 2025 — Present",
    desc: "Working on an enterprise transaction-processing application, building and enhancing React interfaces while improving frontend architecture, validation, performance, and API integration.",
    bullets: [
      "Designed a configuration-driven Formik + Yup validation framework that eliminated 10,000+ lines of imperative validation code, enabling reusable runtime validation across forms.",
      "Developed reusable React Hooks and a configurable customMapper utility to centralize business logic and API-to-UI data transformation.",
      "Optimized frontend workflows using code splitting, lazy loading, and browser performance profiling, while investigating rendering and application performance issues.",
      "Collaborated with backend teams on REST API contracts through Swagger and analyzed backend implementations to ensure reliable frontend integration.",
      "Improved code quality by introducing ESLint, Prettier, Git pre-commit hooks, and contributing to CI/CD workflows.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Noetic LogistieX Pvt. Ltd.",
    date: "July 2024 — December 2024",
    desc: "Contributed to a logistics management platform, working across React frontend features and Node.js backend APIs as part of an Agile development team.",
    bullets: [
      "Developed React UI features and 10+ REST API endpoints using Node.js and Express.js, contributing to end-to-end feature delivery in Agile sprints.",
      "Built data-heavy UI components including dashboards and tables with dynamic filtering, using React Hooks to manage state and control conditional rendering across the application.",
    ],
  },
  // Add more roles here — newest first — and they'll render automatically.
];

const EDUCATION: EducationEntry[] = [
  {
    role: "Bachelor of Technology (B.Tech)",
    org: "Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGITM), Delhi",
    date: "2020 — 2024",
    desc: "Information Technology (IT) | CGPA: 9.28/10",
  },
  {
    role: "Senior Secondary (12th Grade)",
    org: "D.A.V. Centenary Public School, Delhi",
    date: "2019 — 2020",
    desc: "Computer Science | Percentage: 95%",
  },
  // Add more entries here — newest first — and they'll render automatically.
];

export default function ExperienceEducation() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      className={`split reveal ${visible ? "reveal-visible" : ""}`}
      ref={ref}
    >
      <div id="experience">
        <div className="section-head">
          <span className="dot-lead">•</span>
          <h2>// EXPERIENCE</h2>
        </div>
        {EXPERIENCE.map((exp, i) => (
          <div className="entry" key={`${exp.org}-${i}`}>
            <div className="entry-row">
              <span className="entry-role">{exp.role}</span>
              <span className="entry-date">{exp.date}</span>
            </div>
            <div className="entry-org">{exp.org}</div>
            <div className="entry-desc">{exp.desc}</div>
            {exp.bullets && exp.bullets.length > 0 && (
              <ul>
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div id="education">
        <div className="section-head">
          <span className="dot-lead">•</span>
          <h2>// EDUCATION</h2>
        </div>
        {EDUCATION.map((edu, i) => (
          <div className="entry" key={`${edu.org}-${i}`}>
            <div className="entry-row">
              <span className="entry-role">{edu.role}</span>
              <span className="entry-date">{edu.date}</span>
            </div>
            <div className="entry-org">{edu.org}</div>
            <div className="entry-desc">{edu.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
