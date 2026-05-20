> **ARCHIVED 2026-05-20 (v1.0)**
> Original path: `PROJECT_BRIEF.md` (repo root).
> Reason: рабочее имя "SmartBuildTech" заменено на финальный бренд **KEEN·DWELL** (см. ADR-013).
> Актуальное состояние проекта поддерживается в `Actual DOCS/CLAUDE.md` (v1.2.0+) и `Actual DOCS/DECISION_LOG.md`.
> Этот файл оставлен для исторического контекста: нейминговая воронка (§6), маркетинговая критика прода (§5), голос и фидбек-паттерны пользователя (§7).

---

# SmartBuildTech (working title) — Project brief & handoff

> **Purpose of this doc:** carry every meaningful decision, constraint, and open question from previous chat sessions into the next one. Read it top-to-bottom before doing anything.

> **Current date of writing:** 2026-05-15
> **Repo:** `ddl-lsm/Lending` (GitHub), default branch `main`
> **Live site:** https://ddl-lsm.github.io/Lending/
> **Status:** Working title "SmartBuildTech" is being **replaced**. New brand name still being chosen.

---

## 1. The business — what we actually sell

A **remote engineering studio**. Everything is delivered without on-site visits, anywhere in the world.

Two practices, one team:

### Practice A — Smart-home engineering (remote)
- Full project design over Zoom + cloud
- Programming and commissioning of installed systems
- Voice & app integrations, dashboards, scenes
- Local installer wires hardware — we make it work

### Practice B — Custom software development
- Mobile, web, cross-platform apps
- Storage & search systems
- Event management systems
- AI integration (LLMs, predictive control, intelligent automation)
- Software adjacent to smart-home practice + standalone projects

### Supported smart-home systems (5)
**KNX · BACnet · Loxone · Home Assistant · Siemens LOGO**

### Target market
- **Global, English-first.** US / UK / EU primary. Russian deferred.
- Premium-leaning. Homeowners, architects, owners of in-progress builds.
- ICP still **not crystallised** — flagged as a marketing weakness (see §5).

---

## 2. Where we are right now

### Tech stack (current production)
- Vanilla HTML/CSS/JS in a **single self-contained `index.html`**
- React 18 + Babel standalone loaded from CDN inline (no npm, no build)
- Google Fonts: **Inter** (per CLAUDE.md). Earlier draft used Geist — superseded.
- Auto-deploy via GitHub Actions → GitHub Pages
- Cal.com public booking via iframe (`cal.com/dmitrydm/time-reserving` — slug to be renamed per §5)
- FastAPI + Resend backend on OCI, `https://book.daria.style/api/contact` — accepts contact form, sends notification to `ddl.lsm@gmail.com`. **Currently sending from `onboarding@resend.dev`** — domain `daria.style` not verified yet (priority fix, see §5).

### Page structure (intended, per CLAUDE.md)
Nav → Hero → Why (differentiators) → Services → Process → Cases → Tech → FAQ → Contact → Footer.

**Currently missing in production:** Why, Cases, Tech, FAQ.

### Repo layout
```
Landing/
├── index.html              # production page (self-contained)
├── README.md
├── .gitignore
├── .github/workflows/deploy.yml
├── LOGO/                   # logo source files
│   ├── Logo.svg
│   ├── logo-dark.png       # processed for dark bg (ADR-009)
│   ├── logo.jpeg
│   ├── logo.webp
│   ├── logo27-5.1-round-1.png
│   └── logo27-5.1-square-1-600x600.png
├── Landing.fig             # Figma source
├── Site Versions/
│   ├── ver-1/              # archived vanilla HTML/CSS/JS
│   └── ver-2 SmartBuildTech/   # archived React/JSX components
├── Fossilized/             # archived obsolete docs
├── backend/                # FastAPI + Resend + Docker
│   ├── main.py
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── requirements.txt
├── memory/
│   └── feedback_use_existing_assets.md
└── Actual DOCS/
    ├── CLAUDE.md           # AI assistant context — MUST READ
    ├── CHANGELOG.md
    └── DECISION_LOG.md     # 12 ADRs
```

