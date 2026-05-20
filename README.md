# KEEN·DWELL

Landing page for **`KEEN·DWELL`** - a remote smart-home engineering and custom software studio.

- Production landing: <https://keendwell.com> (currently "coming soon")
- Dev / staging: <https://dev.keendwell.com>
- Repo: <https://github.com/ddl-lsm/Landing>
- Legacy GitHub Pages mirror: <https://ddl-lsm.github.io/Lending/>

> **How to write the brand.** Use `KEEN·DWELL` (uppercase + middle dot U+00B7) everywhere the brand is visible to a human - copy, headings, page titles, meta tags, email, document headers, alt text. Use `keendwell` (lowercase, no separator) only as a technical identifier - in URLs, domains, email addresses, social handles, code. Any other spelling (CamelCase, hyphenated, spaced, etc.) is forbidden. See `Actual DOCS/CLAUDE.md` and ADR-013.

## What we do

- **Remote smart-home design** - full project end-to-end over Zoom and the cloud, anywhere in the world. Local installer wires hardware; we make it work.
- **Online configuration** - programming and commissioning of installed systems.
- **Voice & app integrations** - assistants, dashboards, MQTT/REST, scenes.
- **Custom software development** - mobile, web, cross-platform apps; storage & search systems; event management; AI integration (LLMs, predictive control).
- **24/7 support** - monitoring, updates, scaling.

## Supported smart-home systems

KNX · BACnet · Loxone · Home Assistant · Siemens LOGO

## Stack

Single self-contained `index.html` plus `style.css` and `script.js`. React 18 + Babel standalone are loaded via CDN inline for the JSX islands (hero variants, services, smart-home demo, ContactModal). No npm, no build step.

- Static HTML/CSS scaffold, dark theme only
- CSS variables for the full design token set in `:root`
- Inline SVG icons (no icon libraries)
- ContactModal opened via `window.openContactModal()` (see ADR-010)
- Backend: FastAPI + Resend on OCI, endpoint `POST https://book.daria.style/api/contact` (see ADR-012). Migration to a `keendwell.com` subdomain is tracked in `BRANDING_ROLLOUT_PLAN.md` Phase 0.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

`git push` to `main` triggers `.github/workflows/deploy.yml` -> GitHub Pages (legacy mirror at `ddl-lsm.github.io/Lending/`). Production points to `keendwell.com`; staging to `dev.keendwell.com`.

## Documentation map

Read `Actual DOCS/CLAUDE.md` **first** - it is the canonical rules + brand file and indexes everything else.

### `Actual DOCS/` - canonical rules and history
- `CLAUDE.md` - rules, design system, brand. **Start here.**
- `CHANGELOG.md` - versioned history, newest at top
- `DECISION_LOG.md` - ADRs (newest at top; ADR-013 = brand and domain, ADR-014 = social handles)

### Repo root - active brand work
- `BRAND_KEENDWELL.md` - Brand Bible: name meaning, voice, positioning. Read before writing copy.
- `BRANDING_ROLLOUT_PLAN.md` - operational 6-phase rollout checklist + budget
- `TRADEMARK_RESEARCH.md` - preliminary TM scan (not legal clearance)
- `Brand Messaging KeenDwell.md` - tagline / messaging directions, working set (content uses `KEEN·DWELL`; filename kept for git history)
- `Wordmark Exploration.html` - interactive exploration of visual wordmark variants (typography only - the text is always `KEEN·DWELL`)

### `Fossilized/` - archived earlier identities
- `PROJECT_BRIEF-v1.0.md` - SmartBuildTech-era cross-session brief. §5 (marketing critique) and §7 (user-voice patterns) still useful; §6 (naming) closed by Brand Bible.
- `CLAUDE-v1.0.md`, `README-v1.0.md` - DevHome-era artefacts

### `memory/`
- `feedback_use_existing_assets.md` - hard rule: never recreate the logo in SVG

## Structure

```
Landing/
├── index.html                       # production page (still ships old wordmark; rebrand of markup is open)
├── style.css
├── script.js
├── LOGO/                            # logo source files (do not recreate in SVG)
├── Landing.fig                      # Figma source
├── README.md                        # this file
├── BRAND_KEENDWELL.md               # Brand Bible
├── BRANDING_ROLLOUT_PLAN.md         # 6-phase rollout
├── TRADEMARK_RESEARCH.md            # preliminary TM scan
├── Brand Messaging KeenDwell.md     # messaging directions
├── Wordmark Exploration.html        # interactive wordmark exploration
├── backend/                         # FastAPI + Resend + Docker
├── memory/                          # behavioural memory for AI assistants
├── Actual DOCS/                     # canonical living documentation
│   ├── CLAUDE.md                    # design system + hard rules + brand (v1.3.1)
│   ├── CHANGELOG.md
│   └── DECISION_LOG.md              # ADRs (newest at top)
├── Fossilized/                      # archived obsolete docs / earlier identities
│   ├── CLAUDE-v1.0.md
│   ├── README-v1.0.md
│   └── PROJECT_BRIEF-v1.0.md
├── Site Versions/                   # archived earlier site versions
│   ├── ver-1/
│   └── ver-2 SmartBuildTech/        # historical, do not revive the name
└── .github/workflows/deploy.yml
```

## Brand and language - quick reference

- Brand name in copy / headings / titles / meta / alt: **`KEEN·DWELL`**
- Brand in URLs / handles / email / code: `keendwell` (lowercase, no separator)
- Production: <https://keendwell.com>
- Dev / staging: <https://dev.keendwell.com>
- Social handle: `@keendwell` on Facebook, X (Twitter), Instagram, LinkedIn Company, YouTube (ADR-014)
- Page language: English only (US/UK/EU audience). Russian content stays out of `index.html`. See ADR-008.
- Former working title `SmartBuildTech` is retired and must stay only in archival paths (`Site Versions/ver-2 SmartBuildTech/`, `Fossilized/`)
- Forbidden spellings: `KeenDwell`, `Keendwell`, `keenDwell`, `Keen Dwell`, `KEEN DWELL` (with space), `Keen-Dwell`, `KEEN-DWELL`, `Keen.Dwell`, `keen dwell`, `KD` as a standalone wordmark, `K·D`

## Roadmap (high level - see `BRANDING_ROLLOUT_PLAN.md` for detail)

- [ ] Rewrite `index.html` wordmark from `Smart/Build/Tech` to `KEEN·DWELL`; update `<title>` / meta / OG / favicon / footer
- [ ] Pick final typographic treatment of the wordmark in `Wordmark Exploration.html` (typography only - text stays `KEEN·DWELL`)
- [ ] Migrate Cal.com slug from `time-reserving` to `discovery` / `intro-call`
- [ ] Verify Resend sender domain under `keendwell.com`
- [ ] Move backend endpoint from `book.daria.style` to a `keendwell.com` subdomain (e.g. `api.keendwell.com`)
- [ ] Add missing sections to production: Why, Cases, Tech, FAQ
- [ ] Trust block: real client logos, certifications (KNX Partner, Loxone Gold), anonymised case stats
- [ ] Define and publish ICP statement
- [ ] Russian language toggle (deferred)
