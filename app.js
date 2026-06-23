const industry = [
  {
    title: "АФА",
    category: "Архитектурное бюро",
    specialization: ["детские площадки", "общественные пространства"],
    site: "https://afa-group.ru/?ysclid=mqdq604a1256782844",
    photo : "assets/img/99941ac78d0278d_1920x0.jpg",
    accent: "#ffe0eb"
  },
  {
    title: "Чехарда",
    category: "Архитектурное бюро",
    specialization: ["игровые пространства", "детская среда"],
    site: "https://chekharda.com/ru/?ysclid=mqdq71kkx6238992381",
    photo : "assets/img/5_Druzhba_600.jpg",
    accent: "#cdeef1"
  },
  {
    title: "Дружба",
    category: "Бюро общественных пространств",
    specialization: ["публичные пространства", "соучастие"],
    site: "https://burodruzhba.com/?ysclid=mqdq8lu2yw73354101",
    photo : "assets/img/DSC09079-result.jpg",
    accent: "#e2f0c1"
  }
];

const education = [
  {
    title: "Pole Urban",
    type: "VK video channel",
    source: "Pole Urban",
    retrieved: "April 26, 2026",
    site: "https://vkvideo.ru/@poleurban"
  },
  {
    title: "Город для меня",
    type: "Online resource",
    source: "Город для меня",
    retrieved: "April 26, 2026",
    site: "https://городдляменя.рф"
  },
  {
    title: "Playground Journal",
    type: "Telegram channel",
    source: "Playground Journal",
    retrieved: "April 26, 2026",
    site: "https://t.me/playgroundjournal"
  },
  {
    title: "Neurourbanism Blog",
    type: "Telegram channel",
    source: "Neurourbanism blog",
    retrieved: "April 26, 2026",
    site: "https://t.me/neurourbanism_blog"
  },
  {
    title: "Urbanfield",
    type: "Telegram channel",
    source: "Urbanfield",
    retrieved: "April 26, 2026",
    site: "https://t.me/urbanfield"
  }
];

const knowledge = [
  {
    title: "Игра и развитие",
    text: "Почему игра важна для развития ребенка и как среда может поддерживать воображение, движение, коммуникацию и самостоятельность.",
    items: [
      ["Роль игры", "игра как способ познания пространства и социальных правил"],
      ["Развитие через среду", "материалы, масштабы, маршруты, точки выбора"]
    ]
  },
  {
    title: "Сценарии активности",
    text: "Activity scenarios помогают описывать не только объект площадки, но и то, что на ней реально делают разные группы пользователей.",
    items: [
      ["Что описывать", "движение, наблюдение, общение, риск, спокойные занятия"],
      ["Как проектировать", "собрать сценарии, проверить конфликты, оставить свободу использования"]
    ]
  },
  {
    title: "Допустимый риск",
    text: "Risk-benefit подход не убирает вызов полностью, а помогает отличать полезный риск от опасности, которую пользователь не может оценить.",
    items: [
      ["Challenge playgrounds", "пространства, где есть выбор сложности"],
      ["Баланс", "безопасность плюс возможность пробовать, ошибаться и учиться"]
    ]
  },
  {
    title: "Природные пространства",
    text: "Nature play и adventure playgrounds используют рельеф, растения, воду, песок, ветки и изменяемую среду как основу игры.",
    items: [
      ["Nature play", "контакт с природными материалами и сезонностью"],
      ["Adventure playgrounds", "больше свободы, самостоятельности и конструирования"]
    ]
  },
  {
    title: "Инклюзивность",
    text: "Инклюзивная игровая среда учитывает разные тела, сенсорные особенности, нейроразнообразие и разные способы участия в игре.",
    items: [
      ["Универсальный дизайн", "доступность без стигматизации и отдельного маршрута"],
      ["Нейроразнообразие", "тихие зоны, предсказуемость, сенсорная вариативность"]
    ]
  },
  {
    title: "Терапевтические площадки",
    text: "Therapeutic playgrounds рассматривают игровую среду как поддержку реабилитации, восстановления и эмоциональной регуляции.",
    items: [
      ["Терапевтические сценарии", "сенсорные, двигательные, социальные и спокойные практики"],
      ["Методические рекомендации", "как связать дизайн, педагогов, врачей и семьи"]
    ]
  }
];

