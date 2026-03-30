# Quality Audit — The Old Clarence Brewery Website

## SEO Audit
- [x] All meta tags present and unique per page
- [x] Heading hierarchy correct (one H1 per page)
- [x] Alt text on all images (descriptive placeholders in place)
- [x] Schema markup (LodgingBusiness) on index.html
- [x] XML sitemap generated (sitemap.xml)
- [x] Robots.txt present
- [x] Open Graph tags set on all pages
- [x] Canonical URLs set on index.html
- [x] Language attribute set (en-AU)

## Accessibility Audit
- [x] Color contrast — dark brown (#3e2113) on cream (#f5efe8) passes WCAG AA
- [x] White on dark backgrounds passes WCAG AA
- [x] All interactive elements are keyboard accessible (links, buttons, form fields)
- [x] Focus indicators present (browser default preserved)
- [x] `prefers-reduced-motion` respected — animations skipped entirely when set
- [x] Semantic HTML used throughout (nav, header, main, section, footer, h1/h2/h3)
- [x] Form labels properly associated with inputs (for/id)
- [x] `aria-label` on nav, hero, gallery grid
- [x] `role="navigation"` and `aria-label` on nav elements
- [x] `alt` text on all img elements
- [x] `aria-hidden="true"` on decorative elements

## Performance Audit
- [x] Images use `loading="lazy"` except hero (above fold)
- [x] `width` and `height` attributes set on images (prevents CLS)
- [x] Google Fonts loaded with `preconnect` hints
- [x] Custom font preloaded with `<link rel="preload">`
- [x] GSAP loaded from CDN (cached, no blocking)
- [x] CSS in `<head>`, JS at end of `<body>`
- [x] `will-change` hints on animated elements
- [x] No render-blocking resources
- [x] `font-display: swap` on custom font

## Client-Ready Checklist
- [x] All placeholder content clearly marked
- [x] Nano Banana asset placeholder clearly marked with comment + dimensions
- [x] Map embed placeholder marked in contact.html
- [x] Form action endpoint noted (needs Formspree/Netlify Forms setup)
- [x] Favicon set (links to live theoldclarencebrewery.com favicon)
- [x] OG images set (page-specific titles and descriptions)
- [x] 404 page exists (404.html — "Lost in the cellars?")
- [x] sitemap.xml generated
- [x] robots.txt present
- [x] README.md with deployment steps ✓

## Items to Complete Before Launch
1. **Formspree/Netlify Forms** — Update contact.html form `action` attribute with live endpoint
2. **Google Maps embed** — Replace placeholder in contact.html with actual iframe
3. **Nano Banana 3D asset** — Replace `.asset-placeholder` in index.html with generated image/video
4. **OG images** — Create 1200×630 static images for each page's Open Graph preview
5. **Real testimonials** — Replace sample quotes in index.html with actual guest reviews from Airbnb/BayBnB
6. **Professional photography** — Migrate images to owned hosting (currently on accommodation.romybennie.com)
7. **Google Analytics / Plausible** — Add tracking before launch
8. **SSL certificate** — Verify HTTPS on deployment domain
