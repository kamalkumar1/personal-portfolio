# Personal Portfolio (Next.js Static)

Live site: **[kamaldev.in](https://kamaldev.in)**

Static personal portfolio built with **Next.js (App Router) + TypeScript**, following a SOLID-friendly architecture with separated content modules.

## Stack

- **Framework:** Next.js 16 (static export)
- **Language:** TypeScript (strict)
- **Hosting:** [GitHub Pages](https://pages.github.com) — see [docs/HOSTING.md](docs/HOSTING.md)
- **Domain:** [kamaldev.in](https://kamaldev.in) (GoDaddy)
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Alternative hosting:** Vercel or Cloudflare Pages

## Architecture

| Layer | Path | Purpose |
|-------|------|---------|
| Domain | `src/domain/` | TypeScript interfaces |
| Content | `src/content/` | All strings and resume data |
| Services | `src/services/` | Content access (DIP) |
| Components | `src/components/` | Reusable UI |
| App | `src/app/` | Page composition |
| Constants | `src/constants/` | Site config, navigation |

## Sections

- Hero / About
- Experience (horizontal timeline)
- My Works (projects with App Store / Play Store links)
- Open Source (grouped showcase with read-more)
- MySkills (Technical Skills + Core Competencies)
- Certifications
- Awards & Achievements
- Hire Me (contact + availability)
- Blog (LinkedIn articles)
- Share portfolio button (floating)

## Commands

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # outputs static site to out/
npm run lint
```

## Profile image

Place your photo at:

`public/images/profile/profile-kamal.png`

Update metadata in `src/content/profile.ts`.

## Deploy

### GitHub Pages (primary)

1. Push to `main`
2. GitHub Actions workflow `.github/workflows/deploy.yml` publishes `out/`
3. Custom domain `kamaldev.in` is configured via `public/CNAME`
4. GoDaddy DNS setup: see [docs/HOSTING.md](docs/HOSTING.md)

**One-time GitHub setup:**
- Repo → **Settings → Pages**
- Source: **GitHub Actions**
- Custom domain: `kamaldev.in`
- Enable **Enforce HTTPS**

**If deploy fails with `Failed to create deployment (status: 404)`:**
- Ensure GitHub Pages is enabled in repo settings
- Re-run the **Deploy Static Site** workflow manually

### Vercel (alternative)

1. Push repo to GitHub
2. Import project on Vercel
3. Deploy (uses `vercel.json`)

## Edit content

Update files under `src/content/` only — no need to change component logic for text updates.

## Documentation

- [Hosting guide](docs/HOSTING.md)
- [Git workflow](docs/GIT_WORKFLOW.md)

## Author

**Kamal Kumar** — Mobile Architect & Senior Mobile Developer  
Portfolio: [kamaldev.in](https://kamaldev.in)
