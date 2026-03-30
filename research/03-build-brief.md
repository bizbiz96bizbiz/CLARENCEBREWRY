# Website Build Brief — The Old Clarence Brewery

## Design Direction

### Color Palette
| Token | Hex | Use |
|-------|-----|-----|
| --brown-deep | #3e2113 | Primary backgrounds, nav, footers |
| --brown-warm | #8f5520 | Section accents, borders, hover states |
| --blush | #d9c1c1 | Accent text, dividers, subtle highlights |
| --near-black | #0d0602 | Full-bleed dark hero sections |
| --cream | #f5efe8 | Light section backgrounds |
| --white | #ffffff | Text on dark, clean space |

### Typography
- **Display/Headings:** Calma (loaded from theoldclarencebrewery.com/wp-content/uploads/2023/10/calma.otf)
- **Body:** Cormorant Garamond (Google Fonts, 300/400/500) — shares heritage serif personality with Calma
- **Fallback:** Georgia, serif

### Photography Style
- Warm-toned, slightly desaturated — aged, timeless feel
- Tactile detail shots: timber grain, stone texture, cast-iron lacework, cellar brick
- Golden hour exterior shots of the arched entryway
- Wide architectural shots that show ceiling height and space
- Avoid: cold/bright modern photography, blue-toned edits

### Animation Philosophy
- Slow, cinematic reveals — nothing fast or snappy
- Text fades up with slight vertical drift (40px)
- Images fade in with subtle scale (1.03 → 1.0)
- Parallax on hero and full-bleed sections
- No animation on utility elements (nav, forms, buttons)

### What to AVOID (competitor mistakes)
- Generic "Book Now" buttons with no context
- Cold, overlit photography
- Trustpilot widget as the only social proof
- Empty booking pages with no room descriptions
- Mobile nav that breaks on small screens

---

## Site Architecture

| Page | Purpose | Primary CTA |
|------|---------|-------------|
| Home (index.html) | Brand statement + story hook | "Discover the Brewery" |
| History (history.html) | Full heritage narrative, timeline | "Plan Your Stay" |
| Stay (stay.html) | Room/space descriptions, features | "Reserve Your Dates" |
| Gallery (gallery.html) | Full image collection, masonry | "Check Availability" |
| Explore (explore.html) | Local area guide — Yamba, Angourie etc | "Book & Explore" |
| Contact (contact.html) | Enquiry form + map + email | Send message |

### Navigation
Home · History · Stay · Gallery · Explore · Contact
+ "Reserve" button (right-aligned, always visible)

---

## Homepage Section Structure

1. **Hero** — Full-screen, arched entryway image, Calma title "The Old Clarence Brewery", subtitle "C.1881 · Maclean, NSW", single CTA "Discover the Brewery"
2. **Nano Banana 3D Asset** — `<!-- NANO BANANA ASSET HERE -->` placeholder (800×600px)
3. **Brand Statement** — 2-sentence value prop with blush accent line
4. **Heritage Strip** — 5 feature icons: Established 1881 · Eight Cellars · Heritage Listed · Clarence River · Ceramic Custodians
5. **History Preview** — Left image (arched entryway), right: 3-line history pull quote, "Read the Full Story" link
6. **Feature Grid** — 3 heritage features (timber floors, cast-iron lacework, stone cellars) with detail photography
7. **Social Proof** — 3 guest pull-quotes on dark brown background
8. **Explore Teaser** — Full-width Yamba coastline image, "15 minutes to paradise" headline
9. **Reserve CTA** — Dark section: "Two nights minimum. Unique stays. Australian brewing history."
10. **Footer** — Logo, nav links, email, © 2024

---

## Headline Options (3 variations)

**Option A (Heritage Authority):**
> "Stay Inside Australia's Brewing History Since 1881"

**Option B (Sensory/Experiential):**
> "Original Stone Walls. Eight Underground Cellars. Your Next Weekend Away."

**Option C (Custodian Story):**
> "A 143-Year-Old Brewery. Restored With Care. Ready For You."

**Recommended: Option A** — matches the year-as-badge approach already in the brand name, consistent with how competitors like The Sir George lead with date authority.

---

## SEO Targets
- "heritage accommodation Maclean NSW"
- "boutique accommodation Yamba NSW"
- "historic stay Clarence River"
- "heritage B&B northern NSW coast"
- "unique accommodation near Yamba"

---

## Conversion Playbook
- **Primary goal:** Drive to BayBnB booking page
- **Secondary goal:** Email enquiry capture
- **Lead capture:** Email signup (Klaviyo already installed on current site)
- **Social proof:** Guest quotes + "As featured in" section (pursue Historic Stays listing)
- **Trust signals:** National Trust recognition, year established, custodian names/story
- **Urgency:** "Minimum 2 night stay" + availability calendar embed
