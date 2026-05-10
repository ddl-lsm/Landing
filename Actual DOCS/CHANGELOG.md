# CHANGELOG

Все значимые изменения в проекте фиксируются здесь.
Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/).
Версии следуют [Semantic Versioning](https://semver.org/lang/ru/): `MAJOR.MINOR.PATCH`.

---

## [Unreleased]

> Сюда идут изменения, которые ещё не вышли в релиз.

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
