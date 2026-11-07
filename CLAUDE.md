# CLAUDE.md

## Project Overview

This is a **static single-page personal portfolio/playground** website for GitHub Pages, created by Tommy Ho, hosted at https://tommykho.github.io/about/.

The site is a clean, minimal CV-style one-pager inspired by [Clint Balcom's portfolio](https://onepagelove.com/clint-balcom). It features a hero section with profile photo, an about section with skills, a playground/projects showcase, a "This & That" personality section, and a contact section. No build tools or package managers — all assets are static files served directly.

**License:** GNU General Public License v3.0

## Tech Stack

- **HTML5** — single `index.html` entry point
- **CSS3** — one hand-written stylesheet, `assets/css/about.css` (no framework)
- **JavaScript** — vanilla, `assets/js/about.js` (no jQuery, no bundler)
- **Fonts** — Google Fonts: Instrument Serif (display), Bricolage Grotesque (body), JetBrains Mono (labels), Shippori Mincho B1 (CJK)
- **Icons** — Font Awesome 6.4.0 via cdnjs

## Directory Structure

```
/
├── index.html            # The page
├── CLAUDE.md / README.md / LICENSE
└── assets/
    ├── css/about.css     # All styles: tokens, light/dark themes, sections, breakpoints
    ├── js/about.js       # Theme toggle, scroll reveals, active nav, hide-on-scroll bar
    ├── img/profile.png   # Portrait (arch frame in hero)
    └── mp4/              # Unused stock clip
```

The page also uses `../assets/images/hopbit-diecut.svg` from the root site (tommykho/tommykho.github.io).

## Page Sections

| Section | ID | Description |
|---------|----|-------------|
| Hero | `#hero` | Kinetic name, role, bio, CTAs, arch portrait with spinning badge |
| Ticker | — | Marquee of tools and skills |
| Story | `#story` | Bio + numbered skills list (Development, Engineering, Prototyping) |
| Now building | `#building` | Cards for Sun Tzu, Five Rings and Hopbit, each in its own palette |
| Playground | `#playground` | Project list rows (Edge TTS, IoT Cookbook, 3D viewer, D365 demos, this site) |
| This & That | `#facts` | 4 personality cards |
| Contact | `#contact` | Dark panel, email CTA, social links |
| Footer | `footer` | Copyright + links to Home and sister sites |

## Design Conventions

- **Themes:** light "paper" (`#f3efe6`) by default, dark "ink" (`#0f0e0c`). Follows `prefers-color-scheme`; the toggle stores `th-theme` in `localStorage` and sets `data-theme` on `<html>`.
- **Accent:** `#e2583a` (light) / `#ff7a52` (dark). Sister-site cards keep their own palettes (Sun Tzu ink + cinnabar, Five Rings lacquer + element colours, Hopbit navy on ice).
- **Motion:** CSS keyframes + IntersectionObserver reveals (`[data-reveal]` → `.is-in`). Everything respects `prefers-reduced-motion`.
- **Breakpoints:** 980px, 640px, 420px.

## Build & Development

**There is no build system.** Serve with any static server:

```bash
python3 -m http.server 8000
```

Deployed by GitHub Pages at https://tommykho.github.io/about/.

## Coding Conventions for AI Assistants

- No build tools, frameworks or jQuery. Plain HTML, CSS and vanilla JS.
- Keep colours as CSS custom properties in `:root`; define dark values in both the `[data-theme="dark"]` block and the `prefers-color-scheme` block.
- Keep the Hopbit book credit out of this page (the Hopbit site handles credits).
