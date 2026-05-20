# KeenDwell — Branding Rollout Plan

> **From:** SmartBuildTech (working title, never launched publicly)
> **To:** KeenDwell — engineering studio for remote smart-home + custom software
> **Last updated:** 2026-05-15

This is the operational checklist to take the new name live, in priority order. Group by phase; each phase has a clear unblock condition for the next.

---

## Phase 0 — Lock & defend (this week)

**Goal:** Prevent name loss, set foundations.

- [ ] **Domains** — verify `keendwell.com` DNS pointing to GitHub Pages
- [ ] **Defensive domains** — grab `.engineering`, `.io`, `.studio`, `.design`, `.app` for `keendwell` (~$200/yr total)
- [ ] **Social handles** — reserve on X, Instagram, LinkedIn (company page), GitHub (org), Behance, Dribbble. Even if dormant, claim them.
- [ ] **Resend domain verification** — verify `keendwell.com` in Resend; update backend to send from `studio@keendwell.com` or `hello@keendwell.com`. Unblocks all transactional email. **Highest deliverability impact for lowest cost.**
- [ ] **TM attorney engagement** — engage US TM attorney for class 42 clearance + opinion letter. Budget $400–$800.
- [ ] **Cal.com** — rename slug `time-reserving` → `intro-call` or `discovery`. Update embed URL on landing.

**Unblock for Phase 1:** Domain verified in Resend (email working), social handles claimed.

---

## Phase 1 — Brand kit (this week + next)

**Goal:** Have a coherent brand kit that every downstream artefact (site, email, deck, contracts) draws from.

### 1.1 Wordmark — pick one

From `Wordmark Exploration.html`, pick one **primary lockup** + one **monogram (KD)**. The lockup is for the nav and footer. The monogram is for favicon, app icon, social avatar, drafting stamps.

- [ ] Hold a single decision call (you + me) to pick from the 6 directions
- [ ] Export final wordmark as SVG (vector, no rasterisation) — multiple sizes
- [ ] Export KD monogram as SVG + 512×512 PNG (for social avatar)
- [ ] Lock the typeface decision; document in `BRAND_KEENDWELL.md` §3

### 1.2 Existing amber symbol — keep

- [ ] **DO NOT TOUCH** `LOGO/logo-dark.png`. Existing user instruction (see `memory/feedback_use_existing_assets.md`).
- [ ] Document the official lockup of symbol + wordmark: spacing, alignment, minimum size, clear-space rules

### 1.3 Color tokens — already locked

From `Actual DOCS/CLAUDE.md` (ADR-008):
- `--bg: #0c0c0e`
- `--surface: #16161a`
- `--surface-2: #1e1e24`
- `--accent: #EEB825`
- `--accent-2: #F5C842`
- `--accent-glow: rgba(238,184,37,0.14)`

Add for KeenDwell brand kit:
- `--text: #F5F2EC` (warm off-white)
- `--text-muted: rgba(245,242,236,0.65)`
- `--text-faint: rgba(245,242,236,0.45)`
- `--rule: rgba(245,242,236,0.10)` (dividers)
- *(optional secondary accent — only if final tagline needs it)*

### 1.4 Type system

Per `BRAND_KEENDWELL.md` §3 — final wordmark typeface drives this. Tentative:
- **Display / hero:** TBD from wordmark exploration (likely Manrope, Space Grotesk, or Instrument Serif)
- **Body:** Inter (already in production per CLAUDE.md; keeping)
- **Mono (engineering register):** IBM Plex Mono — for case study stats, technical specs, version numbers

### 1.5 Voice & tone — see `BRAND_KEENDWELL.md` §5

