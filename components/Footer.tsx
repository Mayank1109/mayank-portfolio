"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Footer() {
  const { ref, visible } = useReveal<HTMLElement>(0.05);

  return (
    <footer
      id="contact"
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""}`}
    >
      <div className="foot-top">
        <div className="foot-head">
          <h2>// LET&apos;S CONNECT</h2>
          <p>
            Have a project in mind or want to collaborate? Let&apos;s build
            something amazing together.
          </p>
        </div>
        <div className="foot-links">
          <a href="mailto:maycha1109@gmail.com">✉ &nbsp;maycha1109@gmail.com</a>
          <a href="tel:+918446496551">☎ &nbsp;+91 8446496551</a>
          <a
            href="https://github.com/Mayank1109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⌥ &nbsp;github.com/Mayank1109
          </a>
          <a
            href="https://www.linkedin.com/in/maycha1109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in&nbsp;&nbsp;https://www.linkedin.com/in/maycha1109/
          </a>
        </div>
        <a href="mailto:maycha1109@gmail.com" className="btn">
          SEND ME A MESSAGE →
        </a>
      </div>
      <div className="foot-bottom">
        <div>MAYANK.IO</div>
        <div>
          © {new Date().getFullYear()} MAYANK CHAUHAN — ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
