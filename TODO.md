# Portfolio Site: Nue.js + Vercel

A living checklist to plan, build, and launch your portfolio. Update as we go.

## 0) Decisions to unblock build
- [x] Domain: use `riplyster.com` (registrar/DNS access confirmed by owner)
- [ ] Branding: primary/secondary colors, fonts, logo/wordmark, headshot
  - [x] Palette stored at `design/colors.json`
- [ ] Sections: About, Experience, Projects, Skills, Education, Recommendations, Contact, Resume
- [x] Blog: add later (keep as TODO); likely Markdown/MDX
- [ ] Content source: hand-authored Markdown in repo vs external CMS (Notion, etc.)
- [x] Contact: simple mailto link
- [ ] Analytics: Vercel Analytics (hobby plan) — low priority
- [ ] SEO: social handles, Open Graph image design, sitemap, robots
- [ ] Accessibility: target level (recommend WCAG 2.1 AA)
- [ ] Timeline: target launch date and any milestones
- [x] Runtime/package manager: Bun

## 1) Local setup
- [ ] Install Node.js LTS (>= 18) or rely on Bun runtime where possible
- [x] Create repo and first commit
- [x] Scaffold Nue.js app (minimal starter) in `site/`

```bash
# Using Bun (exact CLI depends on chosen Nue.js starter)
# Placeholder commands; will update once starter is confirmed
# bun create <nue-starter> my-portfolio
cd my-portfolio
bun install
bun run dev
```

## 2) Information architecture & content
- [ ] Define navigation and routes: `/`, `/projects`, `/about`, `/contact`, `/resume`
- [ ] Draft site copy (concise, skimmable) for each section
- [ ] Gather assets: headshot, favicon, social preview (OG) image, project screenshots
- [ ] Projects data: title, role, year, stack, links (GitHub, live), short write-up
- [ ] Prepare resume PDF (exported, optimized)

## 3) Design system
- [ ] Set tokens: colors, spacing, typography scale
- [ ] Light/dark themes (optional)
- [ ] Components: Header, Footer, Section, Button, Card, ProjectCard, Badge, Container

## 4) Pages & components implementation (Nue.js)
- [ ] Home: hero + highlights (projects/experience)
- [ ] Projects: grid/list with filters (optional)
- [ ] Project detail (optional template)
- [ ] About: story, skills, education, recommendations
- [ ] Contact: form or mailto, social links
- [ ] Resume: link to PDF, optionally inline HTML version
- [ ] 404 page

## 5) Data/content plumbing
- [ ] Choose content format: Markdown/JSON for projects/about
- [ ] Build data loaders/utilities
- [ ] Social links: LinkedIn, GitHub, email

## 6) SEO & metadata
- [ ] Title templates and meta descriptions
- [ ] Open Graph + Twitter cards
- [ ] Generate/commit OG image(s)
- [ ] `sitemap.xml` and `robots.txt`

## 7) Quality: performance, a11y, testing
- [ ] Lighthouse >= 95 (PWA optional)
- [ ] Image optimization (sizes, formats)
- [ ] Keyboard nav and color contrast checks (aim for WCAG 2.1 AA)
- [ ] Basic unit/e2e sanity tests (optional)

## 8) Deployment (Vercel)
- [ ] Push repo to GitHub
- [ ] Import to Vercel; verify build command and output directory
- [ ] Add environment variables (if any)
- [ ] Configure custom domain + SSL
- [ ] Enable Vercel Analytics (low priority)

Notes:
- Build script added to `site/package.json` ("build": "nue render"); output dir is `www/`.
- Added `site/vercel.json` to use static-build with `www` as `distDir`.

Common commands
```bash
bun run build
bun run preview # if available
```

## 9) Enhancements (after launch)
- [ ] Blog with MD/MDX + RSS
- [ ] Dynamic OG image generation
- [ ] Project filters/search
- [ ] i18n (if needed)
- [ ] CMS integration (Notion/Headless CMS)
- [ ] Email sending (Resend) + spam protection (hCaptcha/Cloudflare Turnstile)

## 10) Maintenance
- [ ] Monthly content refresh
- [ ] Dependency updates & security
- [ ] Backup and export plan for content/assets


