"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

type Project = {
  title: string;
  desc: string;
  image: string;
  imagePosition?: string;
  tags: string[];
  liveLink?: string;
};

const PROJECTS: Project[] = [
  {
    title: "MEDOCS",
    desc: "AI-powered health document management platform with Gemini-driven summarization, Q&A, favorites, and real-time notifications.",
    image: "/images/project-medocs.jpg",
    imagePosition: "70% 30%",
    tags: ["#REACT", "#NODE.JS", "#MONGODB", "#GEMINI AI"],
    liveLink: "https://medocs-two.vercel.app/",
  },
  {
    title: "PAPERBRAIN",
    desc: "Built the frontend for an AI-powered research assistant that connects natural-language queries with RAG-based paper discovery and semantic search.",
    image: "/images/project-qa-assistant.jpg",
    imagePosition: "50% 20%",
    tags: [
      "#HTML5",
      "#CSS3",
      "#JAVASCRIPT",
      "#NEXT.JS",
      "#TYPESCRIPT",
      "#LLMAPIs",
      "#VECTORDB",
      "#RAG",
    ],
    liveLink: "https://www.paperbrain.org/",
  },
  {
    title: "QA COMPLAINT ASSISTANT",
    desc: "AI assistant for pharmaceutical QA that extracts data from documents and auto-fills complaint forms via chat.",
    image: "/images/project-portfolio.jpg",
    imagePosition: "20% 60%",
    tags: ["#REACT", "#REDUX", "#FASTAPI", "#LANGGRAPH"],
    liveLink: "https://complain-intake-system.vercel.app/",
  },
];

export default function Projects() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""}`}
    >
      <div className="section-head-row">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <span className="dot-lead">•</span>
          <h2>// PROJECTS</h2>
        </div>
        <a href="https://github.com/Mayank1109/" className="view-all">
          VIEW ALL PROJECTS ↗
        </a>
      </div>
      <div className="projects">
        {PROJECTS.map((project) => (
          <div className="card" key={project.title}>
            <div className="card-media">
              <Image
                src={project.image}
                alt={project.title}
                fill
                loading="lazy"
                sizes="(max-width: 980px) 100vw, 33vw"
                style={{
                  objectFit: "cover",
                  objectPosition: project.imagePosition ?? "center",
                }}
              />
            </div>
            <div className="card-body">
              <div className="card-title">
                {project.title}{" "}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗
                </a>
              </div>
              <div className="card-desc">{project.desc}</div>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
