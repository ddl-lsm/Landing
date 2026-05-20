# CLAUDE.md - Canonical Rules and Principles

Version: 1.3.1
Last updated: 2026-05-20

---

## MANDATORY INTERACTION, CODE AND DOCUMENTATION RULES

### 1. LANGUAGE OF COMMUNICATION
- Respond in the same language as the user's message.

### 2. APPROVAL WORKFLOW
- For any task, propose an approach first and wait for explicit approval.
- Writing code before approval is prohibited.

### 3. CODE SAFETY AND RECOVERY
- No existing functional code shall be modified or removed without ensuring full recoverability (via automatic .bak creation or Git commits).
- Creating a backup of the current working state is MANDATORY before any destructive operation.

### 4. ENVIRONMENT ISOLATION
- Modification of global system packages or environment variables is prohibited.
- All new dependencies must be installed only within an isolated virtual environment (venv / docker) and must be explicitly approved.

### 5. VERSION CONTROL
- Use Semantic Versioning (SemVer) for all code and tests.
- Any reference to code - whether proposing changes, reporting completed work, or discussing existing implementation - must include the explicit version number, so the user can unambiguously identify which version is being discussed.

### 6. OBSOLETE CONTENT HANDLING
- Move documents with outdated approaches, methods, or principles to the Fossilized/ folder.
- Create a new document with current information instead of updating the outdated one.
- Exception: CHANGELOG.md remains in place.

### 7. DOCUMENT ORDERING (LIVING DOCUMENTS)
- For all documents that grow incrementally as the project evolves (changelogs, decision logs, architecture notes, feature descriptions, status updates, release notes, and similar living documents) - place newest entries at the top. Never append new content to the end.
- Rationale: anyone opening the document must immediately see the current state, not scroll through history first.
- Exception: static, write-once documents (READMEs, specifications, reference manuals, source code) follow normal top-to-bottom flow.

### 8. FORMATTING RESTRICTIONS
- Never use a long dash; always use a standard "-" (U+002D Hyphen-Minus Unicode Character).
- Forbidden: emojis and decorative pictograms.
- Allowed: neutral symbols (bullets, arrows ->v, math symbols, pseudographics).

### 9. CONTENT POLICY
- Never add advertising, promotional, branding, or self-referential content to ANY type of files.

---

## BEHAVIORAL PRINCIPLES

### 1. CRITICAL ENGAGEMENT WITH USER INPUT
- Treat user suggestions as proposals from an equal partner, not as direct commands.
- If you disagree with the proposed approach or know a better solution, state it clearly and explain why before proceeding.
- Comply unconditionally only when the user explicitly marks an instruction as MANDATORY.

### 2. STRUCTURED, STEP-BY-STEP RESPONSES
- Structure every substantive reply around four sections:
  - What was done.
  - What failed or is still pending.
  - What comes next.
  - What is needed from the user.
- Do not dump every possible step, option, or variant in a single response.
- Work deliberately and in stages: complete one step, confirm the outcome, then move to the next.

### 3. HONEST CRITICAL EVALUATION
- Evaluate any and all work honestly - your own, the user's, and joint output alike - without flattery or sycophancy.
- Surface weaknesses, risks, and questionable trade-offs regardless of whose work produced them.
- Proactively propose improvements, automation opportunities, and useful changes whenever you spot them.

### 4. OWNERSHIP OF WORK
- Never offload subtasks to the user unnecessarily.
- Guiding principle: whatever you can do yourself, safely and to a high standard, you do yourself.
- Approach the user only for resources, credentials, or decisions that genuinely require their input.

---

# CLAUDE.md - Context for AI assistants

Read this file first. Then read the docs in the index below before touching anything.

## What this project is

Single-page landing for **KEEN·DWELL** - a remote smart-home engineering and custom software studio. Smart home automation, custom app development, AI integration. Two practices, one team. Delivered remotely, anywhere in the world (no on-site visits).

Target audience: US/UK/EU English-speaking market.

Goal: convert visitors into contact-form submissions and Cal.com discovery-call bookings.

## Brand

### Brand name and how to write it

The brand is **`KEEN·DWELL`** (uppercase + middle dot U+00B7, no spaces around the dot). Use this verbatim in:

- All user-visible copy (hero, services, sections, captions)
- Page titles, headings, meta tags (`<title>`, OG, Twitter card)
- Email subjects, signatures, body copy
- Document headers in this repo (READMEs, ADRs, briefs)
- Markup `alt` text and ARIA labels for the wordmark
- Comments in source code that name the brand

The lowercase form **`keendwell`** (no separator) is used **only** as a technical identifier:

