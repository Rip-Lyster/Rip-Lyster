# Portfolio Project Plan (Nue.js + Bun + Vercel)

This plan outlines the next steps to take the scaffold into a polished, deployed site.

## Milestone 1: Content & IA
- Define navigation and pages: Home, Projects, About, Contact, Resume (blog later)
- Gather content: copy, headshot, resume PDF, project screenshots
- Decide content format: Markdown (preferred) for about/projects

Deliverables
- Content files in `site/content/` (e.g., markdown + JSON index)
- Updated routes and pages wired to content

## Milestone 2: Design System
- Lock brand tokens from `project/design/colors.json`
- Choose type scale and fonts (system-first; optional Google Fonts)
- Build core components: Header, Footer, Container, Button, Card, ProjectCard, Badge

Deliverables
- Tokens file in `site/src/styles/tokens.css` (or CSS variables)
- Components in `site/src/components/*.nue`

## Milestone 3: Pages
- Home (hero + highlights)
- Projects (grid with cards)
- About (bio, skills, education, recommendations)
- Contact (mailto + social links)
- Resume (link to PDF)
- 404 page

Deliverables
- Implemented pages under `site/src/`
- Static render passes and Lighthouse checks

## Milestone 4: SEO & Sharing
- Page titles, meta descriptions
- OG + Twitter cards
- Sitemap and robots

Deliverables
- Meta helpers and default layout metadata
- `site/www/og-image.png` placeholder
- `sitemap.xml`, `robots.txt`

## Milestone 5: Deployment
- GitHub repo + Vercel import
- Build: `bun run build` -> `www` output
- Domain: `riplyster.com` on Vercel

Deliverables
- Live site at production domain
- Preview deployments enabled

## Milestone 6: Enhancements (post-launch)
- Blog (MD/MDX) with RSS
- Dynamic OG images
- Contact form via Resend (optional)
- Simple analytics (Vercel Analytics on hobby plan)

---

## Work Breakdown (initial)
- Create content structure under `site/content/`
- Add tokens and global CSS vars
- Implement Header/Footer
- Build Home + Projects (cards)
- Add About & Contact sections
- Hook up SEO meta defaults
- Prepare OG image and sitemap/robots
- Configure Vercel project

## Tracking
Use `TODO.md` for task-level tracking; update checkboxes as we complete items.

