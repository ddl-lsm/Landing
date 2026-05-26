# CHANGELOG

Все значимые изменения в проекте фиксируются здесь.
Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/).
Версии следуют [Semantic Versioning](https://semver.org/lang/ru/): `MAJOR.MINOR.PATCH`.

---

## [Unreleased]

> Незавершённые работы и запланированные задачи.

### Незавершено в v2.2.0 (требует доработки)
- **Логотипы протоколов** — текущая реализация (inline SVG-аппроксимации) не соответствует визуальному ожиданию. Нужны фактические файлы брендовых логотипов (KNX, LOXONE, BACnet/ASHRAE, Home Assistant, Siemens LOGO!) или их точные трассировки в SVG
- **Локап лого + вордмарк** — соотношение размеров и межсимвольный интервал требуют финальной калибровки после утверждения шрифта

### Ожидают решения
- `Wordmark Exploration.html`: финальный typographic treatment (typeface, weight, kerning, KD-монограмма) - после выбора обновить `BRAND_KEENDWELL.md` §3 и эталон в `Actual DOCS/CLAUDE.md`. Текстовая форма бренда от этого не меняется (всегда `KEEN·DWELL`)
- Cal.com slug `time-reserving` -> `intro-call` или `discovery` (см. `BRANDING_ROLLOUT_PLAN.md` Phase 0)
- Resend: верифицировать домен `keendwell.com` в Resend, заменить отправителя `onboarding@resend.dev` -> `studio@keendwell.com` или `hello@keendwell.com` (см. `BRANDING_ROLLOUT_PLAN.md` Phase 0)
- Backend-эндпоинт: миграция `book.daria.style/api/` на поддомен keendwell.com (например, `api.keendwell.com`)
- ICP statement: сформулировать одно предложение (homeowner mid-build vs architect vs existing-system owner) и зафиксировать в `BRAND_KEENDWELL.md` §4 или отдельным ADR
- Полный лендинг `keendwell.com`: перенести `index.html` из dev в production после финальной проверки

---

## [2.2.0] - 2026-05-26

### Added
- `keendwell.com`: новая coming-soon splash-страница (`splash/index.html`) - вордмарк KEEN·DWELL в 3 цветах, tagline «Sharp homes. Quietly engineered.», строка логотипов протоколов, технический grid-фон
- `splash/fonts/ForoMed.ttf` - шрифт вордмарка, загружен на OCI и в репо
- `Site Versions/ver-3 KEEN·DWELL/` - архивная папка с обоими сайтами на дату выпуска (лендинг + splash)
- CSS-переменная `--blue: #2E66DB` - второй фирменный акцент (цвет точки в вордмарке)

### Changed
- `dev.keendwell.com` (`index.html`): полный ребрендинг SmartBuildTech → KEEN·DWELL - title, eyebrow, nav, footer, copyright, meta
- Вордмарк во всех контекстах: трёхцветная схема KEEN `#EABB30` · `#2E66DB` DWELL `#ffffff`/`#0A0A0A` (ADR-016)
- Шрифт вордмарка: ForoMed через `@font-face`, применён к `.wm-keen`, `.wm-dot`, `.wm-dwell` (ADR-015)
- Логотипы протоколов в marquee и splash: первая итерация inline SVG (KNX, LOXONE, BACnet/ASHRAE, Home Assistant, Siemens LOGO!) взамен текстовых меток
- Контакты на `dev.keendwell.com`: удалён российский номер телефона (+7), Telegram `@devhome` → `@keendwell`, email `hello@devhome.ru` → `info@keendwell.com`
- `.brand` gap в nav: `12px` → `7px` (сжатие локапа)

### Documentation
- ADR-015: ForoMed как шрифт вордмарка (предварительно)
- ADR-016: трёхцветный вордмарк KEEN amber · blue DWELL
- ADR-017: keendwell.com splash vs dev.keendwell.com лендинг - разделение

---

## [3.0.0] - 2026-05-20

### Changed (Breaking)
- Бренд: SmartBuildTech -> **`KEEN·DWELL`** (uppercase + middle dot U+00B7, без пробелов вокруг точки). Это каноническое написание во всех user-visible контекстах: копирайт, заголовки, page titles, мета-теги, OG/Twitter, email, документация
- Технический идентификатор бренда (URL, домены, email, социальные хэндлы, code identifiers): `keendwell` (lowercase, без разделителя)
- Домен: production landing на <https://keendwell.com> (сейчас заглушка «coming soon»), dev/staging на <https://dev.keendwell.com>
- Прежнее имя SmartBuildTech остаётся только в исторических путях (`Site Versions/ver-2 SmartBuildTech/`, `Fossilized/`) - в живой код, копирайтинг и markup не возвращается
- Запрещены формы написания: `KeenDwell`, `Keendwell`, `keenDwell`, `Keen Dwell`, `KEEN DWELL` (с пробелом), `Keen-Dwell`, `KEEN-DWELL`, `Keen.Dwell`, `keen dwell`, `KD` как standalone wordmark, `K·D`. Полный список и обоснование - ADR-013

### Added (документы и решения)
- **`BRAND_KEENDWELL.md`** в корне репо - Brand Bible: семантика имени (Keen + Dwell во всех регистрах, включая инженерное «dwell time»), фонетика, визуально-типографические факты, позиционирование, voice & tone, риски, окружающие TM. Каноническая текстовая форма `KEEN·DWELL` зафиксирована в шапке и §3
- **`BRANDING_ROLLOUT_PLAN.md`** в корне репо - операционный чек-лист в 6 фаз: Lock & defend / Brand kit / Site relaunch / Outbound surfaces / SEO / Case studies + бюджет
- **`TRADEMARK_RESEARCH.md`** в корне репо - предварительный TM-скан: композит KEEN·DWELL чист в первом проходе; рекомендации по защитным доменам, USPTO/EUIPO, attorney clearance, фокус на KEEN Home Inc. (class 9)
- **`Brand Messaging KeenDwell.md`** в корне репо - рабочий набор messaging-направлений в четырёх регистрах (Global Expert / Value / Lifestyle / Action). Имя файла сохранено для git history continuity; контент использует `KEEN·DWELL`
- **`Wordmark Exploration.html`** в корне репо - интерактивный exploration **типографической** обработки строки `KEEN·DWELL` и KD-монограммы. Exploration не пересматривает текстовую форму бренда
- **ADR-013** (`Actual DOCS/DECISION_LOG.md`): брендинг `KEEN·DWELL`. Каноническая форма для копирайта - `KEEN·DWELL`; для технических идентификаторов - `keendwell` lowercase; список запрещённых форм; домены production и dev/staging; визуальный wordmark exploration касается только типографики, не текста
- **ADR-014** (`Actual DOCS/DECISION_LOG.md`): единый социальный хэндл `@keendwell` на Facebook, X (Twitter), Instagram, LinkedIn Company, YouTube (регистрация в процессе). Платформы второй волны (GitHub org, Behance, Dribbble, Threads и т.д.) - отдельным решением
- `Fossilized/PROJECT_BRIEF-v1.0.md` - архив межсессионного брифа эпохи SmartBuildTech, с заголовком-пояснением; нейминговая воронка (§6) закрыта Brand Bible, маркетинговая критика прода (§5) и user-voice-паттерны (§7) сохраняются как живой контекст

### Changed (документация)
- **`Actual DOCS/CLAUDE.md` бамп v1.1.0 -> v1.3.1:**
  - Раздел Brand переписан как одно простое утверждение: бренд = `KEEN·DWELL` в копирайте, `keendwell` lowercase - только в URL/хэндлах/коде. Список запрещённых форм. Domains. Социальный хэндл. Retired (SmartBuildTech)
  - Добавлен раздел «Documentation index» - три локации (`Actual DOCS/`, root, `Fossilized/`) + `memory/`, с ролью каждого файла
  - Добавлены планируемые text-токены из `BRANDING_ROLLOUT_PLAN.md` §1.3 (`--text`, `--text-muted`, `--text-faint`, `--rule`)
  - Обновлён эталон wordmark-разметки в навигации (`KEEN·DWELL` спанами с `.lw-keen` / `.lw-dot` / `.lw-dwell`)
  - Расширены «Rules when editing»: правило 8 - бренд-стринг (две канонические формы, всё остальное запрещено), правило 9 - voice & tone из Brand Bible §5
  - Расширен «What NOT to do»: запрет правок Brand Bible / rollout / TM research без bump «Last updated» + CHANGELOG; запрет промо tagline-кандидатов до выбора пользователем; явный запрет неканонических форм бренда
- `BRAND_KEENDWELL.md`: шапка обновлена под актуальный статус (canonical text form `KEEN·DWELL` залочен, exploration в `Wordmark Exploration.html` касается только typography, dev/staging адрес, социальный хэндл, ссылка на ADR-013/014, дата 2026-05-20). §3 «Lockup considerations» содержит явный forbidden-forms-список. §7 «Risks» обновлена: устаревшая строка про CamelCase убрана
- `BRAND_KEENDWELL.md`, `BRANDING_ROLLOUT_PLAN.md`, `TRADEMARK_RESEARCH.md`, `Brand Messaging KeenDwell.md`: все упоминания бренда в контенте переписаны на `KEEN·DWELL`; ссылки на `PROJECT_BRIEF.md` обновлены на `Fossilized/PROJECT_BRIEF-v1.0.md`
- `README.md` переписан под `KEEN·DWELL`: ссылки на keendwell.com и dev.keendwell.com, обновлённая структура репо (новые брендовые документы в корне, `Fossilized/PROJECT_BRIEF-v1.0.md`), индекс документации с ролями, roadmap

### Removed
- `PROJECT_BRIEF.md` из корня репозитория - перенесён в `Fossilized/PROJECT_BRIEF-v1.0.md`. Актуальное состояние теперь распределено: бренд - `BRAND_KEENDWELL.md`; роллаут - `BRANDING_ROLLOUT_PLAN.md`; TM - `TRADEMARK_RESEARCH.md`; правила и индекс - `Actual DOCS/CLAUDE.md` (v1.3.1); архитектурные решения - `Actual DOCS/DECISION_LOG.md`

### Versioning rationale
- По SemVer ребрендинг квалифицируется как MAJOR (аналогично переходу DevHome -> SmartBuildTech в 2.0.0). Новый цикл начинается с 3.0.0
- `CLAUDE.md` версионируется отдельно и независимо (1.3.1): это правила, а не код проекта

### Deferred (явные open items, не входят в этот релиз)
- Финальный typographic treatment wordmark (`Wordmark Exploration.html`) - текстовая форма от этого не меняется
- Ребрендинг `index.html`: wordmark `Smart/Build/Tech` остаётся в проде до отдельной задачи
- Cal.com slug `time-reserving` остаётся (миграция отдельно, см. rollout Phase 0)
- Resend-домен пока не верифицирован под бренд (отправка по-прежнему с `onboarding@resend.dev`)
- Backend-эндпоинт `book.daria.style/api/contact` остаётся на старом домене до отдельной миграции
- Логотип не меняется: `LOGO/logo-dark.png` (см. ADR-009 и memory/feedback_use_existing_assets.md)
- Trust block, case studies, certifications, ICP statement, отсутствующие секции (Why/Cases/Tech/FAQ) - все из §5 фоссилизированного брифа - в работе через `BRANDING_ROLLOUT_PLAN.md` Phase 2

---

## [2.1.0] — 2026-05-12

### Added
- Универсальная контактная модалка (`ContactModal`) — открывается со всех CTA на странице; 4 способа связи: Schedule a call, Send a message, Request a callback, Leave your contact
- Backend FastAPI + Resend (`backend/`): принимает POST `/api/contact`, отправляет уведомление на `ddl.lsm@gmail.com`, опционально — письмо-подтверждение клиенту
- Backend задеплоен на OCI, порт 8010, проксируется через nginx на `https://book.daria.style/api/`
- Cal.com бронирование через iframe: `cal.com/dmitrydm/time-reserving` с передачей `timezone` браузера
- CSS: `.modal-overlay`, `.modal-box`, `.modal-box.wide`, `.cal-iframe`, стили модала

### Changed
- Все CTA «Start a project» → «Tell me more» (Hero V1/V2/V3, Nav, CTA-карточка)
- Все кнопки-стрелки в карточках услуг → «I'm interested»
- «Write to us» → «Tell me more»

### Removed
- Cal.com self-hosted (контейнеры `calcom`, `calcom-db` остановлены) — заменён публичным `cal.com`
- Cal.com `embed.js` из `<head>` — iframe не требует JS-обёртки
- Прокси nginx `book.daria.style /` → Cal.com; осталось только `/api/`

### Documentation
- ADR-010: универсальная контактная модалка
- ADR-011: cal.com публичный вместо self-hosted
- ADR-012: Resend + FastAPI backend для обработки формы

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
