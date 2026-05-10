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