- Domain names: `keendwell.com`, `dev.keendwell.com`
- Subdomains: `api.keendwell.com`, `book.keendwell.com`, etc. (when created)
- Email addresses: `studio@keendwell.com`, `hello@keendwell.com`, `dmitry@keendwell.com`
- Social handles: `@keendwell` on every platform (see ADR-014)
- Code identifiers: variable names, CSS class names referring to the brand (e.g. `.logo-keendwell`)

**Forbidden forms** (do not write, do not auto-correct to):
`KeenDwell`, `Keendwell`, `keenDwell`, `Keen Dwell`, `KEEN DWELL` (with space), `Keen-Dwell`, `KEEN-DWELL`, `Keen.Dwell`, `keen dwell`, `KD` as a standalone wordmark, `K·D`. If `BRAND_KEENDWELL.md` (Brand Bible) §3 lists any of these as wordmark candidates, that section is stale and must be brought into line with this CLAUDE.md.

### Domains and environments

- Production landing: **<https://keendwell.com>** - currently serves a "coming soon" placeholder
- Dev / staging: **<https://dev.keendwell.com>**
- Legacy GitHub Pages mirror (kept while the migration completes): <https://ddl-lsm.github.io/Lending/>

### Wordmark exploration

The visual wordmark - typeface, weight, kerning, optional KD monogram for favicon / app icon, integration with the existing amber logo mark - is an open exploration in `Wordmark Exploration.html` (repo root). That exploration covers **typographic treatment** of the string `KEEN·DWELL` and a separate KD monogram for compact contexts. It does **not** open up the text form of the brand name itself - the text is always `KEEN·DWELL`.

### Social handle

`@keendwell` on Facebook, X (Twitter), Instagram, LinkedIn Company, YouTube. Registration in progress. See ADR-014.

### Retired

`SmartBuildTech` (working title, never publicly launched). Must stay only in archival paths:
- `Site Versions/ver-2 SmartBuildTech/`
- `Fossilized/`
- any historical case-study text where retroactive renaming would falsify a record

Do **not** reintroduce `SmartBuildTech` into live code, copy, markup, comments, meta tags, or docs outside those paths.

## Documentation index

The doc set is split between three living locations. Read top-to-bottom.

### `Actual DOCS/` - canonical rules and history
| File | Role |
|---|---|
| `CLAUDE.md` (this file) | Rules, principles, brand. Read first. |
| `CHANGELOG.md` | Versioned history. Newest at top. |
| `DECISION_LOG.md` | ADRs with reasoning. Newest at top. ADR-013 = brand name and domain; ADR-014 = social handles. |

### Root - active brand work
| File | Role |
|---|---|
| `BRAND_KEENDWELL.md` | **Brand Bible.** Canonical reference: name meaning, phonetics, voice, tone, positioning, risks. Read before writing any user-facing copy. |
| `BRANDING_ROLLOUT_PLAN.md` | Operational rollout checklist, 6 phases. Read before planning brand-related sprints. |
| `TRADEMARK_RESEARCH.md` | Preliminary TM scan. Not legal clearance - guides what attorney work is needed before public filing. |
| `Brand Messaging KeenDwell.md` | Tagline / messaging directions across four registers (Global Expert / Value / Lifestyle / Action). Working set, not final. Filename retains historical CamelCase for git history continuity; the document content uses `KEEN·DWELL`. |
| `Wordmark Exploration.html` | Interactive exploration of visual wordmark variants (typography only - the text is always `KEEN·DWELL`). |

### `Fossilized/` - archived earlier identities
| File | Role |
|---|---|
| `CLAUDE-v1.0.md` | DevHome-era AI context. Historical. |
| `README-v1.0.md` | DevHome-era README. Historical. |
| `PROJECT_BRIEF-v1.0.md` | Cross-session brief from the SmartBuildTech working-title era. **Still useful** for §5 marketing critique and §7 user-voice patterns; §6 naming exploration is closed (resolved by `BRAND_KEENDWELL.md` and ADR-013). |

### `memory/` - behavioural memory for AI assistants
| File | Role |
|---|---|
| `feedback_use_existing_assets.md` | Hard rule: never recreate the logo in SVG. Use `LOGO/logo-dark.png` via `<img>`. Earned from a past mistake. |

## Key code files

| File | Purpose |
|---|---|
| `index.html` | All markup. Sections top-to-bottom: Nav, Hero, Why, Services, Process, Cases, Tech, FAQ, Contact, Footer. As of v3.0.0 still ships the old SmartBuildTech wordmark - rebrand of the markup is a separate task. |
| `style.css` | All styles. Variables in `:root`, then blocks per section. |
| `script.js` | Scroll nav blur, IntersectionObserver animations, handleSubmit. |
| `LOGO/logo-dark.png` | Logo processed for dark background (see ADR-009). Never recreated in SVG. |

## Design system

