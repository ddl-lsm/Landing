# SmartBuildTech

Landing page for **SmartBuildTech** — remote smart-home engineering and custom software studio.

**Live site:** https://ddl-lsm.github.io/Lending/
**Deploy status:** https://github.com/ddl-lsm/Lending/actions

---

## What we do

- **Custom app development** — mobile, web, and cross-platform
- **Remote smart-home design** — full project end-to-end over Zoom and the cloud, anywhere in the world
- **Online configuration** — programming and commissioning of installed systems
- **Voice & app integrations** — assistants, dashboards, MQTT/REST
- **AI integration** — intelligent automation, predictive control, LLM-powered interfaces
- **24/7 support** — monitoring, updates, scaling

## Supported systems

KNX · BACnet · Loxone · Home Assistant · Siemens LOGO

---

## Stack

Single self-contained `index.html` — React 18 + Babel standalone, no build step required.

| Layer      | Solution                                      |
|------------|-----------------------------------------------|
| Markup     | Semantic HTML5                                |
| Styles     | Vanilla CSS with variables (`:root`)          |
| Logic      | React 18 + Babel (loaded from CDN, no npm)    |
| Fonts      | Google Fonts — Geist, Geist Mono              |
| CI/CD      | GitHub Actions → GitHub Pages                 |

---

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or open `index.html` directly in any browser — no server needed.

---

## Project structure

```
Landing/
├── index.html              # Production page (self-contained)
├── README.md               # This file
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy to GitHub Pages on push to main
├── LOGO/                   # Logo source files and processed variants
├── Site Versions/
│   ├── ver-1/              # Archive: vanilla HTML/CSS/JS version
│   └── ver-2 SmartBuildTech/  # Archive: React/JSX source components
├── Fossilized/             # Archived outdated documents
└── Actual DOCS/
    ├── CLAUDE.md           # AI assistant context
    ├── CHANGELOG.md        # Version history
    └── DECISION_LOG.md     # Architecture decision records
```

---

## Deploy

Push to `main` — GitHub Actions deploys automatically.

```bash
git push origin main
# → Actions runs deploy.yml
# → site updates at https://ddl-lsm.github.io/Lending/
```

Manual trigger: GitHub → Actions → Deploy to GitHub Pages → Run workflow.
