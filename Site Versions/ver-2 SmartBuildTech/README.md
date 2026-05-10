# SmartBuildTech

Landing page for **SmartBuildTech** — a remote smart-home engineering and software studio.

## What we do

- **App development** — mobile, web and cross-platform.
- **Remote smart-home design** — full project end-to-end over Zoom and the cloud, anywhere in the world.
- **Online configuration** — programming and commissioning of installed systems.
- **Voice & app integrations** — assistants, dashboards, MQTT/REST.
- **24/7 support** — monitoring, updates, scaling.

## Supported systems

KNX · BACnet · Loxone · Home Assistant · Siemens LOGO

## Stack

Single self-contained `index.html` — React 18 + Babel standalone, no build step.

- Static HTML/CSS scaffold
- Inline JSX components for hero variants, services, smart-home demo, contact
- Tweaks panel (top-right) for live brand/accent/section toggles

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

- `index.html` — full landing page (English UI, Russian to be added later)
- `uploads/` — logo and reference assets

## Roadmap

- [ ] Russian language toggle
- [ ] Real interior and app screenshots (currently placeholders)
- [ ] Case studies section
- [ ] Blog / engineering notes
