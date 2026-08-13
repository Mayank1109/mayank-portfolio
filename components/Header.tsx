"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "01./HOME" },
  { href: "#about", label: "02./ABOUT" },
  { href: "#projects", label: "03./PROJECTS" },
  { href: "#experience", label: "04./EXPERIENCE" },
  { href: "#education", label: "05./EDUCATION" },
  { href: "#contact", label: "06./CONTACT" },
];

export default function Header() {
  const [active, setActive] = useState("#home");
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));

    const onScroll = () => {
      let current = "#home";
      sections.forEach((section, i) => {
        if (
          section &&
          window.scrollY >= (section as HTMLElement).offsetTop - 140
        ) {
          current = NAV_LINKS[i].href;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const measure = () => {
      const el = linkRefs.current[active];
      const nav = navRef.current;
      if (el && nav) {
        const navRect = nav.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        setIndicator({
          left: elRect.left - navRect.left,
          width: elRect.width,
          ready: true,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="logo">MAYANK.IO</div>
      <nav ref={navRef}>
        <span
          className="nav-indicator"
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: indicator.width,
            opacity: indicator.ready ? 1 : 0,
          }}
        />
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            ref={(el) => {
              linkRefs.current[link.href] = el;
            }}
            className={active === link.href ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="connect">
        LET&apos;S CONNECT <span className="dot"></span>
      </a>
      <button className="nav-toggle" onClick={scrollToContact}>
        MENU
      </button>
    </header>
  );
}
