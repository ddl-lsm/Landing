# DevHome Landing Page

Лендинг для продвижения услуг по разработке мобильных/веб-приложений и настройке систем умного дома.

## Быстрый старт

```bash
# Просто открыть в браузере
open index.html

# Или запустить локальный сервер
npx serve .
# → http://localhost:3000
```

## Структура проекта

```
Landing/
├── index.html          # Единственная HTML-страница
├── style.css           # Все стили (CSS Variables + BEM-like)
├── script.js           # Поведение: nav scroll, анимации, форма
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml  # Автодеплой на GitHub Pages
└── Actual DOCS/
    ├── README.md       # Этот файл — обзор проекта
    ├── CLAUDE.md       # Контекст для AI-ассистента
    ├── CHANGELOG.md    # История изменений
    └── DECISION_LOG.md # Журнал архитектурных решений
```

## Технологии

| Слой        | Решение                          |
|-------------|----------------------------------|
| HTML        | Семантический HTML5, без фреймворков |
| CSS         | Ванильный CSS с переменными (`:root`) |
| JS          | Ванильный ES6+, без зависимостей |
| Шрифты      | Google Fonts — Inter              |
| Иконки      | Inline SVG                       |
| CI/CD       | GitHub Actions → GitHub Pages                    |
| Деплой      | GitHub Pages (автоматически при push в main)      |

## Секции лендинга

1. **Nav** — фиксированный, с blur-эффектом при скролле
2. **Hero** — заголовок, CTA-кнопки, статистика, орбы-градиенты
3. **Services** — 6 карточек услуг с ценами
4. **How it works** — 5 шагов процесса
5. **Cases** — 3 кейса с визуальными превью
6. **Tech stack** — пилюли с технологиями
7. **FAQ** — аккордеон на нативном `<details>`
8. **Contact** — форма + контактные данные
9. **Footer** — лицензия, ссылки

## Дизайн-токены

Все визуальные переменные описаны в `:root` в начале `style.css`:

```css
--bg, --bg-alt, --surface, --surface-2  /* фоны */
--text, --text-2, --text-3              /* текст */
--accent, --accent-2, --accent-glow     /* акцентный цвет */
--border, --border-2                    /* рамки */
--radius, --radius-lg, --radius-xl      /* скругления */
```

## Адаптивность

- `> 900px` — три колонки в сетках
- `≤ 900px` — две колонки, контакты в колонку
- `≤ 640px` — одна колонка, мобильный nav

## Деплой

Деплой автоматический — достаточно запушить в `main`.

```bash
git push origin main
# → GitHub Actions запускает deploy.yml
# → сайт обновляется на https://ddl-lsm.github.io/Lending/
```

**Ручной запуск:** GitHub → Actions → Deploy to GitHub Pages → Run workflow

**Статус деплоя:** https://github.com/ddl-lsm/Lending/actions

**Живой сайт:** https://ddl-lsm.github.io/Lending/
