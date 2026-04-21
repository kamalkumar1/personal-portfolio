# Personal Portfolio (Next.js Static)

Static personal portfolio website built with Next.js (App Router) and TypeScript.

## Highlights

- Static export ready (`output: "export"`).
- SOLID-friendly architecture (`domain`, `content`, `services`, `components`).
- No hardcoded display strings in UI components.
- Open Source section is extendable and grouped platform-wise.

## Structure

- `src/domain`: interfaces and models
- `src/content`: all content strings/data
- `src/services`: content access/adapters
- `src/components`: reusable UI components
- `src/app`: page composition and routing

## Run

1. Install Node.js (LTS).
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Build static output:

```bash
npm run build
```

Generated static files will be in `out/`.

## Profile image

Place your image at:

`public/images/profile/profile-kamal.webp`

Then adjust metadata in:

`src/content/profile.ts`
