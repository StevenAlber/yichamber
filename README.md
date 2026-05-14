# Yi Chamber · yichamber.com

Static site. Two pages. Pure HTML + CSS + minimal vanilla JS.
No build step. No framework. No dependencies beyond Google Fonts.

## Files in this package

- **index.html** — main landing page (8 sections + Open Tiers section + footer)
- **founder.html** — founder's letter, linked from main page closing block

## Deployment to GitHub Pages

1. Replace existing `index.html` in `StevenAlber/yichamber` repository
2. Add new `founder.html` alongside
3. Commit. GitHub Pages will rebuild within ~1 minute.

The existing `assets/images/*.webp` files remain untouched — all image
references point to the same paths as before.

## What changed in this version

### Critical fixes
- HTML structure bug: misplaced `</main>` tag relocated to correct
  position (was after hero center, should be before footer)
- Topbar dark/light detection now reads computed background luminance
  rather than class names (handles gradient sections correctly)

### Doctrine alignment with the Concept Bible
- Yi Bar (Section V) text rewritten: removed the "five tastes / five
  elements" framing (which is Wu Xing, not the Bagua) and replaced
  with the trigram-based description and the 32 day teas + 32 evening
  preparations split from the Concept Bible Part VIII
- Hero statement: removed redundant "in the world" superlative
- Topbar navigation now includes The Ritual and The Bar (were missing)

### New content
- New section: **The Open Tiers** (Initiate · Pilgrim · Adept) inserted
  between Council of Ten and Closing — gives non-Council visitors a
  visible path to membership at €1,800 / €4,500 / €9,800 per year
- New page: **founder.html** — full founder's letter (Concept Bible
  Part XI, lightly adapted for the website)
- Section 8 now carries a two-sentence founder context block and a
  link to the full letter

### Technical / SEO improvements
- Full Open Graph + Twitter Card meta tag suite
- Schema.org JSON-LD Organization markup
- Theme color, robots, keywords, author meta
- Footer restructured (3 columns: Brand · The Chamber · Membership)
  with 易室 seal in bottom right
- Mobile nav now has two breakpoints (920px tablet, 720px phone) to
  handle the seven-item navigation gracefully

### Untouched
- Visual identity: palette, typography, animations
- All existing image references (assets/images/*.webp)
- Hero remains image-free per current direction
- Reveal-on-scroll JavaScript
- All 64 bowl colors and hexagram structure

## Verification checklist

After deployment, verify:
- [ ] index.html loads and hero displays
- [ ] All seven topbar links scroll to correct sections
- [ ] Bowl images load (existing files in assets/images/)
- [ ] "Apply to the Council" CTA works
- [ ] Open Tiers section displays with three tier cards
- [ ] founder.html loads via link from closing section
- [ ] founder.html "Return to the Chamber" goes back to #council
- [ ] Mobile view: topbar collapses to 3 items, layout stacks
- [ ] inquire@yichamber.com mailto opens email client

---

Hoi An · MMXXVI
