# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Stack

HTML + CSS + GSAP 3 + ScrollTrigger (CDN). No framework, no build step, no package manager.

- Preview locally: `python3 -m http.server 8080` from this directory
- Single shared stylesheet: `css/styles.css`
- Single shared JS file: `js/main.js`
- All assets local: `assets/images/`, `assets/fonts/calma.otf`, `assets/favicon-32x32.png`

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

All animations via GSAP + ScrollTrigger in `js/main.js`.

- **`.reveal`** — fade up from `y:40, opacity:0` on scroll
- **`.reveal-image`** — fade in with subtle scale `1.03 → 1.0`
- **Parallax** — hero bg, explore teaser bg, page hero bg all use `gsap.to(el, { yPercent, scrollTrigger })`
- Always check `prefers-reduced-motion` at the top of every animation function — return early if true
- No fast/snappy animations. Duration minimum 0.9s, ease `power3.out` or `power4.out`

---

## Copy & Tone

- Heritage-forward, warm, nostalgic — not generic hotel language
- CTAs: "Reserve Your Dates", "Discover the Brewery", "Read the Full Story" — never bare "Book Now"
- Booking: `https://book.baybnb.com.au/maclean/the-old-clarence-brewery/b85c39?number_of_guests=1`
- Minimum 2-night stay is always noted near booking CTAs
- Contact email: `stay@theoldclarencebrewery.com`

---

## Outstanding Before Launch

- **OG image** — `<meta property="og:image">` tag exists on all pages but `content` is empty. Waiting on 1200×630px asset from client (Romy/Brad)
- **Analytics** — GA4 or Plausible snippet needed on all pages before `</body>`
- **Contact form** — `contact.html` form action is `mailto:` — replace with Formspree or similar before launch
- **DNS** — domain `theoldclarencebrewery.com` transfer via VentraIP in progress; once live, point to Vercel
