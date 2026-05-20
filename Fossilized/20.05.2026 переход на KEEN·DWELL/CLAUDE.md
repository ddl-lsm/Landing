# CLAUDE.md - Canonical Rules and Principles

Version: 1.1.0
Last updated: 2026-05-19

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

# CLAUDE.md — Context for AI assistants

Read this file before touching any code.

## What this project is

Single-page landing for **SmartBuildTech** — smart home automation, custom app development, AI integration.
Target audience: US/UK/EU English-speaking market.

Goal: convert visitors into contact-form submissions (`#contact`).

## Key files

| File         | Purpose                                                         |
|--------------|-----------------------------------------------------------------|
| `index.html` | All markup. Sections top-to-bottom: Nav, Hero, Why, Services, Process, Cases, Tech, FAQ, Contact, Footer. |
| `style.css`  | All styles. Variables in `:root`, then blocks per section.      |
| `script.js`  | Scroll nav blur, IntersectionObserver animations, handleSubmit. |
| `LOGO/logo-dark.png`   | Logo processed for dark background (see ADR-009).   |

## Design system

**Theme:** dark only. Background `#0c0c0e`, surface `#16161a`, surface-2 `#1e1e24`.
**Accent:** `#EEB825` (R:236 G:175 B:33) — matches logo yellow exactly. Do not approximate.
**Accent variables:** `--accent`, `--accent-2: #F5C842`, `--accent-glow: rgba(238,184,37,0.14)`.

Change colors only via CSS variables in `:root` — never hardcode.

**Typography:** Inter (Google Fonts). Hero title via `clamp()`.

**Components:**
- `.btn` / `.btn-primary` / `.btn-ghost` / `.btn-lg` — buttons
- `.card` / `.card-featured` / `.card-cta` — service cards (`.card-cta` spans 2 grid cols)
- `.diff-item` — differentiator items (3-col grid)
- `.section` / `.section-alt` — page sections
- `.container` — centring wrapper, max-width 1120px

**Logo in nav:**
```html
<img src="LOGO/logo-dark.png" class="logo-icon" alt="SmartBuildTech">
<span class="logo-wordmark">
  <span class="lw-smart">Smart</span><span class="lw-build">Build</span><span class="lw-tech">Tech</span>
</span>
```

## Rules when editing

1. **Zero dependencies.** No npm, no frameworks, no CDN libraries.
2. **CSS variables.** All new colors/radii/spacing — variables in `:root`.
3. **Inline SVG for icons.** Do not import icon libraries.
4. **Semantic HTML.** Use `<section>`, `<nav>`, `<footer>`, `<details>` correctly.
5. **Responsive.** All new blocks need mobile styles. Breakpoints: 900px and 640px.
6. **English content only.** Do not add Russian text to `index.html`.
7. **Logo:** use `LOGO/logo-dark.png` via `<img>`. Do not recreate in SVG. See ADR-009.

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

### Wire up real form submission
```js
// script.js → handleSubmit()

// Option 1: Formspree
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST', body: new FormData(form),
  headers: { Accept: 'application/json' }
});

// Option 2: Telegram Bot
await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
  method: 'POST',
  body: JSON.stringify({ chat_id: CHAT_ID, text: `New request: ...` }),
  headers: { 'Content-Type': 'application/json' }
});
```

## What NOT to do

- Do not hardcode `#EEB825` outside `:root`
- Do not add `!important` — specificity is intentionally flat
- Do not recreate the logo in SVG — use `LOGO/logo-dark.png`
- Do not change section order without updating `DECISION_LOG.md`
- Do not wrap the form in an extra `<div>` — `handleSubmit` replaces `innerHTML` directly
- Do not add Russian text
