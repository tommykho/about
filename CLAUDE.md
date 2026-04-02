# CLAUDE.md

## Project Overview

This is a **static single-page personal portfolio/playground** website for GitHub Pages, created by Tommy Ho, hosted at https://tommykho.github.io/about/.

The site is a clean, minimal CV-style one-pager inspired by [Clint Balcom's portfolio](https://onepagelove.com/clint-balcom). It features a hero section with profile photo, an about section with skills, a playground/projects showcase, a "This & That" personality section, and a contact section. No build tools or package managers — all assets are static files served directly.

**License:** GNU General Public License v3.0

## Tech Stack

- **HTML5** — single `index.html` entry point
- **CSS3** — Bootstrap 4.x framework + custom stylesheets
- **JavaScript** — jQuery-based, no module bundler or transpiler
- **Fonts** — Google Fonts (Montserrat, Open Sans) + LineIcons icon font

## Directory Structure

```
/
├── index.html                 # Main (and only) HTML page
├── CLAUDE.md                  # This file — AI assistant instructions
├── README.md                  # Project documentation
├── LICENSE                    # GPLv3 license
└── assets/
    ├── css/
    │   ├── main.css           # Primary custom styles (portfolio layout)
    │   └── responsive.css     # Media queries for breakpoints
    ├── js/
    │   ├── main.js            # Custom app logic (skeleton loader, sticky nav, scroll, AOS init)
    │   ├── scrolling-nav.js   # Smooth scroll navigation
    │   └── jquery.nav.js      # One-page navigation
    ├── fonts/                 # LineIcons font files (.eot, .svg, .ttf, .woff)
    │   └── line-icons.css     # Icon font stylesheet
    └── img/
        └── profile.png        # Profile photo (circular hero image)
```

## Page Sections

| Section | ID | Description |
|---------|----|-------------|
| Hero | `#hero` | Profile photo, name, title, bio, CTA buttons, social links |
| About | `#about` | Bio text + 3-column skills grid (Development, Engineering, Prototyping) |
| Playground | `#playground` | Project cards grid — showcases experiments and side projects |
| This & That | `#this-and-that` | 4-column personality/fun facts grid |
| Contact | `#contact` | Dark background, email CTA, social links |
| Footer | `footer` | Minimal copyright line |

## Key Files to Edit

| File | Purpose |
|------|---------|
| `index.html` | All page content, structure, and section markup |
| `assets/css/main.css` | Primary visual styling and theming |
| `assets/css/responsive.css` | Responsive breakpoints (1199px, 991px, 767px, 480px) |
| `assets/js/main.js` | Page behavior: skeleton loader, sticky nav, AOS animations, smooth scroll, back-to-top |

## Design Conventions

- **Color scheme:** Pink accent `#E91E63` on white/dark backgrounds; dark text `#1a1a1a`
- **Typography:** `Montserrat` (headings, 400–700), `Open Sans` (body, 400/600)
- **Base font size:** 16px, line-height 1.7
- **Responsive breakpoints:** 1199px, 991px, 767px, 480px
- **Animations:** AOS (Animate On Scroll) with `once: true` and `disable: 'mobile'`
- **Loading:** Skeleton preloader with shimmer animation that mirrors page layout
- **Icons:** LineIcons font (referenced via `lni-` class prefix)
- **Layout:** CSS Grid for skills, Bootstrap grid for sections, Flexbox for hero

## Third-Party Libraries

Most dependencies are loaded via **cdnjs CDN**. Only niche/custom scripts remain as local vendored files.

### CDN Dependencies (loaded in `index.html`)

| Library | Version | CDN URL | Purpose |
|---------|---------|---------|---------|
| jQuery | 3.7.1 | cdnjs.cloudflare.com | DOM manipulation |
| Popper.js | 1.16.1 | cdnjs.cloudflare.com | Bootstrap tooltip/popover positioning |
| Bootstrap | 4.6.2 | cdnjs.cloudflare.com | Layout grid & components (CSS + JS) |
| jQuery Easing | 1.4.1 | cdnjs.cloudflare.com | Animation easing functions |
| AOS | 2.3.4 | cdnjs.cloudflare.com | Scroll-triggered animations (CSS + JS) |

### Local Vendored Files

| Library | File(s) | Purpose |
|---------|---------|---------|
| jQuery Nav | `js/jquery.nav.js` | One-page navigation highlighting |
| Scrolling Nav | `js/scrolling-nav.js` | Smooth scroll navigation helper |
| LineIcons | `fonts/` + `fonts/line-icons.css` | Icon font |

## Build & Development

**There is no build system.** No `package.json`, no npm/yarn, no bundler, no transpiler.

### Local Development

Open `index.html` directly in a browser, or serve via any static file server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

### Deployment

The site is deployed to **GitHub Pages** by pushing to the repository. No CI/CD pipeline exists. Changes to the `main` branch are served automatically at https://tommykho.github.io/about/.

## Testing

There are no automated tests, testing frameworks, linters, or formatters configured.

## Known Issues & Caveats

- **Profile image** must be saved manually to `assets/img/profile.png`.
- **CDN dependency** — the site requires an internet connection to load jQuery, Bootstrap, Popper.js, jQuery Easing, and AOS from cdnjs.

## Coding Conventions for AI Assistants

- This is a no-build static site. Do not introduce build tools, package managers, or transpilers unless explicitly requested.
- All JS uses jQuery patterns wrapped in an IIFE with `"use strict"`.
- CSS follows a flat structure — no preprocessor (SASS/LESS). Write plain CSS.
- Keep all assets in their respective `assets/` subdirectories.
- Third-party libraries are loaded via cdnjs CDN where available; only niche plugins are vendored locally.
- The entire site is a single `index.html` — there are no routes or separate pages.
- When editing styles, check both `main.css` and `responsive.css` for the relevant selectors.
