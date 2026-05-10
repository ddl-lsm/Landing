/* global React, ReactDOM, SmartHomeDemo, HeroOrbit, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor, TweakToggle */
const { useState, useEffect, useRef } = React;

// =========================================================
// HERO V1 — CENTERED MANIFESTO (criptopro.fit-inspired)
// =========================================================
function HeroV1() {
  return (
    <section className="hero hero-v1">
      <div className="container">
        <div className="eyebrow"><span className="dot"></span>Разработка · Автоматизация · Умный дом</div>
        <h1 className="h-display" data-anim>
          Дом, который<br/>думает <span className="underline">за тебя</span>
        </h1>
        <p className="h-sub" data-anim>
          Делаем мобильные и веб-приложения и настраиваем системы умного дома —
          от первой идеи до запуска и поддержки.
        </p>
        <div className="h-actions" data-anim>
          <a href="#contact" className="btn btn-primary btn-lg btn-arrow">
            Обсудить проект
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#services" className="btn btn-ghost btn-lg">Что мы умеем</a>
        </div>

        <div className="scroll-marquee" style={{ marginTop: 70 }}>
          <div className="scroll-marquee-track">
            <span>iOS · Android</span><span>Home Assistant</span><span>KNX · Zigbee · Matter</span>
            <span>React Native</span><span>Apple HomeKit</span><span>Алиса · Google</span>
            <span>Next.js</span><span>Telegram-боты</span><span>MQTT</span>
            <span>iOS · Android</span><span>Home Assistant</span><span>KNX · Zigbee · Matter</span>
            <span>React Native</span><span>Apple HomeKit</span><span>Алиса · Google</span>
            <span>Next.js</span><span>Telegram-боты</span><span>MQTT</span>
          </div>
        </div>

        <div data-anim style={{ maxWidth: 980, margin: "20px auto 0" }}>
          <SmartHomeDemo />
        </div>
      </div>
    </section>
  );
}