---

## 3. Design system (frozen in CLAUDE.md / ADR-008/009)

### Theme — dark only
- `--bg: #0c0c0e`
- `--surface: #16161a`
- `--surface-2: #1e1e24`

### Accent — amber, pulled exactly from the logo
- `--accent: #EEB825` (R:236 G:175 B:33)
- `--accent-2: #F5C842`
- `--accent-glow: rgba(238,184,37,0.14)`
- **Never hardcode** — always via `:root` variables.

### Typography
- **Inter** (Google Fonts). Hero title with `clamp()`.

### Components present in current build
- `.btn` / `.btn-primary` / `.btn-ghost` / `.btn-lg`
- `.card` / `.card-featured` / `.card-cta` (spans 2 cols)
- `.diff-item` (3-col grid for differentiators)
- `.section` / `.section-alt`
- `.container` max-width 1120px
- ContactModal — `.modal-overlay`, `.modal-box`, `.modal-box.wide`, `.cal-iframe`

### Logo usage (ADR-009)
- Use `LOGO/logo-dark.png` via `<img>`.
- **Never recreate logo in SVG** — there's a feedback memory file about this (`memory/feedback_use_existing_assets.md`). User has explicitly told us not to "improve" the logo.
- Logo was processed for dark background via Python + Pillow + BFS flood-fill (see ADR-009 for algorithm).

### Hard rules (from CLAUDE.md)
1. **Zero dependencies.** No npm, no frameworks, no CDN libs (React/Babel via CDN tolerated for inline JSX).
2. **CSS variables only** for colors/radii/spacing.
3. **Inline SVG for icons.** No icon libraries.
4. **Semantic HTML.** `<section>`, `<nav>`, `<footer>`, `<details>`.
5. **Responsive.** Breakpoints 900px and 640px.
6. **English content only** in `index.html`. Russian is deferred.
7. No `!important`. Specificity is intentionally flat.

---

## 4. Architecture decisions (ADR summary)

From `Actual DOCS/DECISION_LOG.md` — only the live ones, archived ones omitted.

| # | Decision | Status |
|---|---|---|
| ADR-001 | Vanilla HTML/CSS/JS, no framework, no build | ACTIVE |
| ADR-002 | Dark theme only | ACTIVE |
| ADR-003 | ~~Purple accent #c77dff~~ | CANCELLED (replaced by ADR-008) |
| ADR-004 | Inline SVG for icons | ACTIVE |
| ADR-005 | Form without backend in v1 | SUPERSEDED by ADR-012 |
| ADR-006 | Flat CSS, no BEM / Tailwind / methodology | ACTIVE |
| ADR-007 | GitHub Actions → GitHub Pages | ACTIVE |
| ADR-008 | **English-first language + amber `#EEB825` accent** | ACTIVE |
| ADR-009 | **Logo: use existing PNG, processed via Python for dark bg** | ACTIVE |
| ADR-010 | Universal `ContactModal` opened via `window.openContactModal()` | ACTIVE |
| ADR-011 | Cal.com public iframe (self-hosted dropped) | ACTIVE |
| ADR-012 | FastAPI + Resend backend on OCI | ACTIVE |

---

## 5. Marketing critique (raised against current production site)

Captured in full because it drives the next batch of work.

### Critical — killing conversion right now
1. **Three hero variants in production** with a `01/02/03` switcher visible to visitors. Read as "they haven't decided who they are". **Pick V3 (product-led, with live demo). Delete the rest.**
2. **CTA "Tell me more" is the worst possible CTA.** About *us*, not the customer. Replace with benefit-CTA: "Get my remote audit", "Plan my home — free 30 min", "Book a discovery call".
3. **Headlines are abstract, don't sell.** "A home that thinks for you" / "Technology that works for you" — pretty but says nothing about WHAT or FOR WHOM. Use: **\[concrete outcome\] + \[for whom\] + \[how/at what cost\]**.
4. **No ICP.** Site speaks to everyone, sells to nobody. Either pick a primary ICP or build dedicated sections per audience (homeowner / architect / existing system owner).
5. **No trust signals at all.** No client logos, no real project photos, no testimonials with face+name, no certifications (KNX Partner, Loxone Gold Partner — table-stakes in this niche), the "60+ Projects · 98% Happy clients" stats are floating without proof.

