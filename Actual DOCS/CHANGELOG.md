# CHANGELOG

Все значимые изменения в проекте фиксируются здесь.
Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/).
Версии следуют [Semantic Versioning](https://semver.org/lang/ru/): `MAJOR.MINOR.PATCH`.

---

## [Unreleased]

> Сюда идут изменения, которые ещё не вышли в релиз.

---

## [2.0.1] — 2026-05-10

### Fixed
- Деплой GitHub Pages: `index.html` возвращён в корень репозитория (ver-2 SmartBuildTech)

### Changed
- Структура репозитория: устаревшие документы теперь архивируются в `/Fossilized/` (корень), а не в `Actual DOCS/Fossilized/`
- `Actual DOCS/README.md` упразднён: единственный README — `README.md` в корне (витрина + техническая документация)
- Корневой `README.md` создан заново: английский, SmartBuildTech, актуальная структура проекта

### Documentation
- `Fossilized/README-v1.0.md` — архив DevHome-era README (русский)
- `Fossilized/CLAUDE-v1.0.md` — архив AI-контекста v1.0 (DevHome)

---

## [2.0.0] — 2026-05-10

### Changed (Breaking)
- Ребрендинг: DevHome → **SmartBuildTech**
- Язык страницы: русский → английский (целевая аудитория: US/UK/EU)
- Акцентный цвет: `#c77dff` (фиолетовый) → `#EEB825` (янтарный) — под палитру логотипа
- Hero-секция: одна колонка → CSS Grid 1fr/1fr (текст слева, dashboard-мокап справа)
- Секция услуг: 6 карточек → 4 карточки + `.card-cta` (spans 2 cols)
- Секция «Как работает»: 5 шагов → 3 шага с нумерованными маркерами

### Added
- `LOGO/logo-dark.png` — логотип для тёмного фона (Python/Pillow, BFS flood-fill: фон → прозрачный, тёмные элементы → белые, жёлтые → `rgb(236,175,33)`, внутренние блики → белые)
- Animated hero dashboard mockup (`float` keyframes, 5 s) — виджет умного дома
- `pulse` CSS-анимация индикатора онлайн-статуса в мокапе
- Секция Differentiators (`.diff-grid`, 3 пункта) — Why SmartBuildTech
- Inline SVG иллюстрации 72×72 px во всех карточках услуг
- Inline SVG визуалы в превью кейсов
- CSS-переменные: `--accent-glow`, `--radius-xl`, `--surface-2`

### Removed
- Фиолетовая цветовая схема (`#c77dff / #7b61ff`)
- Русскоязычный контент
- Брендинг DevHome

### Documentation
- DECISION_LOG.md — ADR-003 переведён в статус «отменено» (замена цвета)
- DECISION_LOG.md — ADR-008: English-first язык страницы
- DECISION_LOG.md — ADR-009: подход к логотипу (существующий PNG + Python-обработка)
- CLAUDE.md — обновлён под актуальный стек SmartBuildTech v2.0

---

## [1.1.0] — 2026-05-10

### Added
- GitHub Actions workflow `.github/workflows/deploy.yml` — автодеплой на GitHub Pages при каждом push в `main`
- Секрет `GH_TOKEN` добавлен в настройки репозитория
- GitHub Pages переключён на деплой через Actions (workflow mode)
- Живой сайт: https://ddl-lsm.github.io/Lending/

### Changed
- `README.md` — обновлена секция деплоя, добавлена структура `.github/workflows/`, ссылки на живой сайт и Actions

### Added (документация)
- `DECISION_LOG.md` — ADR-007: выбор GitHub Actions для CI/CD

---

## [1.0.0] — 2026-05-10

### Added
- Первая версия лендинга: `index.html`, `style.css`, `script.js`
- Секции: Nav, Hero, Services (6 карточек), How it works (5 шагов),
  Cases (3 кейса), Tech stack, FAQ (6 вопросов), Contact, Footer
- Тёмная тема на CSS-переменных, акцент `#c77dff`
- Адаптивная вёрстка: 3 → 2 → 1 колонка (брейкпоинты 900px / 640px)
- Анимации появления через `IntersectionObserver`
- Blur-эффект на nav при скролле
- Success-state формы (без реального бэкенда)
- Документация: README.md, CLAUDE.md, CHANGELOG.md, DECISION_LOG.md
- Инициализация git-репозитория, `.gitignore`

---

## Как вести этот файл

### Типы изменений
| Тип | Когда использовать |
|-----|-------------------|
| `Added` | Новая функциональность |
| `Changed` | Изменение существующей функциональности |
| `Deprecated` | Скоро будет удалено |
| `Removed` | Удалено в этой версии |
| `Fixed` | Исправление бага |
| `Security` | Уязвимость закрыта |

### Как добавить запись

1. Новые изменения — в секцию `[Unreleased]`
2. При релизе — создать секцию `[X.Y.Z] — YYYY-MM-DD` и перенести туда

### Когда повышать версию
- `PATCH` (1.0.x) — фикс бага, правка текста, мелкий стиль
- `MINOR` (1.x.0) — новая секция, новый компонент, интеграция
- `MAJOR` (x.0.0) — полный редизайн, смена стека, ребрендинг
