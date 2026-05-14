# Yi Chamber · yichamber.com

Static site + Cloudflare Worker backend. Five pages.
Pure HTML + CSS + vanilla JS for the site.
Single-file Worker for the application backend.

## What's in this package

```
yichamber/
├── index.html              Main landing page (8 sections + Open Tiers + footer)
├── founder.html            Founder's letter (Concept Bible Part XI adapted)
├── apply.html              Sales journey + 8-step application form
├── apply-thanks.html       Confirmation page after submission
├── questions.html          14-question editorial-style FAQ
├── README.md               This file
└── worker/
    ├── worker.js           Cloudflare Worker source (handles form submissions)
    ├── wrangler.toml       Worker deployment configuration
    └── SETUP.md            Step-by-step backend setup instructions
```

## How the application flow works

1. Visitor reads `index.html` and clicks "Apply to the Council"
2. Visitor reads `apply.html` reading sections (Threshold, Three Inheritances,
   Council, Tiers, What we ask) — 5–10 minutes
3. Visitor fills 8-step application form — 20–30 minutes
4. Visitor clicks the cinnabar "Submit my application to the Council" button
5. Form sends a JSON POST to `https://api.yichamber.com/apply` (Worker)
6. Worker validates, then sends two emails via Resend.com:
   - **To inquire@yichamber.com** — full application in branded HTML
     (EB Garamond, brass palette, 易室 seal, structured sections)
   - **To the applicant** — quiet acknowledgement signed by Steven Alber
7. Visitor sees `apply-thanks.html` — confirmation page, brand-styled
8. Steven reads the inquire email and replies within seven days

**The applicant never sees an email composer, never sees ASCII text,
never sees telephone numbers turned into hyperlinks.** All they see is
the thanks page.

## Deployment

There are two things to deploy:

1. **Static HTML** (5 files) → GitHub Pages, as before
2. **Cloudflare Worker** → see `worker/SETUP.md` for detailed steps

You must do step 2 before step 1, because the form on apply.html points
at `https://api.yichamber.com/apply` and will fail with a fallback
message if the Worker is not yet live.

### Quick setup summary

The full instructions live in `worker/SETUP.md`. The short version:

1. **Resend.com**: sign up, verify yichamber.com (3 DNS records), copy API key
2. **Cloudflare**: install `wrangler`, `wrangler login`, `wrangler deploy`,
   set `RESEND_API_KEY` as secret, configure route `api.yichamber.com/*`
3. **GitHub Pages**: upload all 5 HTML files

Test by visiting `https://api.yichamber.com/health` — should return
`{"ok":true,"service":"yi-chamber-apply"}`.

Then submit a test application from `https://yichamber.com/apply` to
verify the full round-trip works.

## Cost

- **Cloudflare Workers**: 100,000 requests/month free, then $5/month
- **Resend.com**: 3,000 emails/month free, then $20/month for 50,000
- **GitHub Pages**: free
- **DNS / domain**: already yours

For the first 1,000 applications, total cost is **€0**.

## What apply.html does in detail

**Five reading sections before the form:**

1. **Threshold** — "The Council of Ten" + 10/10 seats pulse-dot badge
2. **Three Inheritances** — Yi Jing × Polyvagal × 2026 window
3. **The Council is the foundation** — what you actually join
4. **Patron / Founder / Co-Founder** — three tier cards with full benefits
5. **What we ask in return** — 5 asks + "Yi Chamber is not for:" filter

**Then the 8-step form:**

- A. Who you are (name, email, location, year, optional identity)
- B. What you do (work, income bracket, founder status)
- C. Why Yi Chamber (how heard, what touches you, Bible read)
- D. Your nervous system (state, practices, mental health history)
- E. The commitment (tier, payment, visa, expected sessions)
- F. Relational context (living, possible guest)
- G. The intangible (hope, what you bring)
- H. Confirmation + full review of answers

**Form features:**

