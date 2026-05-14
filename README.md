# Yi Chamber · yichamber.com

Static site. Five pages. Pure HTML + CSS + minimal vanilla JS.
No build step. No framework. No dependencies beyond Google Fonts.

## Files in this package

- **index.html** — main landing page (8 sections + Open Tiers + footer)
- **founder.html** — founder's letter (Concept Bible Part XI adapted)
- **apply.html** — full sales journey + 8-step application form
- **apply-thanks.html** — quiet confirmation page after submission
- **questions.html** — editorial-style FAQ (14 questions, 5 groups)

## Deployment to GitHub Pages

1. Unzip
2. Upload all five HTML files to `StevenAlber/yichamber` repository root
3. Keep existing `assets/images/*.webp` files in place
4. Commit. GitHub Pages will rebuild within ~1 minute.

All cross-page links are relative — no absolute URLs to update.

## The user flow

```
index.html (visitor reads the story)
    ↓
    ├── Council CTA       → apply.html (sales journey + form)
    │                          ↓
    │                       form submit → mailto: + apply-thanks.html
    │
    ├── Founder block     → founder.html (return → #council)
    │
    └── Footer / topbar   → questions.html (FAQ)
                               ↓
                            "Apply" CTA → apply.html
```

## What apply.html does

Five reading sections before the form:
1. **Threshold** — "The Council of Ten" + 10/10 seats pulse-dot badge
2. **Three Inheritances** — Yi Jing × Polyvagal × 2026 window
3. **The Council is the foundation** — what you actually join
4. **Patron / Founder / Co-Founder** — three tier cards, full benefits
5. **What we ask in return** — 5 asks (Presence, Patience, Discretion,
   Honesty, Trust) + "Yi Chamber is not for:" filter block

Then the 8-step form:
- A. Who you are (name, email, location, year, optional identity)
- B. What you do (work, income bracket, founder status)
- C. Why Yi Chamber (how heard, what touches you, Bible read)
- D. Your nervous system (state, practices, mental health history)
- E. The commitment (tier, payment, visa, expected sessions)
- F. Relational context (living, possible guest)
- G. The intangible (hope, what you bring)
- H. Confirmation + full review of answers

Form features:
- Auto-save to localStorage (key: `yc-application-v1`)
- "Saved" indicator that pulses and fades
- Progress bar (1/8 → 8/8) + percentage fill
- Field-level validation (won't advance with errors)
- Character counters on textareas
- Custom-styled radio/checkbox (no native ugly defaults)
- Smooth scroll-to-top on step change
- Auto-focus first field on new step
- Final review summary, grouped by section
- Cinnabar submit button (#8B2E1F) — the signature colour
- Submit opens user's mail client with prefilled email to
  inquire@yichamber.com, then redirects to apply-thanks.html
- Clears localStorage after successful submit

## What questions.html does

Fourteen questions in five groups, editorial style (no accordion).
Title: "Questions people ask · Honest answers, in the order they tend
to arrive."

- **The practice** (I, II, III) — what this is, what happens, belief
- **The commitment** (IV, V, VI) — Council vs. Open Tiers, travel, waitlist
- **The founder** (VII, VIII) — Steven Alber, team, advisors
- **The limits** (IX, X, XI) — science honesty, mental health, vs sound bath
- **The logistics** (XII, XIII, XIV) — opening date, payment/contracts, privacy

Closing CTA: "If your question is not here." → apply.html

## What apply-thanks.html does

Single quiet page:
- "Your application is on its way"
- "Thank you." (with italic emphasis on "you")
- Brass rule
- "Steven will read your application personally. Expect a reply within seven days."
- inquire@yichamber.com in brass-bordered box
- Fallback note for users whose mail client did not open
- 易室 cinnabar seal
- "Hoi An · MMXXVI"
- "Return to the Chamber" button → index.html

## Ideas integrated from IDEEDLAUD-MAAILMATIPP

- **#4** (anti-Instagram, private newsletter) — Q VI in questions.html mentions essays from the founder for waitlist members
- **#5** (waitlist as brand) — Q VI in questions.html names it explicitly; apply.html has visual "10 of 10 seats" badge
- **#11** (invisible advisors) — Q VIII in questions.html: "private conversation with internationally recognised figures... may or may not become public advisorships"
- **#12** (the one who must never come) — apply.html "Yi Chamber is not for:" block + Q VII "if you are looking for a guru, he is the wrong person"

Ideas explicitly deferred (require physical production, not web-buildable):
- #1 Bible printing · #2 ritual film · #3 Founders' Wall (physical)
- #6 Chinese translation · #7 sound archive · #8 founder practice
- #9 100-year frame document · #10 mini singing bowls per member

These are next-phase decisions after first Council seat sold.

## Index.html changes since last version

- Topbar "Inquire" → "Apply" (links to apply.html)
- Council CTA "Apply to the Council" — now links to apply.html (was #contact)
- Footer Membership column — added Apply to the Council + Questions
- Open Tiers section (Initiate/Pilgrim/Adept) remains as before
- Yi Bar text remains corrected (Bagua, 32 day teas / 32 evening preparations)
- All structure fixes from prior version retained

## Verification checklist

After deployment:
- [ ] index.html loads, all 7 topbar links work
- [ ] index.html "Apply to the Council" CTA → apply.html
- [ ] apply.html scrolls smoothly through reading sections
- [ ] apply.html form auto-saves (test by typing, closing tab, reopening)
- [ ] apply.html progress bar advances 1/8 → 8/8
- [ ] apply.html review summary shows all answers on step 8
- [ ] apply.html submit opens mail client with prefilled email
- [ ] apply-thanks.html displays after submit
- [ ] questions.html loads, all 14 questions visible
- [ ] questions.html "Apply to the Council" CTA → apply.html
- [ ] founder.html "Return to the Chamber" → index.html #council
- [ ] Mobile: all five pages stack correctly at 390px width
- [ ] inquire@yichamber.com mailto: works on all pages

## Tech stack (deliberately minimal)

- Pure HTML5 + CSS3 + vanilla JS
- Google Fonts: EB Garamond + IBM Plex Sans + Noto Serif TC
- No npm, no build tools, no framework, no external JS libraries
- localStorage for form persistence
- IntersectionObserver for reveal-on-scroll
- mailto: for form submission (no backend required)

When inbound flow grows beyond mailto: capacity, options are:
- Formspree.io (50 free submissions/month)
- Resend.com (€20/month, proper API)
- Self-hosted Cloudflare Worker → MailerLite

## Brand standards (preserved across all pages)

Colours:
- --ink: #1A1A1A (deep text, dark sections)
- --rice: #F4EFE6 (primary light background)
- --bone: #EDE7D9 (secondary light background)
- --brass: #9C7B3C (accent, italic emphasis, dividers)
- --cinnabar: #8B2E1F (signature — final CTA + 易室 seal only)
- --graphite: #3A3A3A (secondary text)
- --patina: #6B5D45 (meta text, footer)

Typography:
- Display: EB Garamond (headings, italic emphasis)
- Body: IBM Plex Sans (300 weight, generous line-height)
- CJK: Noto Serif TC (易室 and all Chinese characters)

Forbidden across all pages:
- Words: "ancient wisdom", "manifest", "vibrate higher", "transform"
- Imagery: lotus flowers, chakras, Buddha photographs, smiling spa women
- Fonts: Inter, Roboto, Arial, Helvetica
- Colours: purple, lavender, pastels
- Tone: corporate sales speak, urgency tactics, "exclusive community"

---

Hoi An · MMXXVI · 易室
