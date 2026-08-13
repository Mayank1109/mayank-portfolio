# Mayank Chauhan — Portfolio

A Next.js 14 (App Router) + TypeScript rebuild of the black-hole-themed developer portfolio.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx       # Root layout — loads fonts (Space Grotesk + JetBrains Mono), metadata
  page.tsx          # Assembles all sections
  globals.css        # All styling (design tokens as CSS variables)
components/
  Header.tsx         # Sticky glass nav with scroll-spy active state
  Hero.tsx           # Hero section (headline, tagline, CTA)
  About.tsx           # About + stats grid
  Projects.tsx         # Project cards (edit the PROJECTS array to add/change projects)
  Skills.tsx            # Skills grid (edit SKILL_GROUPS to update)
  ExperienceEducation.tsx  # Experience + education split section
  Footer.tsx              # Contact footer
public/images/
  hero.jpg                  # Hero background (black hole art)
  project-medocs.jpg          # Medocs project thumbnail
  project-qa-assistant.jpg     # QA Complaint Assistant thumbnail
  project-portfolio.jpg         # Portfolio project thumbnail
```

## Things to fill in before you ship this

A few spots still have placeholder values — search the codebase for them or just check here:

- **`components/Footer.tsx`** — real email, phone, GitHub, and LinkedIn links.
- **`components/ExperienceEducation.tsx`** — your actual B.Tech years and university name.
- **`components/ExperienceEducation.tsx`** — double check the TCS start date (currently "2024 — Present").
- **`app/layout.tsx`** — update the `metadata` description if you want something more specific for SEO/social previews.

## Editing content

Everything is data-driven from small arrays/objects at the top of each component (`PROJECTS`, `SKILL_GROUPS`, `STATS`, `NAV_LINKS`) — edit those rather than the JSX to add or change entries.

## Deploying

This is a standard Next.js app, so it deploys as-is to Vercel:

```bash
npm i -g vercel
vercel
```

Or build it yourself:

```bash
npm run build
npm start
```
