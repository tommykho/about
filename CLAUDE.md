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
    │   ├── bootstrap.min.css  # Bootstrap 4.x framework
    │   ├── main.css           # Primary custom styles (portfolio layout)
    │   ├── responsive.css     # Media queries for breakpoints
    │   └── animate.css        # CSS animation library
    ├── js/
    │   ├── main.js            # Custom app logic (preloader, sticky nav, scroll, WOW init)
    │   ├── scrolling-nav.js   # Smooth scroll navigation
    │   ├── jquery-min.js      # jQuery library
    │   ├── bootstrap.min.js   # Bootstrap JS
    │   ├── popper.min.js      # Bootstrap tooltip dependency
    │   ├── wow.js             # Scroll-triggered animations
    │   ├── jquery.easing.min.js  # Animation easing
    │   └── jquery.nav.js      # One-page navigation
    ├── fonts/                 # LineIcons font files (.eot, .svg, .ttf, .woff)
    │   └── line-icons.css     # Icon font stylesheet
    └── img/                   # Site images
        ├── profile.jpg        # Profile photo (circular hero image)
        └── ...                # Other images
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
| `assets/js/main.js` | Page behavior: preloader, sticky nav, WOW animations, smooth scroll, back-to-top |

## Design Conventions

- **Color scheme:** Pink accent `#E91E63` on white/dark backgrounds; dark text `#1a1a1a`
- **Typography:** `Montserrat` (headings, 400–700), `Open Sans` (body, 400/600)
- **Base font size:** 16px, line-height 1.7
- **Responsive breakpoints:** 1199px, 991px, 767px, 480px
- **Animations:** WOW.js triggers Animate.css classes on scroll; `mobile: false` disables on mobile
- **Icons:** LineIcons font (referenced via `lni-` class prefix)
- **Layout:** CSS Grid for skills, Bootstrap grid for sections, Flexbox for hero

## Third-Party Libraries (Vendored)

All dependencies are committed directly as static files — there is no package manager.

| Library | File(s) | Purpose |
|---------|---------|---------|
| Bootstrap 4.x | `css/bootstrap.min.css`, `js/bootstrap.min.js` | Layout grid & components |
| jQuery | `js/jquery-min.js` | DOM manipulation |
| Popper.js | `js/popper.min.js` | Bootstrap tooltip/popover positioning |
| Animate.css | `css/animate.css` | CSS keyframe animations |
| WOW.js | `js/wow.js` | Scroll-triggered animation triggers |
| jQuery Easing | `js/jquery.easing.min.js` | Animation easing functions |
| jQuery Nav | `js/jquery.nav.js` | One-page navigation highlighting |

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

- **Profile image** must be saved manually to `assets/img/profile.jpg`.
- **No dependency management** — library updates require manually replacing vendored files.
- **Unused vendored files** — some old libraries (Vegas, SlickNav, countdown, etc.) remain in the assets directory but are no longer loaded by the page.

## Coding Conventions for AI Assistants

- This is a no-build static site. Do not introduce build tools, package managers, or transpilers unless explicitly requested.
- All JS uses jQuery patterns wrapped in an IIFE with `"use strict"`.
- CSS follows a flat structure — no preprocessor (SASS/LESS). Write plain CSS.
- Keep all assets in their respective `assets/` subdirectories.
- Third-party libraries are vendored (committed as static files), not installed via npm.
- The entire site is a single `index.html` — there are no routes or separate pages.
- When editing styles, check both `main.css` and `responsive.css` for the relevant selectors.
