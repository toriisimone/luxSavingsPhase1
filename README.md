# Phase One Shop

## Project Description
Phase One Shop recreates the curated Amazon Deals experience with launch-conscious gradients, CTA flows, and analytics-ready cues for the hero, deal grid, and shop-now pages.

## Features
- Gradient hero banner with countdown and card stats
- Responsive deal grid with CTA badges
- Shop Now experience featuring sticky navigation, search, tabs, and cards
- Accessible skip-link, header, and footer with analytics placeholders

## Prerequisites
Ensure you have the following installed:
- Node.js 18 or later
- npm 10 or later (bundled with Node.js)

## Installation Steps
Run the following commands:
    npm install
    npm run lint

## Configuration
Copy `.env.example` to `.env.local` and adjust variable as needed:
    cp .env.example .env.local

## Running the Application
Use this command for local development:
    npm run dev

## Usage Examples
- Navigate to `/` for the hero experience.
- Visit `/shop-deals` to explore curated grids.
- Explore `/shop-now` with product cards and promotional CTAs.

## Troubleshooting
- If `npm run dev` fails, ensure Node.js 18+ is installed and `npm install` completed.
- Missing environment variables from `.env.local` will fall back to defaults; verify `NEXT_PUBLIC_ANALYTICS_ID`.
- For Tailwind build issues, clear `.next` by running `rm -rf .next` then `npm run dev`.

## Project Structure
- `app/layout.tsx`: Root layout with SkipLink, Header, Footer, and logging checkpoint.
- `app/page.tsx`: Hero UI with cards, stats, and CTA controls.
- `app/shop-deals/page.tsx`: Grid of themed deal cards with CTA navigation.
- `app/shop-now/page.tsx`: Sticky shop experience, search, tabs, and featured banners.
- `app/components`: Shared UI primitives (SkipLink, Header, Footer).
- `app/globals.css`: Tailwind declarations plus custom gradients and config.
- `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`: Framework tooling configs.

Logging expectations: Phase One renders should log in development via layout console statement witnessing render checkpoints.
