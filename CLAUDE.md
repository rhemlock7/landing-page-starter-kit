# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page starter kit built with Next.js 15+ (App Router), React 19, TypeScript, and Tailwind CSS 4. The project uses shadcn/ui components with a "new-york" style preset and serves as a starter template for creating elegant landing pages with pre-built sections.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture & Structure

### Next.js App Router Architecture

The project uses Next.js 15+ App Router with the following layout structure:

- **Root Layout** ([app/layout.tsx](app/layout.tsx)): Global layout with Navbar and Footer components that wrap all pages. Configures Geist Sans and Geist Mono fonts using `next/font/google`.
- **Pages**: Routes are defined by folder structure in the `app/` directory
  - [app/page.tsx](app/page.tsx): Home page composing multiple section blocks
  - [app/course/page.tsx](app/course/page.tsx): Course/product page example with pricing

### Component Organization

Components are organized into three categories:

1. **blocks/** - Full-width page sections (hero, navbar, footer, pricing, portfolio, product-showcase)
2. **ui/** - shadcn/ui primitives (button, etc.)
3. **custom/** - Reusable custom components with business logic
   - [cta-section.tsx](components/custom/cta-section.tsx): Primary/secondary CTA button pairs
   - [nav-cta-button.tsx](components/custom/nav-cta-button.tsx): Client component that changes CTA based on route using `usePathname()`

### Configuration Files

- **[DETAILS.json](DETAILS.json)**: Contains external URLs (e.g., Stripe checkout URL) imported throughout the app with `@/DETAILS.json`
- **[components.json](components.json)**: shadcn/ui configuration using "new-york" style, path aliases, and Lucide icons
- **Path Aliases**: `@/*` maps to project root, allowing imports like `@/components/blocks/hero`

### Styling System

- **Tailwind CSS 4** with inline theme configuration in [app/globals.css](app/globals.css)
- **tw-animate-css**: Animation utilities imported globally
- **Design tokens**: Uses CSS variables for colors (--color-primary, --color-background, etc.) defined in the `@theme inline` block
- **Utility function**: `cn()` in [lib/utils.ts](lib/utils.ts) combines `clsx` and `tailwind-merge` for conditional classnames

### Key Patterns

1. **Client/Server Components**: Most components are server components by default. Client components use `'use client'` directive (e.g., [nav-cta-button.tsx](components/custom/nav-cta-button.tsx) for `usePathname()` hook)

2. **Block Sections**: Page sections in `components/blocks/` are self-contained, full-width components that can be composed on pages

3. **External Links**: When linking to external URLs (Stripe, etc.), use `target="_blank" rel="noopener noreferrer"` for security

4. **Responsive Design**: Mobile-first approach using Tailwind breakpoints (sm:, md:, lg:)

## Adding shadcn/ui Components

This project uses shadcn/ui (new-york style). To add components:

```bash
npx shadcn@latest add [component-name]
```

Components will be added to `components/ui/` and automatically configured with project aliases.