### High-impact structural gaps
6. **Sections Why / Cases / Tech / FAQ are missing in production** despite being declared in CLAUDE.md.
7. **Remote angle is buried** — it's the single real competitive edge and it's in a subtitle. Should be in H1, in first viewport, with metrics ("$X less than on-site studios", "Works in 18 countries", "Delivered without a single flight").
8. **AI integration is in services but not in hero.** Either commit (move up) or remove.
9. **Process is generic.** "Brief → Prototype → Development → Testing → Support" is every agency. SBT's unique process is *video site survey → topology+BOM in 5 days → remote programming via VPN / on-site installer hands → Zoom commissioning*. Show that.
10. **Pricing "from $500" repels premium audience.** Either raise floor + show typical range, or remove numbers and gate via discovery call.

### ContactModal / form
11. **Too many choices on entry.** 4 contact options = paradox of choice. One primary CTA → Cal.com discovery call. Others as small "Or send a message / leave contact".
12. **Backend sends from `onboarding@resend.dev`.** Must verify `daria.style` (or chosen domain) in Resend before launch — otherwise 30–50% of mail goes to spam. **Cheapest highest-impact fix.**
13. **Cal.com slug `time-reserving`** sounds weird. Rename to `intro-call`, `discovery`, or `consultation`.

### Cosmetic / longer-term
14. **Wordmark long for long domain.** Need a short-form (e.g. "SBT") for compact contexts.
15. **No SEO landing pages** for intent-keywords like "KNX programming remote", "Loxone consultant online", "smart home design without site visit". Real searches, low competition.
16. **No language hints** for non-English visitors (even flag icons signal "we work with your region" without requiring translation).

---

## 6. Brand naming exploration — **active, not finished**

User dropped "SmartBuildTech" because it feels generic-SaaS, "Smart" + "Tech" are clichés, "Build" misreads as general contracting.

### Direction settled on
- TLD **`.engineering`** — user likes it. Reads as "engineering practice", covers both smart-home + custom software, premium.
- The name must be **understandable to non-technical educated buyers** (not just engineers).
- The name must **describe what we do** (action / function), not what we feel.
- User explicitly rejected anything from engineer-jargon vocabulary.

### Names tried and rejected so far
| Candidate | Why rejected |
|---|---|
| SmartBuildTech | User decided it's weak (generic SaaS feel) |
| intelli.engineering | "Intelli" = same trap as "Smart", trademark-loaded, mushy 5 syllables |
| thread / relay / conduit (.engineering) | Too engineer-jargon, civilians don't get them |
| Lume / Casa / Atelier / Hearth / Halo / Aurora / Nido (light/home/atelier vocab) | Implicitly rejected when user pivoted back to action-based naming |
| anywhere.engineering | "Not brand-y" |
| distance.engineering | I pushed back — "distance" is a *cold* word in English ("keep your distance", "distance learning" cheap-course association); means *separation* not *reachability* |
| span.engineering | Sounds like chewing gum |
| orbit.engineering | Orbit = Wrigley gum brand |
| outpost.engineering | User liked it, **domain taken** |
| bastion.engineering | User liked it, **domain taken** |
| sentinel / bureau / foundry / praxis / lookout / hangar (.engineering) | Did not resonate |

### Where we are
User is asking for **more candidates**, still in the `.engineering` TLD, still action-based, still simple enough for non-technical audience. Next chat picks up here.

### Naming criteria locked in
- ✅ One word, simple to pronounce
- ✅ Action / function / what we do — not vibes
- ✅ Understood by educated non-technical buyers
- ✅ Strong sound (not mushy, not gum-brand-adjacent)
- ✅ `.engineering` TLD
- ✅ Domain actually available
- ✅ No major trademark conflicts in EU/US
- ❌ Not "Smart", "Intelli", "Tech", or any category-cliché
- ❌ Not jargon (no "Thread", "Relay", "Conduit", "Bastion" — too engineer)
- ❌ Not consumer-brand-adjacent (Orbit gum, Span energy bar, etc.)
- ❌ Not Latin/Greek the average person can't translate