// =========================================================
// HERO V2 — SPLIT (text + orbiting visual)
// =========================================================
function HeroV2() {
  return (
    <section className="hero hero-v2">
      <div className="container">
        <div data-anim>
          <div className="eyebrow"><span className="dot"></span>Студия DevHome · С 2021</div>
          <h1 className="h-display">
            Технологии,<br/>
            <span className="underline">которые работают</span><br/>
            за тебя
          </h1>
          <p className="h-sub">
            От мобильных приложений до полной автоматизации квартиры или дома.
            Работаем по этапам и без сюрпризов в смете.
          </p>
          <div className="h-actions">
            <a href="#contact" className="btn btn-primary btn-lg btn-arrow">
              Начать проект
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#services" className="btn btn-ghost btn-lg">Услуги</a>
          </div>
          <div className="stats-row">
            <div className="stat">
              <span className="num">60+</span>
              <span className="lbl">Проектов</span>
            </div>
            <div className="stat">
              <span className="num">98%</span>
              <span className="lbl">Довольных</span>
            </div>
            <div className="stat">
              <span className="num">5 лет</span>
              <span className="lbl">На рынке</span>
            </div>
          </div>
        </div>
        <div data-anim>
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
}

// =========================================================
// HERO V3 — PRODUCT-LED (small text, big live demo)
// =========================================================
function HeroV3() {
  return (
    <section className="hero hero-v3">
      <div className="container">
        <div className="eyebrow" style={{ justifyContent: "center" }}><span className="dot"></span>Живая демо · Управление домом</div>
        <h1 className="h-display" data-anim>
          Один экран — <span className="underline">весь дом</span>
        </h1>
        <p className="h-sub" data-anim>
          Свет, климат, безопасность и сценарии — всё в одном интерфейсе.
          Кликай по комнатам ниже, чтобы попробовать.
        </p>
        <div className="h-actions" data-anim>
          <a href="#contact" className="btn btn-yellow btn-lg btn-arrow">
            Хочу такой же
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#process" className="btn btn-ghost btn-lg">Как мы это делаем</a>
        </div>

        <div className="product-stage" data-anim>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <SmartHomeDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SERVICES (asymmetric grid with featured)
// =========================================================
function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="lhs">
            <div className="eyebrow"><span className="dot"></span>Услуги</div>
            <h2 className="section-title">Что мы <span className="accent">делаем</span></h2>
          </div>
          <p className="section-sub">
            Под ключ: от первого брифа до запуска. Можешь взять одну услугу или собрать пакет.
          </p>
        </div>

        <div className="svc-grid">
          {/* Featured: Mobile (span-7, dark with preview) */}
          <div className="svc featured span-7" data-anim>
            <div className="svc-num mono">01 / 05</div>
            <div className="svc-icn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="12" y1="18" x2="12" y2="18.01"/>
              </svg>
            </div>
            <h3>Мобильные<br/>приложения</h3>
            <p>iOS, Android и кросс-платформа. UI/UX-дизайн, разработка, публикация в сторах, поддержка.</p>
            <div className="preview-strip">
              <PhonePreview />
            </div>
            <ul className="svc-bullets">
              <li>Прототип за 3 дня</li>
              <li>MVP за 4–6 недель</li>
              <li>Push, геолокация, платежи, оффлайн</li>
            </ul>
            <div className="svc-foot">
              <div className="price">от <b>150 000 ₽</b></div>
              <div className="arr">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Web (span-5) */}
          <div className="svc span-5" data-anim>
            <div className="svc-num mono">02 / 05</div>
            <div className="svc-icn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <h3>Веб-приложения и&nbsp;порталы</h3>
            <p>SPA, PWA, корпоративные системы и CRM. React, Next.js, Node.js, Postgres. Хостинг и DevOps под ключ.</p>
            <ul className="svc-bullets">
              <li>Адаптивный дизайн и SEO</li>
              <li>Интеграции с 1С, AmoCRM, Bitrix</li>
              <li>Высокая нагрузка</li>
            </ul>
            <div className="svc-foot">
              <div className="price">от <b>80 000 ₽</b></div>
              <div className="arr">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Smart home (span-5) */}
          <div className="svc span-5" data-anim>
            <div className="svc-num mono">03 / 05</div>
            <div className="svc-icn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>Умный дом</h3>
            <p>Проектируем и монтируем системы автоматизации. Свет, климат, безопасность, ворота, мультирум — с управлением с телефона и голосом.</p>
            <ul className="svc-bullets">
              <li>Home Assistant, Apple HomeKit</li>
              <li>KNX, Zigbee, Z-Wave, Matter</li>
              <li>Алиса, Google, Сири</li>
            </ul>
            <div className="svc-foot">
              <div className="price">от <b>50 000 ₽</b></div>
              <div className="arr">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* IoT (span-7 with photo placeholder) */}
          <div className="svc span-7" data-anim>
            <div className="svc-num mono">04 / 05</div>
            <PhotoPlaceholder
              label="Фото: подключение датчика"
              ratio="16/9"
              radius={12}
            />
            <div>
              <div className="svc-icn" style={{ display: "inline-flex" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
                  <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/>
                </svg>
              </div>
              <h3 style={{ marginTop: 14 }}>IoT и автоматизация</h3>
              <p>Подключаем датчики, контроллеры, промышленное оборудование. MQTT, REST, облако, Telegram-уведомления.</p>
            </div>
            <div className="svc-foot">
              <div className="price">от <b>30 000 ₽</b></div>
              <div className="arr">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Support (span-12) */}
          <div className="svc span-7" data-anim>
            <div className="svc-num mono">05 / 05</div>
            <div className="svc-icn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <h3>Техподдержка 24/7</h3>
            <p>Сопровождаем уже запущенные проекты. Мониторинг, обновления, исправление багов, масштабирование.</p>
            <ul className="svc-bullets">
              <li>SLA до 2 часов на ответ</li>
              <li>Ежемесячные отчёты</li>
              <li>Выделенный менеджер</li>
            </ul>
            <div className="svc-foot">
              <div className="price">от <b>10 000 ₽/мес</b></div>
              <div className="arr">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* CTA card span-5 */}
          <div className="svc span-5" data-anim style={{
            background: "var(--yellow-soft)",
            borderColor: "transparent",
            borderStyle: "dashed",
            justifyContent: "space-between",
          }}>
            <div>
              <h3>Не нашёл свой случай?</h3>
              <p>Опиши задачу — предложим решение и стоимость в течение одного рабочего дня. Бесплатно.</p>
            </div>
            <a href="#contact" className="btn btn-primary btn-arrow" style={{ alignSelf: "flex-start" }}>
              Написать нам
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// PROCESS (dark, list-style)
// =========================================================
const STEPS = [
  { n: "01", t: "Бриф и анализ", d: "Изучаем задачу, аудиторию, конкурентов. Фиксируем требования в документе и согласуем перед стартом.", time: "1 неделя", out: "ТЗ, бюджет" },
  { n: "02", t: "Прототип и дизайн", d: "Делаем wire-фреймы, кликабельный прототип, UI-кит. Собираем обратную связь и согласуем до разработки.", time: "2–3 недели", out: "Figma, прототип" },
  { n: "03", t: "Разработка", d: "Спринты по 2 недели. Демо после каждой итерации. Доступ в Jira в реальном времени и видишь прогресс.", time: "от 4 недель", out: "Релизы каждые 2 нед" },
  { n: "04", t: "Тестирование и запуск", d: "QA, нагрузочное тестирование, публикация в сторах. Обучаем команду клиента работать с продуктом.", time: "2 недели", out: "Готовый продукт" },
  { n: "05", t: "Поддержка", d: "Мониторинг 24/7, обновления, новые фичи по мере роста продукта и сезонных задач.", time: "ежемесячно", out: "SLA 2 часа" },
];
function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-head">
          <div className="lhs">
            <div className="eyebrow"><span className="dot"></span>Процесс</div>
            <h2 className="section-title">Как мы <span className="accent" style={{ color: "var(--ink)" }}>работаем</span></h2>
          </div>
          <p className="section-sub">
            Прозрачно, по этапам, без сюрпризов. Ты всегда знаешь, что происходит и сколько осталось.
          </p>
        </div>

        <div className="proc-list">
          {STEPS.map(s => (
            <div className="proc" key={s.n} data-anim>
              <div className="pn mono">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="meta">
                <div><b>{s.time}</b></div>
                <div>{s.out}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// CONTACT
// =========================================================
function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section className="section" id="contact" style={{ background: "var(--bg-alt)" }}>
      <div className="container">
        <div className="contact-wrap">
          <aside className="contact-aside">
            <div className="eyebrow"><span className="dot"></span>Контакт</div>
            <h2 className="section-title">Обсудим<br/>твой <span className="accent">проект</span></h2>
            <p className="section-sub">
              Заполни форму — ответим в течение рабочего дня с оценкой стоимости и сроков. Или напиши нам напрямую.
            </p>

            <div className="contact-channels">
              <a href="tel:+79001234567" className="cc">
                <div className="cc-l">
                  <div className="cc-icn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="cc-name">Телефон</div>
                    <div className="cc-val">+7 (900) 123-45-67</div>
                  </div>
                </div>
                <div className="cc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </div>
              </a>
              <a href="https://t.me/devhome" className="cc">
                <div className="cc-l">
                  <div className="cc-icn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A0A0A"><path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.9 8.2-2 9.3c-.1.7-.5.8-1.1.5l-3-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.2-3 5.6-5c.2-.2-.1-.4-.4-.2L8.3 14.3l-3-.9c-.6-.2-.7-.6.1-.9l11.6-4.5c.5-.2 1 .1.8.3z"/></svg>
                  </div>
                  <div>
                    <div className="cc-name">Telegram</div>
                    <div className="cc-val">@devhome</div>
                  </div>
                </div>
                <div className="cc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </div>
              </a>
              <a href="mailto:hello@devhome.ru" className="cc">
                <div className="cc-l">
                  <div className="cc-icn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="cc-name">Почта</div>
                    <div className="cc-val">hello@devhome.ru</div>
                  </div>
                </div>
                <div className="cc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </div>
              </a>
            </div>

            <div className="contact-callout">
              <div className="av">АП</div>
              <p>Меня зовут Артём, я отвечаю за&nbsp;первое общение. Напиши <b>в любой удобный канал</b> — отвечу лично.</p>
            </div>
          </aside>

          {!sent ? (
            <form className="contact-form" onSubmit={submit}>
              <div className="fr">
                <div className="fg">
                  <label>Имя</label>
                  <input type="text" placeholder="Александр" required/>
                </div>
                <div className="fg">
                  <label>Телефон или email</label>
                  <input type="text" placeholder="+7 (900) 000-00-00" required/>
                </div>
              </div>
              <div className="fg">
                <label>Тип проекта</label>
                <select>
                  <option value="">Выбери...</option>
                  <option>Мобильное приложение</option>
                  <option>Веб-приложение</option>
                  <option>Умный дом</option>
                  <option>IoT / Автоматизация</option>
                  <option>Поддержка проекта</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="fg">
                <label>Бюджет</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                  {["до 150к", "150–500к", "500к–1.5М", "1.5М+"].map(b => (
                    <BudgetChip key={b} label={b}/>
                  ))}
                </div>
              </div>
              <div className="fg">
                <label>Расскажи о задаче</label>
                <textarea placeholder="Опиши, что нужно сделать, желаемые сроки..." rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-arrow" style={{ width: "100%" }}>
                Отправить заявку
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
              <p style={{ fontSize: 11, color: "var(--ink-3)", textAlign: "center", lineHeight: 1.5 }}>
                Нажимая кнопку, ты соглашаешься с политикой обработки персональных данных
              </p>
            </form>
          ) : (
            <div className="contact-form" style={{ alignItems: "center", justifyContent: "center", padding: 56, textAlign: "center" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "var(--yellow)", color: "var(--ink)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 22,
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>Заявка ушла!</h3>
              <p style={{ color: "var(--ink-2)", marginTop: 8 }}>
                Ответим в течение рабочего дня.<br/>Проверь почту или Telegram.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function BudgetChip({ label }) {
  const [active, setActive] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setActive(a => !a)}
      style={{
        padding: "10px 8px",
        fontSize: 13,
        borderRadius: 100,
        border: `1px solid ${active ? "var(--ink)" : "var(--border)"}`,
        background: active ? "var(--ink)" : "var(--bg)",
        color: active ? "#fff" : "var(--ink-2)",
        transition: "all 0.18s ease",
      }}
    >{label}</button>
  );
}

// =========================================================
// PHOTO PLACEHOLDER (for "real photos to come")
// =========================================================
function PhotoPlaceholder({ label = "Фото", ratio = "4/3", radius = 12 }) {
  return (
    <div style={{
      aspectRatio: ratio,
      width: "100%",
      borderRadius: radius,
      background: "linear-gradient(135deg, #F2F1EC 0%, #E6E5E0 100%)",
      border: "1px dashed var(--border-2)",
      position: "relative",
      overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.35 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#A8A8A4" strokeWidth="1"/>
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#A8A8A4" strokeWidth="1"/>
      </svg>
      <div style={{
        position: "relative",
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: 100,
        padding: "6px 14px",
        fontSize: 11,
        color: "var(--ink-3)",
        letterSpacing: "0.04em",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        {label}
      </div>
    </div>
  );
}

// =========================================================
// PHONE PREVIEW (small ambient mock inside featured card)
// =========================================================
function PhonePreview() {
  return (
    <svg viewBox="0 0 600 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1F1F1F"/>
          <stop offset="100%" stopColor="#0A0A0A"/>
        </linearGradient>
      </defs>
      <rect width="600" height="200" fill="url(#g1)"/>
      {/* Phone 1 */}
      <g transform="translate(120,18)">
        <rect width="110" height="180" rx="14" fill="#0A0A0A" stroke="#2A2A2A"/>
        <rect x="6" y="6" width="98" height="168" rx="10" fill="#141414"/>
        <rect x="14" y="20" width="60" height="6" rx="3" fill="#2A2A2A"/>
        <rect x="14" y="32" width="40" height="4" rx="2" fill="#2A2A2A"/>
        <rect x="14" y="50" width="82" height="34" rx="6" fill="#F5BC2D"/>
        <rect x="20" y="58" width="40" height="5" rx="2" fill="#0A0A0A"/>
        <rect x="20" y="68" width="60" height="9" rx="3" fill="#0A0A0A"/>
        <rect x="14" y="92" width="38" height="38" rx="6" fill="#1F1F1F"/>
        <rect x="58" y="92" width="38" height="38" rx="6" fill="#1F1F1F"/>
        <rect x="14" y="138" width="82" height="6" rx="3" fill="#2A2A2A"/>
        <rect x="14" y="150" width="62" height="6" rx="3" fill="#2A2A2A"/>
      </g>
      {/* Phone 2 */}
      <g transform="translate(260,28)">
        <rect width="110" height="180" rx="14" fill="#0A0A0A" stroke="#2A2A2A"/>
        <rect x="6" y="6" width="98" height="168" rx="10" fill="#141414"/>
        <circle cx="55" cy="50" r="22" fill="#F5BC2D" opacity="0.2"/>
        <circle cx="55" cy="50" r="14" fill="#F5BC2D"/>
        <rect x="14" y="86" width="82" height="6" rx="3" fill="#2A2A2A"/>
        <rect x="14" y="98" width="62" height="4" rx="2" fill="#2A2A2A"/>
        <rect x="14" y="118" width="38" height="38" rx="6" fill="#1F1F1F"/>
        <rect x="58" y="118" width="38" height="38" rx="6" fill="#1F1F1F"/>
      </g>
      {/* Phone 3 */}
      <g transform="translate(400,18)">
        <rect width="110" height="180" rx="14" fill="#0A0A0A" stroke="#2A2A2A"/>
        <rect x="6" y="6" width="98" height="168" rx="10" fill="#141414"/>
        <rect x="14" y="14" width="82" height="58" rx="8" fill="#F5BC2D" opacity="0.15"/>
        <path d="M55 28 v32 M40 50 l15 14 l15 -14" stroke="#F5BC2D" strokeWidth="2" fill="none"/>
        <rect x="14" y="84" width="82" height="6" rx="3" fill="#2A2A2A"/>
        <rect x="14" y="96" width="50" height="4" rx="2" fill="#2A2A2A"/>
        <rect x="14" y="116" width="82" height="40" rx="6" fill="#1F1F1F"/>
      </g>
    </svg>
  );
}

// =========================================================
// VARIANT BAR
// =========================================================
function VariantBar({ variant, setVariant }) {
  return (
    <div className="varbar">
      <span className="vb-label">Hero</span>
      <button className={variant === "v1" ? "active" : ""} onClick={() => setVariant("v1")}>01 · Манифест</button>
      <button className={variant === "v2" ? "active" : ""} onClick={() => setVariant("v2")}>02 · Сплит</button>
      <button className={variant === "v3" ? "active" : ""} onClick={() => setVariant("v3")}>03 · Продукт</button>
    </div>
  );
}

// =========================================================
// NAV
// =========================================================
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#" className="brand">
          <img src="assets/logo.png" alt="" />
          DevHome
        </a>
        <ul className="nav-links">
          <li><a href="#services">Услуги</a></li>
          <li><a href="#process">Процесс</a></li>
          <li><a href="#contact">Контакт</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary nav-cta">Обсудить проект</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="brand">
          <img src="assets/logo.png" alt="" />
          DevHome
        </a>
        <p className="copy">© 2026 DevHome. Все права защищены.</p>
        <div className="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Оферта</a>
        </div>
      </div>
    </footer>
  );
}

// =========================================================
// TWEAKS
// =========================================================
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F5BC2D",
  "darkProcess": true,
  "showMarquee": true
}/*EDITMODE-END*/;

function Tweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply accent live
  useEffect(() => {
    document.documentElement.style.setProperty("--yellow", t.accent);
  }, [t.accent]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Бренд">
        <TweakColor
          label="Акцентный цвет"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={["#F5BC2D", "#FF8A1F", "#3D5AFE", "#1FB87A", "#0A0A0A"]}
        />
      </TweakSection>
      <TweakSection title="Layout">
        <TweakToggle
          label="Бегущая строка тех-стека"
          value={t.showMarquee}
          onChange={(v) => setTweak("showMarquee", v)}
        />
        <TweakToggle
          label="Тёмная секция «Процесс»"
          value={t.darkProcess}
          onChange={(v) => setTweak("darkProcess", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// =========================================================
// APP
// =========================================================
function App() {
  const [variant, setVariant] = useState("v1");

  // entrance anim observer
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("[data-anim]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [variant]);

  return (
    <>
      <VariantBar variant={variant} setVariant={setVariant} />
      <Nav />
      {variant === "v1" && <HeroV1 />}
      {variant === "v2" && <HeroV2 />}
      {variant === "v3" && <HeroV3 />}
      <Services />
      <Process />
      <Contact />
      <Footer />
      <Tweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
