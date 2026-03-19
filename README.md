```
████████╗ ██████╗ ███╗   ███╗███╗   ███╗██╗   ██╗    ██╗  ██╗ ██████╗
╚══██╔══╝██╔═══██╗████╗ ████║████╗ ████║╚██╗ ██╔╝    ██║  ██║██╔═══██╗
   ██║   ██║   ██║██╔████╔██║██╔████╔██║ ╚████╔╝     ███████║██║   ██║
   ██║   ██║   ██║██║╚██╔╝██║██║╚██╔╝██║  ╚██╔╝      ██╔══██║██║   ██║
   ██║   ╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║   ██║       ██║  ██║╚██████╔╝
   ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝   ╚═╝       ╚═╝  ╚═╝ ╚═════╝
PLAYGROUND  ·  Portfolio & Experiments  ·  GitHub Pages
```

**[Visit Website](https://tommykho.github.io/about/)**

---

## What it does

A static single-page personal portfolio and playground site. Clean, minimal CV-style one-pager featuring a hero section with profile photo, an about section with skills grid, a playground showcasing projects, and a contact section with social links.

> No build tools. No package managers. Just HTML, CSS, and a little JavaScript.

## Quick start

```bash
# 1. Clone the repo
git clone https://github.com/tommykho/about.git
cd about

# 2. Serve locally
python3 -m http.server 8000

# 3. Open in browser
open http://localhost:8000
```

Or simply open `index.html` directly in your browser.

## Tech stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 — single `index.html` entry point |
| **Styles** | CSS3 — Bootstrap 4.x + custom stylesheets |
| **Scripts** | jQuery-based — no module bundler or transpiler |
| **Fonts** | Google Fonts (Montserrat, Open Sans) + LineIcons |
| **Animations** | AOS (Animate On Scroll) |
| **Hosting** | GitHub Pages — auto-deploys from `main` branch |

## Projects

| Project | Description | Stack |
|---------|-------------|-------|
| [**Personal Site**](https://github.com/tommykho/about) | This site — a static playground built with HTML, CSS, and JS | `HTML` `CSS` `JS` |
| [**Edge TTS**](https://github.com/tommykho/edgetts) | Windows desktop app for text-to-speech using Microsoft Edge's 400+ neural voices. Preview audio and export to MP3 — no Python required | `Python` `TTS` `Windows` |
| [**IOT Cookbook**](https://github.com/tommykho/IOT-cookbook) | Cut-and-paste Arduino C++ and MicroPython scripts for ESP32, ESP8266, and ATmega32u4 — GIF players, internet radios, animated eyes, ROM tools | `Arduino` `ESP32` `IoT` |

## Features

- **Dark / Light mode** — toggle with 🌞/🌛, persists via `localStorage`, respects OS preference
- **AOS scroll animations** — elements animate on scroll with staggered delays
- **Fully responsive** — breakpoints at 1199px, 991px, 767px, 480px
- **Zero dependencies** — all libraries vendored as static files

## Bugs and issues

Have a bug or an issue? [Open a new issue](https://github.com/tommykho/about/issues) here on GitHub.

## Creator

Created and maintained by **[Tommy Ho](mailto://tommyho510@gmail.com)**

## License

This code is released under [The GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
