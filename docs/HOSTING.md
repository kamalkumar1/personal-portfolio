# Hosting

**Selected stack:** Next.js 16 (App Router) + TypeScript  
**Primary hosting:** [GitHub Pages](https://pages.github.com)  
**Custom domain:** [kamaldev.in](https://kamaldev.in) (GoDaddy)

## Why GitHub Pages

- Free hosting for public repositories
- Automatic deploy on every push to `main`
- HTTPS included for custom domains
- Works with this project's static export (`out/`)

## Deploy flow

1. Merge changes to `main`
2. GitHub Actions runs `.github/workflows/deploy.yml`
3. Site is published from the `out/` folder
4. Custom domain serves the site at `https://kamaldev.in`

## One-time GitHub setup

1. Open repo **Settings** → **Pages**
2. Set **Build and deployment** source to **GitHub Actions**
3. In **Custom domain**, enter `kamaldev.in`
4. Save and wait for DNS check to pass
5. Enable **Enforce HTTPS**

## GoDaddy DNS setup for `kamaldev.in`

In GoDaddy → **My Products** → **DNS** for `kamaldev.in`, add:

### Root domain (`@`)

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 600 |
| A | `@` | `185.199.109.153` | 600 |
| A | `@` | `185.199.110.153` | 600 |
| A | `@` | `185.199.111.153` | 600 |

### `www` subdomain (recommended)

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | `www` | `kamalkumar1.github.io` | 600 |

Remove conflicting old A/CNAME records for `@` or `www` if GoDaddy shows duplicates.

DNS propagation usually takes 15 minutes to 24 hours.

## Local static output

```bash
npm run build
```

Static files are generated in `out/` and can be uploaded to any static host.

## Alternative: Vercel or Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Node version: 20+

If switching away from GitHub Pages, update `siteConfig.siteUrl` in `src/constants/site.ts`.
