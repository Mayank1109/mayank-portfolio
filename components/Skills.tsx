"use client";

import { useReveal } from "@/hooks/useReveal";

const SKILL_GROUPS = [
  {
    title: "FRONTEND",
    items: [
      "React",
      "Redux Toolkit",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "BACKEND",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth"],
  },
  { title: "DATABASE", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  {
    title: "TOOLS & OTHERS",
    items: ["Git", "GitHub", "Postman", "Docker", "ESLint / Prettier"],
  },
  {
    title: "CLOUD & DEVOPS",
    items: [
      "Vercel",
      "Render",
      "Cloudinary",
      "CI/CD",
      "Microsoft Azure",
      "Azure Logic Apps",
      "Azure Functions",
    ],
  },
];

export default function Skills() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""}`}
    >
      <div className="section-head">
        <span className="dot-lead">•</span>
        <h2>// SKILLS</h2>
      </div>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-col" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
