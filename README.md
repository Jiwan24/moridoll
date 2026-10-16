# MoriDoll Website

Sensory play kit edukatif — website produk MoriDoll.

Built with **Next.js 15 (App Router)**, **Tailwind CSS 3**, **Framer Motion**, **React Hook Form**, and **Zod**.

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
pnpm build
```

## Known Deviations from Spec

### Tailwind CSS version

The spec (§3.2) references Tailwind v4 syntax (`@import "tailwindcss"` and `@theme {}` blocks with CSS custom properties such as `--color-purple`, `--font-heading`). This project uses **Tailwind CSS v3** with `tailwind.config.ts` and `@tailwind` directives in `globals.css`.

Reason: Tailwind v4 was in early-release at implementation time and had limited ecosystem compatibility (PostCSS plugin, Next.js adapter). v3.4 provides the same design token coverage via `tailwind.config.ts` and is production-stable.

Effect: The spec-specified CSS variable names (`--color-purple`, etc.) are not defined as standalone CSS custom properties and will not resolve outside Tailwind utility class contexts. All brand colors and fonts are correctly applied via Tailwind utilities throughout the codebase.

## Project Structure

```
src/
  app/           Next.js App Router pages
  components/
    layout/      Navbar, Footer, SmileDivider
    sections/    One file per page section
    ui/          Reusable primitives (Tabs, SectionHeading, …)
  data/          Static data (age-guide.ts, logo-colors.ts, …)
  lib/           Utilities (cn, site config)
```

## Assets

Placeholder assets (`/public/logo/`, `/public/images/`) must be replaced with final production assets before go-live. See TODO comments in Hero.tsx, SketchGallery.tsx, and Footer.tsx.
