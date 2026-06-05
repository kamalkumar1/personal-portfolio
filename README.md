# Personal Portfolio (Next.js Static)

Static personal portfolio built with **Next.js (App Router) + TypeScript**, following a SOLID-friendly architecture with separated content modules.

## Stack

- **Framework:** Next.js 16 (static export)
- **Language:** TypeScript (strict)
- **Hosting:** [GitHub Pages](https://pages.github.com) — see [docs/HOSTING.md](docs/HOSTING.md)
- **Domain:** [kamaldev.in](https://kamaldev.in) (GoDaddy)
- **Alternative:** Vercel or Cloudflare Pages

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

- About / Hero
- Core Competencies
- Experience (horizontal timeline)
- Open Source (platform-wise accordion: Native iOS, .NET MAUI, Kotlin Multiplatform)
- Projects
- Technical Skills
- Certifications
- Awards & Achievements
- Contact (email, phone, LinkedIn, Stack Overflow)

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

### Vercel (alternative)

1. Push repo to GitHub
2. Import project on Vercel
3. Deploy (uses `vercel.json`)

## Edit content

Update files under `src/content/` only — no need to change component logic for text updates.

## Documentation

- [Hosting guide](docs/HOSTING.md)
- [Git workflow](docs/GIT_WORKFLOW.md)