- [ ] One-page voice cheat sheet (do/don't, vocabulary anchors) — print and pin
- [ ] Rewrite hero, services, and CTA copy against the cheat sheet
- [ ] Define ICP statement (closes §5.4 critique in PROJECT_BRIEF)

**Unblock for Phase 2:** Wordmark + monogram exported, voice cheat sheet drafted, ICP statement written.

---

## Phase 2 — Site relaunch (next 2 weeks)

**Goal:** Production landing reflects the KeenDwell brand and addresses the §5 marketing critique from `PROJECT_BRIEF.md`.

### 2.1 Critical critique fixes (§5 of brief)

- [ ] **Hero consolidation** — V3 only. Delete `01/02/03` switcher. (§5.1)
- [ ] **CTA rewrite** — replace "Tell me more" with benefit-CTA. Strongest single change. Options:
  - *"Plan my home — free 30 min"*
  - *"Book a discovery call"*
  - *"Get a remote audit"*
  Pick one. A/B optional later. (§5.2)
- [ ] **Headline rewrite** — concrete outcome + ICP + how. Drop "A home that thinks for you". Replace with structure:
  - *"Smart-home engineering, delivered remotely — anywhere, no site visit."* (functional)
  - *"Sharp homes. Quietly engineered."* (tagline-led)
  - *"Premium smart-home design, programmed over Zoom. 18 countries delivered."* (proof-led)
  (§5.3)
- [ ] **ICP** — pick primary (homeowner mid-build vs architect/specifier vs existing-system owner). Site speaks to ONE; secondary audiences get sub-sections. (§5.4)
- [ ] **Trust signals** — add: 1 anonymised case stat (e.g. *"KNX project · 280 m² · Berlin · 3 weeks · €4,200"*), KNX Partner / Loxone Gold certifications if held, 1 testimonial (real, with face+name+attribution). (§5.5)

### 2.2 Structural gaps (§5.6–10)

- [ ] **Why** section — add. 3-col `.diff-item` grid: *Remote-first / Multi-system fluency / Engineering rigour*.
- [ ] **Cases** section — add at least one anonymised case study with concrete numbers (system, sq.m., country, timeline, price-range).
- [ ] **Tech** section — add. Show the 5 supported systems (KNX, BACnet, Loxone, Home Assistant, Siemens LOGO) with logos or wordmarks if licensable. (§5.6)
- [ ] **FAQ** section — add. 6–10 questions answering the actual objections of a remote engagement: *"How do you commission without being on site?" "Who installs the hardware?" "What if something breaks after delivery?" "Do you work with my country's regulations?" "How is pricing structured?"* (§5.6)
- [ ] **Process** — replace generic 4-step with the actual KeenDwell process: *video site survey → topology + BOM in 5 days → remote programming via VPN / on-site installer hands → Zoom commissioning → handover + 90-day support window*. (§5.9)
- [ ] **Remote angle** — pull into H1 with one metric. (§5.7)
- [ ] **AI integration** — decide: feature in hero (commit) or remove from services entirely. **Recommend: commit** — frame as "predictive control, intelligent scheduling, voice-first dashboards". (§5.8)
- [ ] **Pricing** — remove "from $500". Replace with typical-project range per practice: *"Smart-home projects typically EUR 3k–25k depending on size and integration depth"* + *"Software projects scoped per discovery call"*. (§5.10)

### 2.3 Contact / form (§5.11–13)

- [ ] **Reduce to one primary CTA** in the modal — Cal.com discovery call. Demote message form and email contact to small secondary options. (§5.11)
- [ ] **Resend domain verified** — sender becomes `studio@keendwell.com`. (§5.12, Phase 0)
- [ ] **Cal.com slug renamed.** (§5.13, Phase 0)

### 2.4 Brand application

- [ ] Replace every "SmartBuildTech" string in `index.html` with "KeenDwell"
- [ ] Replace meta tags: `<title>`, `<meta name="description">`, OpenGraph, Twitter card
- [ ] Update favicon → KD monogram
- [ ] Update OG image — 1200×630 PNG with wordmark + tagline
- [ ] Footer wordmark + copyright line: `© 2026 KeenDwell. Remote engineering studio.`

**Unblock for Phase 3:** Landing live on `keendwell.com` with KeenDwell branding, contact modal works, email delivers from `@keendwell.com`.

---

## Phase 3 — Outbound surfaces (weeks 3–4)

**Goal:** Anywhere we communicate, the brand shows up consistently.

### 3.1 Email

- [ ] Sender: `studio@keendwell.com` (transactional from Resend)
- [ ] Personal sender: `dmitry@keendwell.com` (Google Workspace or Resend custom)
- [ ] HTML signature template — wordmark + role + cal.com link + LinkedIn + GitHub org
- [ ] Auto-reply on contact form submission — branded, sets expectation ("we reply within 24h on EU working days")

### 3.2 Cal.com

- [ ] Event page branding — use KeenDwell color + logo header
- [ ] Slug renamed (`discovery` or `intro-call`)
- [ ] Confirmation email template — branded
- [ ] Reschedule / cancel page — branded

### 3.3 Social presence (minimal viable)

- [ ] LinkedIn company page — full setup with About, banner image (1584×396), wordmark logo (300×300)
- [ ] GitHub org `keendwell` — README front page with one-liner pitch + link to site
- [ ] Instagram + X — placeholder bio + link to site (no content commitment yet — claim handles first)

### 3.4 Document templates

- [ ] **Proposal template** (PDF/web) — branded header, KD monogram, tagline strip, structured sections (scope, BOM, timeline, price range, terms)
- [ ] **Case study template** — single page format, KeenDwell branded
- [ ] **NDA template** — KeenDwell letterhead
- [ ] **Invoice template** — match proposal style

---

## Phase 4 — SEO & visibility (weeks 4–6)

**Goal:** Pickable by the actual searches happening (§5.15 of brief).

- [ ] **Landing-page SEO** — title, meta description, h1, structured data (JSON-LD `LocalBusiness` + `ProfessionalService`)
- [ ] **Intent-keyword landing pages** (sub-pages of `keendwell.com`):
  - `/knx-programming-remote` — "KNX programming without site visit"
  - `/loxone-online-consultant`
  - `/home-assistant-engineering`
  - `/smart-home-design-remote`
- [ ] **Sitemap.xml** + robots.txt + Google Search Console verification
- [ ] **One long-form article** to seed authority — e.g. *"What a remote smart-home commissioning actually looks like"*
- [ ] **Backlinks** — submit to: KNX Partner directory (if certified), Loxone Partner directory, GitHub awesome lists for HA, relevant subreddit AMAs

---

## Phase 5 — Case-study production (ongoing)

**Goal:** Replace abstract "60+ projects · 98% happy" stats with proof.

- [ ] **Anonymised case template** — 1 page, structured: System / Country / Size / Timeline / Price range / Key challenge / What we did
- [ ] **Publish first 3 cases** within 6 weeks of relaunch
- [ ] **Ask for one quotable testimonial per project** going forward (face + name + role, with permission)
- [ ] **Photo/video** — if a client allows, capture 1–2 clean dashboard / app screenshots + 1 photo of installed touch panel. Real visuals trump 3D renders.

---

## Phase 6 — Measurement & iteration

**Goal:** Know what's working.

- [ ] **Plausible or simple GA4 setup** — privacy-respectful
- [ ] **Cal.com booking funnel** — count discovery calls booked vs landing visits
- [ ] **Contact form completion rate** — Resend logs + form events
- [ ] **Monthly review** — short doc, what shipped, what converted, what to change

---

## Budget summary (one-time setup, USD)

| Item | Cost |
|---|---|
| Defensive domains (5 TLDs × 1yr) | $100–$200 |
| TM attorney opinion letter (US, class 42) | $400–$800 |
| US TM filing (class 9 + class 42) | $700 + $200–$500 attorney prep |
| EU TM filing (EUIPO, class 9 + class 42) | €1,050 (~$1,150) |
| Resend (already running) | $0 — within free tier |
| Google Workspace (1 seat) | $7/mo |
| Plausible Analytics | $9/mo |
| **One-time total (US + EU TM):** | **~$2,400–$3,000** |
| **Ongoing:** | **~$20/mo** |

Phase 0 alone (domains + social + Resend + Cal.com rename) can be done in a day at near-zero cost.

---

## Critical path

If everything else slips, these three unblock the most value:

1. **Resend domain verification** — fixes deliverability today (currently 30–50% of email goes to spam from `@resend.dev`)
2. **Hero + CTA rewrite on the live site** — single biggest conversion lever per §5 critique
3. **Wordmark decision** — unblocks favicon, OG image, social avatars, every visible brand surface

Everything else can ladder behind these three.
