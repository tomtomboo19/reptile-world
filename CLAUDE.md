# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

REPTILE WORLD is a Japanese-language static HTML/CSS/JS information website for reptile enthusiasts. It has no build system, no package manager, and no backend — all data is hardcoded in the HTML files.

## Development

No build step required. Open any `.html` file directly in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

There are no lint, test, or CI commands.

## Architecture

### File Structure

- `index.html` — Homepage with hero, featured species, and stats
- `species.html` — Species/morph database with client-side filtering and modal
- `care.html` — Husbandry guides, breeding phases, disease database, equipment
- `community.html` — FAQ accordion, user post form, taxonomy tree
- `info.html` — Event calendar, shop locator (Google Maps), YouTube embeds, danger guide
- `style.css` — Shared design system (CSS variables, typography, layout primitives)
- `common.js` — Shared utility functions used across pages
- `img/` — 32 SVG reptile illustrations

### Data Layer

All data lives in two JavaScript arrays embedded in `species.html`:

- `SD` — Species database: name, Latin name, category, difficulty, stats, habitat, diet, tips, tags
- `MORPHS` — Morph/color variant database: name, genes, price, rarity, colors

No API or persistence layer exists. The post form in `community.html` is client-side only.

### Rendering Pattern

Pages that display dynamic content (primarily `species.html`) follow this pattern:

1. User interaction triggers a filter function (`setCat`, `setDiff`, search input)
2. Global state variables (`activeCat`, `activeDiff`) are updated
3. `renderGrid()` filters the `SD` array and writes cards via `innerHTML`
4. `openModal(id)` populates and shows the detail modal

### Design System

CSS variables are defined in `style.css` and used throughout all pages:

- Backgrounds: `--bg`, `--bg2`, `--bg3`, `--surface`
- Accents: `--accent` (primary green `#4caf50`), `--accent2`, `--accent3`
- Text: `--text`, `--text2`, `--text3`
- Semantic: `--gold`, `--red`

Fonts loaded from Google Fonts: **Bebas Neue** (headings), **Noto Sans JP** (body), **Space Mono** (labels).

Responsive breakpoints: `900px` (hamburger nav), `768px`, `600px`.

### External Services

- **Google Analytics**: GTM ID `G-NQVSG0XPLW` (in all pages)
- **Images**: Wikimedia Commons with `referrerpolicy="no-referrer"` and `loading="lazy"`
- **Maps**: Google Maps iframe embed in `info.html`