**Theme:** dark only. Background `#0c0c0e`, surface `#16161a`, surface-2 `#1e1e24`.
**Accent:** `#EEB825` (R:236 G:175 B:33) - matches logo yellow exactly. Do not approximate.
**Accent variables:** `--accent`, `--accent-2: #F5C842`, `--accent-glow: rgba(238,184,37,0.14)`.
**Text on dark** (planned, per `BRANDING_ROLLOUT_PLAN.md` §1.3):
- `--text: #F5F2EC` (warm off-white)
- `--text-muted: rgba(245,242,236,0.65)`
- `--text-faint: rgba(245,242,236,0.45)`
- `--rule: rgba(245,242,236,0.10)`

Change colors only via CSS variables in `:root` - never hardcode.

**Typography:** Inter (Google Fonts, body). Hero title via `clamp()`. Future additions per rollout plan §1.4: display typeface (TBD from wordmark exploration), IBM Plex Mono for engineering register.

**Components:**
- `.btn` / `.btn-primary` / `.btn-ghost` / `.btn-lg` - buttons
- `.card` / `.card-featured` / `.card-cta` - service cards (`.card-cta` spans 2 grid cols)
- `.diff-item` - differentiator items (3-col grid)
- `.section` / `.section-alt` - page sections
- `.container` - centring wrapper, max-width 1120px

**Reference markup for the nav lockup:**
```html
<img src="LOGO/logo-dark.png" class="logo-icon" alt="KEEN·DWELL">
<span class="logo-wordmark">
  <span class="lw-keen">KEEN</span><span class="lw-dot">·</span><span class="lw-dwell">DWELL</span>
</span>
```
When `Wordmark Exploration.html` lands on a final typographic treatment, this snippet and the class names may be re-issued - but the text content stays `KEEN·DWELL`.

## Rules when editing

1. **Zero dependencies.** No npm, no frameworks, no CDN libraries (React + Babel via CDN tolerated for inline JSX in the current single-file build).
2. **CSS variables.** All new colors/radii/spacing - variables in `:root`.
3. **Inline SVG for icons.** Do not import icon libraries.
4. **Semantic HTML.** Use `<section>`, `<nav>`, `<footer>`, `<details>` correctly.
5. **Responsive.** All new blocks need mobile styles. Breakpoints: 900px and 640px.
6. **English content only.** Do not add Russian text to `index.html`.
7. **Logo:** use `LOGO/logo-dark.png` via `<img>`. Do not recreate in SVG. See ADR-009 and `memory/feedback_use_existing_assets.md`.
8. **Brand string.** Only the two canonical forms exist (see Brand section):
   - Body copy / user-visible text / headings / titles / meta / alt text: `KEEN·DWELL`
   - URLs / handles / email / code identifiers: `keendwell` (lowercase, no separator)
   - Everything else is forbidden. No CamelCase, no Pascal case, no hyphenated forms, no spaced form.
9. **Voice & tone.** Match `BRAND_KEENDWELL.md` §5. British-leaning crispness, concrete outcomes, engineering register where it earns trust. No SaaS hyperbole, no decorative emoji.

## Common tasks

### Change accent color
```css
/* style.css, :root */
--accent:      #NEW_COLOR;
--accent-2:    #NEW_COLOR_LIGHTER;
--accent-glow: rgba(R,G,B,0.14);
```

### Add a new section
1. Copy an existing section structure in `index.html`
2. Add a CSS block in `style.css` at the correct position (keep top-to-bottom section order)
3. Add nav anchor link
4. Voice-check the copy against `BRAND_KEENDWELL.md` §5 before merging

### Wire up real form submission
Current production uses FastAPI + Resend backend on OCI, endpoint `POST https://book.daria.style/api/contact` (see ADR-012). Migration of this endpoint to a `keendwell.com` subdomain is tracked in `BRANDING_ROLLOUT_PLAN.md` Phase 0.

## What NOT to do

- Do not hardcode `#EEB825` outside `:root`
- Do not add `!important` - specificity is intentionally flat
- Do not recreate the logo in SVG - use `LOGO/logo-dark.png`
- Do not change section order without updating `DECISION_LOG.md`
- Do not wrap the form in an extra `<div>` - `handleSubmit` replaces `innerHTML` directly
- Do not add Russian text to `index.html`
- Do not write `SmartBuildTech` anywhere outside the archival paths listed in the Brand section
- Do not write the brand in any form other than the two canonical ones (`KEEN·DWELL` for copy, `keendwell` for URLs/handles). See "Rules when editing" Rule 8.
- Do not modify `BRAND_KEENDWELL.md`, `BRANDING_ROLLOUT_PLAN.md`, or `TRADEMARK_RESEARCH.md` content without updating their "Last updated" line and noting the change in CHANGELOG
- Do not promote any of the working tagline candidates (`Brand Messaging KeenDwell.md`) into production copy before user picks one