- Auto-save to `localStorage` (key: `yc-application-v1`)
- "Saved" indicator that pulses and fades after each change
- Progress bar (1/8 → 8/8) + percentage fill
- Field-level validation (won't advance with errors)
- Character counters on textareas
- Custom-styled radio/checkbox (no native browser defaults)
- Smooth scroll-to-top on step change
- Auto-focus first field on new step
- Final review summary, grouped by section
- Cinnabar submit button (#8B2E1F) — the signature colour
- **Backend submission** — no mailto, no email client opens
- If submission fails (network, server down) — applicant sees an
  inline error and is asked to email inquire@yichamber.com directly.
  Draft remains saved in localStorage.

## What questions.html does

Fourteen questions in five groups, editorial style (no accordion).
Title: "Questions people ask · Honest answers, in the order they tend
to arrive."

- **The practice** (I, II, III) — what this is, what happens, belief
- **The commitment** (IV, V, VI) — Council vs. Open Tiers, travel, waitlist
- **The founder** (VII, VIII) — Steven Alber, team, advisors
- **The limits** (IX, X, XI) — science honesty, mental health, vs sound bath
- **The logistics** (XII, XIII, XIV) — opening, payment/contracts, privacy

Closing CTA: "If your question is not here." → apply.html

## What apply-thanks.html does

Single quiet page after submission:

- "Your application is on its way"
- "Thank you." (italic emphasis on "you")
- Brass rule
- "Steven will read your application personally. Expect a reply within seven days."
- inquire@yichamber.com in brass-bordered box
- 易室 cinnabar seal
- "Hoi An · MMXXVI"
- "Return to the Chamber" button → index.html

## Ideas integrated from IDEEDLAUD-MAAILMATIPP

- **#4** (anti-Instagram, private newsletter) — Q VI in questions.html
- **#5** (waitlist as brand) — Q VI in questions.html; apply.html "10 of 10 seats" badge
- **#11** (invisible advisors) — Q VIII in questions.html
- **#12** (the one who must never come) — apply.html filter block + Q VII

Ideas explicitly deferred (require physical production, not web-buildable):
- #1 Bible printing · #2 ritual film · #3 Founders' Wall (physical)
- #6 Chinese translation · #7 sound archive · #8 founder practice
- #9 100-year frame document · #10 mini singing bowls per member

## Verification checklist

After deployment of both static site and Worker:

- [ ] index.html loads, all 7 topbar links work
- [ ] index.html "Apply to the Council" CTA → apply.html
- [ ] apply.html scrolls smoothly through 5 reading sections
- [ ] apply.html form auto-saves (type, close tab, reopen — draft restored)
- [ ] apply.html progress bar advances 1/8 → 8/8
- [ ] apply.html review summary shows all answers on step 8
- [ ] apply.html submit button shows "Sending..." then redirects
- [ ] apply-thanks.html displays after successful submission
- [ ] Inquire email arrives in inbox (branded HTML)
- [ ] Acknowledgement email arrives in test applicant inbox
- [ ] api.yichamber.com/health returns ok
- [ ] If Worker goes down, applicant sees fallback error message
- [ ] questions.html loads, all 14 questions visible
- [ ] questions.html "Apply" CTA → apply.html
- [ ] founder.html "Return to the Chamber" → index.html
- [ ] Mobile: all five pages stack correctly at 390px width

## Tech stack

**Front end** (deliberately minimal):
- Pure HTML5 + CSS3 + vanilla JS
- Google Fonts: EB Garamond + IBM Plex Sans + Noto Serif TC
- localStorage for form persistence
- IntersectionObserver for reveal-on-scroll
- No npm, no build tools, no framework, no external JS libraries

**Backend** (single file):
- Cloudflare Worker (one .js file, no dependencies)
- Resend.com for email delivery
- HTML email templates inlined in Worker

## Brand standards (preserved across all pages and emails)

Colours:
- `--ink: #1A1A1A` (deep text, dark sections)
- `--rice: #F4EFE6` (primary light background)
- `--bone: #EDE7D9` (secondary light background)
- `--brass: #9C7B3C` (accent, italic emphasis, dividers)
- `--cinnabar: #8B2E1F` (signature — final CTA + 易室 seal only)
- `--graphite: #3A3A3A` (secondary text)
- `--patina: #6B5D45` (meta text, footer)

Typography:
- Display: EB Garamond (headings, italic emphasis)
- Body: IBM Plex Sans (300 weight, generous line-height)
- CJK: Noto Serif TC (易室 and all Chinese characters)

Forbidden across all surfaces:
- Words: "ancient wisdom", "manifest", "vibrate higher", "transform"
- Imagery: lotus flowers, chakras, Buddha photographs, smiling spa women
- Fonts: Inter, Roboto, Arial, Helvetica
- Colours: purple, lavender, pastels
- Tone: corporate sales speak, urgency tactics, "exclusive community"

---

Hoi An · MMXXVI · 易室
