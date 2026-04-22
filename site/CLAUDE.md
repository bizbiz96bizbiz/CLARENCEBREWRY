# CLAUDE.md — The Old Clarence Brewery Website

This file provides guidance to Claude Code (claude.ai/code) when working on the website in this directory.

**Workflow reference:** `/Users/hunterhunter/Desktop/Saltwater AI/Saltwater Workflow/workflows/website-development.md`

All 5 phases of the website development workflow are complete. The site is production-ready but not yet deployed.

---

## Stack

HTML + CSS + GSAP 3 + ScrollTrigger (CDN). No framework, no build step, no package manager.

- Open any page directly in a browser, or: `python3 -m http.server 8080` from this directory
- Single shared stylesheet: `css/styles.css`
- Single shared JS file: `js/main.js`
- Images: `assets/images/` (local) — see hotlink warning below

---

## Design Tokens

Defined in `css/styles.css :root` — always use these, never hardcode hex values:

| Token | Hex | Use |
|---|---|---|
| `--brown-deep` | `#3e2113` | Primary BG — nav, footers, dark sections |
| `--brown-warm` | `#8f5520` | Accents, borders, hover states |
| `--blush` | `#d9c1c1` | CTA buttons, dividers, accent text |
| `--near-black` | `#0d0602` | Full-bleed hero sections |
| `--cream` | `#f5efe8` | Light section backgrounds |
| `--white` | `#ffffff` | Text on dark backgrounds |
| `--ease-silk` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | All transitions |

**Fonts:**
- Display/headings: `var(--font-display)` → Calma → Cormorant Garamond → Georgia
- Body: `var(--font-body)` → Cormorant Garamond → Georgia

---

## Animation Rules

All animations are in `js/main.js` via GSAP + ScrollTrigger.

- **`.reveal`** — fade up from `y:40, opacity:0` on scroll. Add this class to any new text element that should animate in
- **`.reveal-image`** — fade in with subtle scale `1.03 → 1.0`. Use on `<img>` and image wrappers
- **Parallax** — hero bg, explore teaser bg, and page hero bg all have ScrollTrigger parallax. Use `gsap.to(el, { yPercent, scrollTrigger })` pattern
- **Always respect `prefers-reduced-motion`** — check at the top of every new animation function: `if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;`
- No fast/snappy animations. Duration minimum 0.9s, ease `power3.out` or `power4.out`

---

## Site Pages

| File | Page | Status |
|---|---|---|
| `index.html` | Homepage | Complete — has Nano Banana placeholder and sample testimonials |
| `history.html` | Heritage narrative & timeline | Complete |
| `stay.html` | Accommodation + booking | Complete |
| `gallery.html` | Masonry image gallery | Complete |
| `explore.html` | Local area guide | Complete |
| `contact.html` | Enquiry form + map | Complete — form and map are placeholders |
| `404.html` | Custom error page | Complete |
| `sitemap.xml` | XML sitemap | Complete |
| `robots.txt` | Crawler rules | Complete |

---

## Outstanding Code Tasks

These need to be done before launch — full list with context in `../launch/checklist.md`:

**Critical:**
- `contact.html` — form `action="mailto:..."` must be replaced with Formspree or Netlify Forms endpoint
- Create `terms.html` and `privacy.html` — footer links to these on every page and they don't exist

**High:**
- `contact.html` — replace map placeholder div with real Google Maps iframe
- `index.html` — replace 3 sample testimonials with real guest quotes
- All pages — update `© 2024` to `© 2025` in footer
- Migrate hotlinked images off `theoldclarencebrewery.com` into `assets/images/`
- Download favicon, apple-touch-icon, and `calma.otf` to local — update all `<link>` hrefs and `@font-face` src

**Medium:**
- All pages — add `<meta property="og:image" content="...">` (tag exists but content is empty)
- `index.html` — replace `<!-- NANO BANANA ASSET HERE -->` placeholder (800×600px)
- Add analytics snippet (GA4 or Plausible) to all pages before `</body>`

---

## Hotlinked Assets Warning

These are loading from `theoldclarencebrewery.com` (the client's old WordPress). If that domain lapses, they break:

**Images to download and move to `assets/images/`:**
- `index.html`: history preview photo, all 3 feature card photos
- `history.html`: 1881 photo, 1902 photo, 1970s restoration photo, page hero background
- `explore.html`: page hero background, Yamba detail photo, Angourie detail photo

**Font to move to `assets/fonts/`:**
- `calma.otf` — update `@font-face` src in `css/styles.css` and `<link rel="preload">` in all `<head>` sections

**Favicons to move to `assets/`:**
- `cropped-icon-32x32.png` and `cropped-icon-180x180.png` — update `<link rel="icon">` in all pages

---

## Copy & Tone

- Heritage-forward, warm, nostalgic — not generic hotel language
- CTAs: "Reserve Your Dates", "Discover the Brewery", "Read the Full Story" — never bare "Book Now"
- Booking always goes to: `https://book.baybnb.com.au/maclean/the-old-clarence-brewery/b85c39?number_of_guests=1`
- Minimum 2-night stay is always noted near booking CTAs
- Contact email: `stay@theoldclarencebrewery.com`