const grid = document.querySelector("#industryGrid");
const filters = document.querySelector("#industryFilters");
const searchInput = document.querySelector("#industrySearch");
const categories = ["Все", ...new Set(industry.map(item => item.category))];
let currentCategory = "Все";

function renderFilters() {
  filters.innerHTML = categories.map(category => `
    <button class="chip ${category === currentCategory ? "is-active" : ""}" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function renderIndustry() {
  const query = searchInput.value.trim().toLowerCase();

  const cards = industry.filter(item => {
    const matchesCategory = currentCategory === "Все" || item.category === currentCategory;
    const haystack = [item.title, item.category, item.specialization.join(" ")].join(" ").toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  grid.innerHTML = cards.map(item => `
    <article class="org-card reveal is-visible" style="--accent:${item.accent}">
      <div class="org-card__photo">
        ${item.photo ? `<img src="${item.photo}" alt="${item.title}">` : ""}
      </div>
      <div>
        <span class="sticker sticker--pink">${item.category}</span>
        <h3>${item.title}</h3>
      </div>
      <div class="org-card__bottom">
        <a class="link" href="${item.site}" target="_blank" rel="noopener">сайт ↗</a>
      </div>
    </article>
  `).join("") || `<p>Ничего не найдено. Измените запрос.</p>`;
}

function renderEducation() {
  document.querySelector("#educationRail").innerHTML = education.map(item => `
    <article class="edu-card">
      <div class="edu-card__badges">
        <span class="edu-card__meta">${item.type}</span>
        <span class="sticker sticker--blue">образование</span>
      </div>
      <div>
        <h3>${item.title}</h3>
      </div>
      <a class="link" href="${item.site}" target="_blank" rel="noopener">открыть ресурс ↗</a>
    </article>
  `).join("");
}

function renderKnowledge(activeIndex = 0) {
  const tabs = document.querySelector("#knowledgeTabs");
  const content = document.querySelector("#knowledgeContent");

  tabs.innerHTML = knowledge.map((item, index) => `
    <button class="knowledge-tab ${index === activeIndex ? "is-active" : ""}" data-index="${index}">
      ${item.title}
    </button>
  `).join("");

  const item = knowledge[activeIndex];

  content.innerHTML = `
    <span class="sticker sticker--yellow">тема</span>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <div class="knowledge-list">
      ${item.items.map(([title, text]) => `
        <article class="knowledge-item">
          <b>${title}</b>
          <span>${text}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen.toString());
    toggle.textContent = isOpen ? "×" : "☰";
  });

  nav.addEventListener("click", event => {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }
  });
}

function setupForm() {
  const form = document.querySelector("#submitForm");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);

    const body = [
      "Здравствуйте! Хочу добавить проект на сайт.",
      "",
      `Название: ${data.get("name")}`,
      `Тип: ${data.get("type")}`,
      `Описание: ${data.get("description")}`
    ].join("\r\n");

    const subject = encodeURIComponent("Добавить проект в Детскую среду");
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:?subject=${subject}&body=${encodedBody}`;
  });
}

function setupPlayObjects() {
  const objects = [...document.querySelectorAll(".play-object")];
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!objects.length || reduceMotion) return;

  let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let hasPointer = false;
  const motion = objects.map((object, index) => ({
    object,
    depth: Number(object.dataset.depth || 0.7),
    phase: index * 0.88,
    mass: 0.82 + (index % 4) * 0.18,
    gravity: 0.045 + (index % 5) * 0.008,
    drag: 0.88 + (index % 3) * 0.018,
    spring: 0.022 + (index % 4) * 0.004,
    scrollVX: 0,
    scrollVY: 0,
    spinVelocity: 0,
    cursorX: 0,
    cursorY: 0,
    spin: 0,
    scrollX: 0,
    scrollY: 0,
    scrollSpin: 0,
    targetCursorX: 0,
    targetCursorY: 0,
    targetSpin: 0
  }));
  let previousScroll = window.scrollY;
  let previousTime = performance.now();

  function updateTargets() {
    motion.forEach(item => {
      const { object, depth } = item;
      const rect = object.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      if (!hasPointer || !canHover) {
        item.targetCursorX = 0;
        item.targetCursorY = 0;
        item.targetSpin = 0;
        return;
      }

      const deltaX = centerX - pointer.x;
      const deltaY = centerY - pointer.y;
      const distance = Math.hypot(deltaX, deltaY);
      const radius = 270;
      const force = Math.max(0, 1 - distance / radius);
      const push = force * 26 * depth;
      const angle = Math.atan2(deltaY, deltaX);

      item.targetCursorX = Math.cos(angle) * push;
      item.targetCursorY = Math.sin(angle) * push;
      item.targetSpin = force * depth * 10;
    });
  }

  function renderMotion() {
    const scroll = window.scrollY;
    const now = performance.now();
    const dt = Math.min((now - previousTime) / 16.67, 2);
    const scrollDelta = Math.max(-80, Math.min(80, scroll - previousScroll));
    const scrollVelocity = scrollDelta / Math.max(dt, 0.35);

    updateTargets();

    motion.forEach(item => {
      const swing = Math.sin(item.phase + scroll * 0.0018);
      const direction = item.phase % 2 > 1 ? -1 : 1;
      const impulse = scrollVelocity * item.depth / item.mass;
      const gravity = item.gravity * dt;
      const springX = -item.scrollX * item.spring * dt;
      const springY = -item.scrollY * item.spring * dt;
      const springSpin = -item.scrollSpin * item.spring * 0.46 * dt;

      item.scrollVX += (impulse * 0.035 * direction + springX) * dt;
      item.scrollVY += (impulse * -0.09 + gravity + springY) * dt;
      item.spinVelocity += (impulse * 0.09 * direction + springSpin) * dt;

      item.scrollVX *= Math.pow(item.drag, dt);
      item.scrollVY *= Math.pow(item.drag - 0.018, dt);
      item.spinVelocity *= Math.pow(item.drag - 0.025, dt);

      item.cursorX += (item.targetCursorX - item.cursorX) * 0.075;
      item.cursorY += (item.targetCursorY - item.cursorY) * 0.075;
      item.spin += (item.targetSpin - item.spin) * 0.075;
      item.scrollX = Math.max(-52, Math.min(52, item.scrollX + item.scrollVX * dt + swing * 0.025));
      item.scrollY = Math.max(-36, Math.min(36, item.scrollY + item.scrollVY * dt));
      item.scrollSpin = Math.max(-22, Math.min(22, item.scrollSpin + item.spinVelocity * dt));

      item.object.style.setProperty("--cursor-x", `${item.cursorX.toFixed(2)}px`);
      item.object.style.setProperty("--cursor-y", `${item.cursorY.toFixed(2)}px`);
      item.object.style.setProperty("--scroll-x", `${item.scrollX.toFixed(2)}px`);
      item.object.style.setProperty("--scroll-y", `${item.scrollY.toFixed(2)}px`);
      item.object.style.setProperty("--spin", `${item.spin.toFixed(2)}deg`);
      item.object.style.setProperty("--scroll-spin", `${item.scrollSpin.toFixed(2)}deg`);
      item.object.style.opacity = hasPointer && Math.abs(item.targetSpin) > 0.2 ? "0.72" : "";
    });

    previousScroll = scroll;
    previousTime = now;
    requestAnimationFrame(renderMotion);
  }

  window.addEventListener("pointermove", event => {
    hasPointer = true;
    pointer = { x: event.clientX, y: event.clientY };
  });

  window.addEventListener("pointerleave", () => {
    hasPointer = false;
  });

  requestAnimationFrame(renderMotion);
}

renderFilters();
renderIndustry();
renderEducation();
renderKnowledge();
setupReveal();
setupNav();
setupForm();
setupPlayObjects();

filters.addEventListener("click", event => {
  const button = event.target.closest(".chip");
  if (!button) return;

  currentCategory = button.dataset.category;
  renderFilters();
  renderIndustry();
});

searchInput.addEventListener("input", renderIndustry);

document.querySelector("#knowledgeTabs").addEventListener("click", event => {
  const button = event.target.closest(".knowledge-tab");
  if (!button) return;

  renderKnowledge(Number(button.dataset.index));
});

document.querySelector("#year").textContent = new Date().getFullYear();
