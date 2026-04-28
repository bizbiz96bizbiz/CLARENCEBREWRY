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
| `index.html` | Homepage | Complete — Nano Banana placeholder remains; 3 real testimonials live |
| `history.html` | Heritage narrative & timeline | Complete |
| `stay.html` | Accommodation + booking | Complete |
| `gallery.html` | Masonry image gallery | Complete |
| `explore.html` | Local area guide | Complete |
| `contact.html` | Enquiry form + map | Complete — Formspree wired, Google Maps embed live |
| `404.html` | Custom error page | Complete |
| `terms.html` | Terms & Conditions | Complete |
| `privacy.html` | Privacy Policy | Complete |
| `sitemap.xml` | XML sitemap | Complete |
| `robots.txt` | Crawler rules | Complete — explicit allow rules for AI bots |
| `llms.txt` | AI crawler intro | Complete |

---

## Outstanding Code Tasks

Full list with context in `../launch/checklist.md`. Summary of what remains:

**Waiting on client:**
- All pages — `og:image` meta tag needs a 1200×630px image before social sharing works
- Schema — `checkInTime`, `checkOutTime`, `priceRange` still missing — confirm values with client

**Pick and implement:**
- Add analytics snippet (GA4 or Plausible) to all pages before `</body>`

**Already done (do not re-add):**
- Form endpoint: Formspree `maqapvvr` — live
- terms.html, privacy.html — exist and match site design
- Google Maps embed — live in contact.html
- 3 real testimonials — Sapna (RipaRide), Ian (Booking.com), John Doucas (Google)
- Copyright: © 2026 across all pages
- All images, fonts, favicons local — zero hotlinks
- Schema: streetAddress, postalCode, geo coordinates, telephone all present
- robots.txt: AI crawler directives for GPTBot, ClaudeBot, PerplexityBot, Amazonbot
- llms.txt: created at site root

---

## Assets — All Local (No Hotlinks)

All assets are now local. Zero dependency on the old WordPress site:

- **Images:** `assets/images/` — all photos downloaded and served locally
- **Font:** `assets/fonts/calma.otf` — `@font-face` and `<link rel="preload">` all point here
- **Favicons:** `assets/favicon-32x32.png` and `assets/apple-touch-icon.png` — all pages updated

---

## Copy & Tone

- Heritage-forward, warm, nostalgic — not generic hotel language
- CTAs: "Reserve Your Dates", "Discover the Brewery", "Read the Full Story" — never bare "Book Now"
- Booking always goes to: `https://book.baybnb.com.au/maclean/the-old-clarence-brewery/b85c39?number_of_guests=1`
- Minimum 2-night stay is always noted near booking CTAs
- Contact email: `stay@theoldclarencebrewery.com`
