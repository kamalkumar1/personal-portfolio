# Hosting

**Selected stack:** Next.js 16 (App Router) + TypeScript  
**Primary hosting:** [Vercel](https://vercel.com) (recommended for Next.js static export)

## Why Vercel

- Native Next.js integration and zero-config deploys
- Automatic HTTPS and CDN
- Connect GitHub repo for deploy on every push to `main`

## Alternative: Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Node version: 20+

## Local static output

```bash
npm run build
```

Static files are generated in `out/` and can be uploaded to any static host.