### Vocabularies still unexplored — candidates for next session
- **Direction / reach words** that mean "across distance" without being cold: reach, link, bridge, send
- **Service / craft action verbs**: deliver, ship, run, build (problematic — overlap with "build" the user dropped), wire, tune, fit, set
- **Coverage / scope words**: anywhere/somewhere variants, "everywhere", "across", "wide"
- **Travel / motion metaphors that aren't gum brands**: route, course, range
- **Numerical / scale brand patterns**: One+something, Zero+something, First+something
- **Maritime / aviation operations**: harbor, pilot (already raised once), dispatch, deck, port, gate

### Notes for next session on naming
- Check both `.engineering` and short alternates (`.studio`, `.design`, `.co`, `.io`) as fallback if first choice is taken
- Always quick trademark sniff (EU + US classes 9, 35, 42 most relevant)
- Show user 5–7 candidates max per round, not a long list — easier to evaluate
- Lead with the strongest one and explain its bicausal logic (sound + meaning), not just list

---

## 7. User's voice & feedback patterns (so the next agent doesn't repeat mistakes)

- **Direct and no-nonsense.** Says "не заходит" and moves on. Don't oversell, don't pad.
- **Hates jargon.** "Простым людям, даже образованным нетехнарям эти слова ничего не говорят" — quoted verbatim.
- **Trusts visual feel as much as logic.** Rejected `span/orbit` purely on phonetic association with chewing gum.
- **Wants real action, not theory.** Pulled the naming conversation back from feelings-vocabulary to action-based when I drifted.
- **Will course-correct mid-conversation** if direction is wrong — listen and pivot fast.
- **Doesn't want logo touched.** This is in `memory/feedback_use_existing_assets.md` and was earned the hard way — don't recreate the logo in SVG ever.
- **Writes in Russian, ships product in English.** Conversation is Russian, deliverables are English. Don't put Russian in `index.html`.

---

## 8. Open questions / parked items

1. **Final brand name** — in progress, see §6.
2. **Domain registration** — pending brand pick.
3. **Resend domain verification** — `daria.style` (or new domain) → unblock production email.
4. **Cal.com slug rename** — `time-reserving` → `discovery` or `intro-call`.
5. **ICP definition** — site currently speaks to everyone.
6. **Trust block content** — need real client logos, testimonials, or anonymized case stats with concrete numbers.
7. **Case studies** — at least one anonymised case needed for trust ("KNX project, 280 m², Berlin, $4,200, delivered in 3 weeks" beats "60+ projects" with no specifics).
8. **Pricing strategy** — keep `from $X` floors or move to "Custom — contact us"?
9. **Certifications display** — KNX Partner, Loxone Gold Partner, etc. — table-stakes in the niche.
10. **Heroes consolidation** — 3 variants → 1.

---

## 9. Where to pick up in the next chat

The immediate next move when user returns is:

> **Round 4 of brand naming.** User wants more `.engineering` candidates that are action-based, simple for non-technical buyers, strong-sounding, domain-available, and not in the rejected list (§6).

Bring 5–7 fresh candidates from the unexplored vocabularies in §6. For the user's likely top pick, lead with reasoning: sound + meaning + visual mark potential + availability. Don't burn turns on words from rejected vocabularies.

---

## 10. Files worth reading first in a new chat

1. `Actual DOCS/CLAUDE.md` — design system + hard rules
2. `Actual DOCS/DECISION_LOG.md` — full ADR history with context
3. `Actual DOCS/CHANGELOG.md` — what shipped when
4. `memory/feedback_use_existing_assets.md` — logo handling rule
5. `index.html` — current production site (single file, big)
6. `backend/main.py` — contact form backend
7. This file (`PROJECT_BRIEF.md`) — the bridge
