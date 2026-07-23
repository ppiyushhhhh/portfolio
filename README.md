# Piyush Prasad — Portfolio Website

A single-page, dark-themed engineering portfolio for **Piyush Prasad**, an aspiring Cloud & DevOps Engineer transitioning from an IT Service Management background. Built with a "blueprint grid" motif to reinforce the infrastructure/DevOps aesthetic — clean, minimal, and information-dense without feeling cluttered.

**Live site:** [piyushprasad.in](https://www.piyushprasad.in) &nbsp;•&nbsp; **Resume:** [/resume](https://www.piyushprasad.in/resume)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TanStack Start](https://img.shields.io/badge/TanStack%20Start-SSR-FF4154?logo=react-query&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-0055FF?logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-Package%20Manager-000000?logo=bun&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Sections](#sections)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [SEO & Performance](#seo--performance)
- [Roadmap](#roadmap)
- [Contact](#contact)
- [License](#license)

---

## Overview

This repository contains the source for my personal portfolio — a single-scroll site with anchor navigation that showcases my DevOps projects, work experience, skills, certifications, education, and live GitHub activity. It's built as a technical portfolio meant to read like an engineering artifact: thin grid lines, monospace section labels, restrained color palette, and scroll-triggered motion.

## Tech Stack

| Layer            | Technology                                    |
|-------------------|------------------------------------------------|
| Framework         | React 19 + TanStack Start (SSR, file-based routing) |
| Styling           | Tailwind CSS v4 + shadcn/ui (Radix primitives) |
| Animation         | Framer Motion                                  |
| Icons             | lucide-react                                   |
| Data Fetching     | TanStack Query (live GitHub API)               |
| Forms/Validation  | React Hook Form + Zod                          |
| Build Tool        | Vite                                           |
| Package Manager   | Bun                                            |
| Hosting           | Vercel (auto-deploy on push to `main`)         |

## Sections

The site is organized as a single scrollable page with a sticky anchor nav:

1. **Hero** — name, role, one-line pitch, contact quick-actions (copy-to-clipboard email, phone, LinkedIn, GitHub), animated SVG blueprint-grid background
2. **Projects** — flagship DevOps projects (CI/CD pipeline on AWS EC2 + Nginx + Cloudflare; production AWS EC2 app with DevSecOps: Certbot SSL, UFW, Prometheus/Grafana, Trivy)
3. **Experience** — reverse-chronological work history (Runtime Solutions, Credence Infotech)
4. **Skills** — categorized tags (Cloud, OS, DevOps Tools, Web Server, CI/CD, Monitoring, Security, ITSM)
5. **Certifications** — grid of certs with issuer and verification links
6. **Education** — reverse-chronological academic history
7. **GitHub** — live data pulled from the GitHub REST API (recently pushed repos + latest commit per repo)
8. **Contact** — email, phone, LinkedIn, GitHub as clear CTAs

A dedicated `/resume` route serves a styled PDF viewer, and `/sitemap.xml` is generated dynamically for SEO.

## Project Structure

```
.
├── app/
│   ├── routes/
│   │   ├── index.tsx          # Main portfolio page
│   │   ├── resume.tsx         # Resume viewer route
│   │   └── sitemap[.]xml.ts   # Dynamic sitemap
│   ├── components/
│   │   ├── sections/          # Hero, Projects, Experience, Skills, etc.
│   │   ├── ui/                 # shadcn/ui primitives
│   │   └── layout/             # Nav, footer, blueprint-grid background
│   ├── hooks/                  # useActiveSection, useGithubRepos, etc.
│   ├── lib/                    # Utilities, Zod schemas, API clients
│   └── styles/                 # Tailwind config & global styles
├── public/
│   ├── resume.pdf
│   └── robots.txt
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.1+
- Node.js 20+ (for tooling compatibility)

### Installation

```bash
# Clone the repository
git clone https://github.com/ppiyushhhhh/portfolio.git
cd portfolio

# Install dependencies
bun install

# Start the dev server
bun run dev
```

The site will be available at `http://localhost:3000`.

## Available Scripts

| Command          | Description                              |
|-------------------|-------------------------------------------|
| `bun run dev`     | Start the local development server        |
| `bun run build`   | Build the app for production              |
| `bun run start`   | Serve the production build locally        |
| `bun run lint`    | Run ESLint checks                         |
| `bun run format`  | Format code with Prettier                 |
| `bun run typecheck` | Run TypeScript type checking            |

## Environment Variables

No secrets are required — all external calls (GitHub REST API) use public, unauthenticated read-only endpoints. Optional variables:

```env
# .env
PUBLIC_SITE_URL=https://www.piyushprasad.in
PUBLIC_GITHUB_USERNAME=ppiyushhhhh
```

## Deployment

The site auto-deploys to **Vercel** on every push to `main`:

1. Connect the repository in the Vercel dashboard
2. Set the framework preset to **Vite / TanStack Start**
3. Add the environment variables above (if used)
4. Push to `main` — Vercel builds and deploys automatically

## SEO & Performance

- Proper meta tags and Open Graph tags on every route
- Dynamically generated `sitemap.xml` and static `robots.txt`
- Optimized for Lighthouse across Performance, Accessibility, Best Practices, and SEO
- Mobile-first, fully responsive — grid/animation effects degrade gracefully on smaller viewports

## Roadmap

- [ ] Self-hosted **daily website health report**: scheduled GitHub Actions script checking HTTP status/response time, SSL certificate validity, DNS records, and Lighthouse score, emailed as a branded PDF with a computed 0–100 health grade

## Contact

**Piyush Prasad**

- GitHub: [@ppiyushhhhh](https://github.com/ppiyushhhhh)
- LinkedIn: [linkedin.com/in/ppiyushhhh](https://linkedin.com/in/ppiyushhhh)

## License

This project is licensed under the [MIT License](LICENSE).
