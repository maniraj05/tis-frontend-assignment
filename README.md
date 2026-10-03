# Tulas International School – Homepage Redesign

An animated, responsive redesign of the [Tulas International School (TIS)](https://tis.edu.in/) homepage, built for the NetPuppys Frontend Developer assignment. Content, facts and branding come from the existing TIS website; the layout, motion and visual design are new.

- **Live demo:** https://tis-frontend-assignment-alpha.vercel.app
- **GitHub repository:** https://github.com/maniraj05/tis-frontend-assignment

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4 (design tokens as CSS variables)
- Framer Motion
- Deployed on Vercel

## Features

- Responsive from 375px to 1440px, with a hamburger menu on mobile
- **Scroll-triggered reveals** with staggered cards and animated stat counters
- **Scroll progress bar** pinned to the top of the page
- **Animated dark / light theme switcher** (saved, follows system preference, no flash on load)
- **Custom cursor ring** that grows over links and buttons (fine pointers only)
- Hero with staggered headline reveal and a sunrise illustration whose hills drift at different speeds on scroll
- Sports ticker, expandable academics list, and a scoreboard-style facilities grid (no photo dependency)
- Testimonial carousel (auto-play, pauses on hover/focus, keyboard accessible)
- Horizontal snap-scroll activities gallery
- Contact form with inline frontend validation (no backend)
- Accessibility: skip link, semantic landmarks, one `h1`, labelled form fields, `aria-*` states, `prefers-reduced-motion` respected

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── components/      # one file per page section + small shared pieces
│   └── ui/          # reusable primitives (Button, Reveal, Counter, Icon, ...)
├── data/            # all copy and content as arrays, rendered with .map()
├── hooks/           # useTheme, useActiveSection
├── App.jsx
├── main.jsx
└── index.css        # Tailwind import + theme tokens
```

## Deploying

**Vercel:** push to GitHub, import the repo at vercel.com/new, keep the detected Vite settings (build `npm run build`, output `dist`), deploy.
**Netlify:** same flow, build command `npm run build`, publish directory `dist`.

## Content Sources and Notes

- Facts (established 2012, 22-acre campus, 16+ sports, 6:1 ratio, 24×7 medical, rankings, parent testimonials, address and contact details) are taken from tis.edu.in.
- The four academics cards group the school's Class IV–XII range; their short descriptions are general copy, not official programme details.
- Only the activities gallery and parent avatars use photos, loaded from tis.edu.in. If they fail to load, designed colour fallbacks appear. For production, download them into `public/images/` and update the paths in `src/data/content.js`.
- The hero is an original SVG illustration (`HeroArt.jsx`), not a photo of the campus.
- Brand colours (cobalt, navy and sun yellow) are an approximation chosen to match the TIS look; edit the CSS variables at the top of `src/index.css` to adjust.
