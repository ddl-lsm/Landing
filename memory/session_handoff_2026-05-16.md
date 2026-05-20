---
name: Session handoff 2026-05-16
description: Key context to resume project work next session
type: handoff
---

Current release context
- Documentation release context: 2.1.0 (from Actual DOCS/CHANGELOG.md).

Repository state at end of session
- Branch: main, tracking origin/main.
- Untracked files in root: script.js, style.css.
- These two files are byte-identical duplicates of Site Versions/ver-1/script.js and Site Versions/ver-1/style.css.

Important mismatches found
- Branding mismatch: README uses KEEN-DWELL, while production index.html and backend still contain SmartBuildTech strings.
- Legacy contact artifacts still present in index.html (devhome telegram/email and +7 phone values).
- README path mismatch: references ver-2 KEENDWELL, but actual folder is Site Versions/ver-2 SmartBuildTech.
- README Actions URL uses repo name Landing, but git remote points to ddl-lsm/Lending.
- Actual DOCS/CLAUDE.md is not aligned with current production structure/content (describes style.css/script.js flow and old design assumptions).

Operational context
- Frontend booking uses Cal.com iframe in index.html.
- Contact backend is FastAPI + Resend.
- backend/main.py currently uses onboarding@resend.dev sender and CORS allow_origins=["https://ddl-lsm.github.io"].

Recommended first checks next session
1) Confirm single source of truth for brand and domain (KEEN-DWELL vs SmartBuildTech).
2) Decide whether to keep or remove root script.js/style.css duplicates.
3) Align README, CLAUDE docs, and production index.html to the same current architecture.
4) Verify deployment URLs/repo naming consistency in docs.
5) Recheck contact details shown in live UI before any launch-facing update.
