# CLAUDE.md

## Project Overview

This is a **static single-page website** ("Coming Soon" landing page) for GitHub Pages. It is a personal about/portfolio page created by Tommy Ho, hosted at https://tommykho.github.io/about/.

The site features a countdown timer, services section, team section, contact form, and Google Maps integration. It uses no build tools or package managers — all assets are static files served directly.

**License:** GNU General Public License v3.0

## Tech Stack

- **HTML5** — single `index.html` entry point
- **CSS3** — Bootstrap 4.x framework + custom stylesheets
- **JavaScript** — jQuery-based, no module bundler or transpiler
- **PHP** — server-side contact form processor (non-functional on GitHub Pages)
- **Fonts** — Google Fonts (Montserrat, Open Sans) + LineIcons icon font

## Directory Structure

```
/
├── index.html                 # Main (and only) HTML page
├── README.md                  # Project documentation
├── LICENSE                    # GPLv3 license
└── assets/
    ├── css/
    │   ├── bootstrap.min.css  # Bootstrap 4.x framework
    │   ├── main.css           # Primary custom styles (~1,295 lines)
    │   ├── responsive.css     # Media queries for breakpoints
    │   ├── animate.css        # CSS animation library
    │   ├── vegas.min.css      # Image slider styles
    │   ├── slicknav.css       # Mobile menu styles
    │   └── menu_sideslide.css # Side-slide menu styles
    ├── js/
    │   ├── main.js            # Custom app logic (preloader, nav, countdown, scroll)
    │   ├── map.js             # Google Maps configuration
    │   ├── scrolling-nav.js   # Smooth scroll navigation
    │   ├── classie.js         # CSS class manipulation utility
    │   ├── jquery-min.js      # jQuery library
    │   ├── bootstrap.min.js   # Bootstrap JS
    │   ├── popper.min.js      # Bootstrap tooltip dependency
    │   ├── jquery.slicknav.js # Mobile responsive menu plugin
    │   ├── wow.js             # Scroll-triggered animations
    │   ├── vegas.min.js       # Image slider library
    │   ├── jquery.countdown.min.js   # Countdown timer
    │   ├── jquery.easing.min.js      # Animation easing
    │   ├── jquery.nav.js             # One-page navigation
    │   ├── form-validator.min.js     # Client-side form validation
    │   └── contact-form-script.min.js # Contact form AJAX handler
    ├── fonts/                 # LineIcons font files (.eot, .svg, .ttf, .woff)
    │   └── line-icons.css     # Icon font stylesheet
    ├── img/                   # Site images (hero, slides, logo, map marker)
    │   └── team/              # Team member photos
    └── php/
        └── form-process.php   # Server-side form handler (requires PHP host)
```

## Key Files to Edit

| File | Purpose |
|------|---------|
| `index.html` | All page content, structure, and section markup |
| `assets/css/main.css` | Primary visual styling and theming |
| `assets/css/responsive.css` | Responsive breakpoints (992px, 768px, 480px, 320px) |
| `assets/js/main.js` | Page behavior: preloader, sticky nav, countdown timer, scroll effects |
| `assets/js/map.js` | Google Maps location and styling configuration |

## Design Conventions

- **Color scheme:** Pink accent `#E91E63` on dark backgrounds
- **Typography:** `Montserrat` (headings, weight 500/700), `Open Sans` (body, weight 400)
- **Base font size:** 14px, line-height 25px
- **Responsive breakpoints:** 1199px, 991px, 767px, 480px, 320px
- **Animations:** WOW.js triggers Animate.css classes on scroll; `mobile: false` disables on mobile
- **Icons:** LineIcons font (referenced via `lni-` class prefix)

## Third-Party Libraries (Vendored)

All dependencies are committed directly as static files — there is no package manager.

| Library | File(s) | Purpose |
|---------|---------|---------|
| Bootstrap 4.x | `css/bootstrap.min.css`, `js/bootstrap.min.js` | Layout grid & components |
| jQuery | `js/jquery-min.js` | DOM manipulation |
| Popper.js | `js/popper.min.js` | Bootstrap tooltip/popover positioning |
| Animate.css | `css/animate.css` | CSS keyframe animations |
| WOW.js | `js/wow.js` | Scroll-triggered animation triggers |
| Vegas.js | `js/vegas.min.js`, `css/vegas.min.css` | Hero image slider |
| SlickNav | `js/jquery.slicknav.js`, `css/slicknav.css` | Mobile responsive menu |
| jQuery Countdown | `js/jquery.countdown.min.js` | Countdown timer widget |
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

**Note:** The PHP contact form (`assets/php/form-process.php`) does not function on GitHub Pages since it requires a PHP-capable server.

## Testing

There are no automated tests, testing frameworks, linters, or formatters configured.

## Known Issues & Caveats

- **Countdown timer** in `assets/js/main.js:34` is hardcoded to `2023/12/31` (expired). Update the date string to change the target.
- **Google Maps API key** is hardcoded in `index.html`. The key `AIzaSyAHBXD7TZUC8tEuXFrOSyxDeUo8hN8PtKM` is publicly exposed.
- **PHP form** won't process on GitHub Pages — it requires a PHP-capable hosting environment.
- **No dependency management** — library updates require manually replacing vendored files.

## Coding Conventions for AI Assistants

- This is a no-build static site. Do not introduce build tools, package managers, or transpilers unless explicitly requested.
- All JS uses jQuery patterns wrapped in an IIFE with `"use strict"`.
- CSS follows a flat structure — no preprocessor (SASS/LESS). Write plain CSS.
- Keep all assets in their respective `assets/` subdirectories.
- Third-party libraries are vendored (committed as static files), not installed via npm.
- The entire site is a single `index.html` — there are no routes or separate pages.
- When editing styles, check both `main.css` and `responsive.css` for the relevant selectors.
