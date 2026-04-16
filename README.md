# FSZT Partners — Landing Page

The official website for **FSZT Partners Inc**, an AI-first consulting firm.

**Live:** [https://www.fszt.partners](https://www.fszt.partners)

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + GSAP / ScrollTrigger
- **Icons:** Lucide React
- **Hosting:** Vercel

## Features

- Cinematic scroll animations — horizontal-scroll process section, pinned GSAP scrub, word-by-word text reveal
- Interactive particle grid hero (canvas, desktop only)
- Animated counters, typewriter text cycling, infinite client marquee
- Fully responsive with graceful mobile fallbacks
- Static export — zero server-side runtime

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/               # Next.js App Router (layout, page, globals.css)
├── components/
│   ├── animations/    # FadeInUp, StaggerChildren wrappers
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, Manifesto, Process, Offerings, Labs, Domains, Clients, CTA
│   └── ui/            # Button, Card, GradientText, SectionHeading, AnimatedCounter, TypewriterText, ParticleGrid
├── hooks/             # useMediaQuery
└── lib/               # constants, utils, gsap-config, animation-variants
```

## Deployment

Deployed on Vercel via the `main` branch. Every push to `main` triggers a production build.

## License

Proprietary — FSZT Partners Inc. All rights reserved.
