const industry = [
  {
    title: "АФА",
    category: "Архитектурное бюро",
    specialization: ["детские площадки", "общественные пространства"],
    site: "https://afa-group.ru/?ysclid=mqdq604a1256782844",
    photo : "assets/img/afa.jpg",
    accent: "#ffe0eb",
    projects: "Салют, Ферма на Белой Даче"
  },
  {
    title: "Чехарда",
    category: "Архитектурное бюро",
    specialization: ["игровые пространства", "детская среда"],
    site: "https://chekharda.com/ru/?ysclid=mqdq71kkx6238992381",
    photo : "assets/img/cheharda.jpg",
    accent: "#cdeef1",
    projects: "Шагающие деревья, Цветущий сад в Вологде"
  },
  {
    title: "Дружба",
    category: "Бюро общественных пространств",
    specialization: ["публичные пространства", "соучастие"],
    site: "https://burodruzhba.com/?ysclid=mqdq8lu2yw73354101",
    photo : "assets/img/drujba.jpg",
    accent: "#e2f0c1",
    projects: "Дворы Павловской гимназии, ЖК «Sydney City»"
  },
  {
    title: "Мегабудка",
    category: "Архитектурное бюро",
    specialization: ["игровые пространства", "общественные пространства"],
    site: "https://megabudka.ru/",
    photo : "assets/img/megabudka.jpg",
    accent: "#ffe8a3",
    projects: "Концепция площадки в квартале JAZZ в Москве"
  }
];

const education = [
  {
    title: "Pole Urban",
    type: "образовательный проект",
    source: "Pole Urban",
    retrieved: "April 26, 2026",
    site: "https://vkvideo.ru/@poleurban"
  },
  {
    title: "Город для меня",
    type: "ассоциация соуч. проектирования",
    source: "Город для меня",
    retrieved: "April 26, 2026",
    site: "https://городдляменя.рф"
  },
  {
    title: "Playground Journal",
    type: "телеграм-канал",
    source: "Playground Journal",
    retrieved: "April 26, 2026",
    site: "https://t.me/playgroundjournal"
  },
  {
    title: "Neurourbanism Blog",
    type: "телеграм-канал",
    source: "Neurourbanism blog",
    retrieved: "April 26, 2026",
    site: "https://t.me/neurourbanism_blog"
  },
  {
    title: "Urbanfield",
    type: "телеграм-канал",
    source: "Urbanfield",
    retrieved: "April 26, 2026",
    site: "https://t.me/urbanfield"
  }
];

const knowledge = [
  {
    title: "Сценарии активности",
    text: "Игровое пространство можно рассматривать не как набор оборудования, а как систему сценариев: маршрутов, ролей, способов пребывания и взаимодействия детей, родителей, подростков и других горожан.",
    items: [
      ["Проектный сценарий", "то, что задают архитектура, зонирование и оборудование: движение, риск, сюжет, спокойные зоны, точки наблюдения"],
      ["Пользовательская практика", "то, как посетители реально присваивают пространство, усиливают одни функции и придумывают новые способы игры"]
    ]
  },
  {
    title: "Игровые элементы",
    text: "Аффордансы помогают описывать, какие возможности для действия предлагает среда. Горка, канат, песок, скамейка или дерево важны не сами по себе, а через то, что они позволяют сделать разным пользователям.",
    items: [
      ["Для ребенка", "залезть, спрятаться, построить, балансировать, выбрать маршрут, придумать сюжет"],
      ["Для взрослого", "наблюдать, сопровождать, помогать, включаться в игру или оставаться рядом"]
    ]
  },
  {
    title: "Автономия и вовлеченность",
    text: "Качественная площадка поддерживает автономию, компетентность и связанность. Чем больше выбора, посильного вызова и контакта, тем выше вовлеченность пользователей.",
    items: [
      ["Автономия", "ребенок выбирает траекторию, темп, роль и степень участия"],
      ["Компетентность", "конструкции дают опыт преодоления: залезть, пройти маршрут, удержаться, договориться"]
    ]
  },
  {
    title: "Природа и риск",
    text: "Наиболее насыщенные сценарии возникают там, где есть природные и сенсорные материалы, высотные элементы, канаты, рельеф и возможность допустимого риска.",
    items: [
      ["Песок, вода, дерево", "запускают строительство, пересыпание, телесный опыт, совместные действия и сюжетную игру"],
      ["Высота и канаты", "создают вызов, требуют концентрации и часто вовлекают взрослого как наблюдателя или помощника"]
    ]
  },
  {
    title: "Авторское и типовое",
    text: "Сравнение авторских и типовых площадок показывает, что близость к дому важна, но сама по себе не создает сценарной насыщенности. Типовая площадка часто остается фоном, если рядом есть более выразительная среда.",
    items: [
      ["Авторские площадки", "чаще соединяют зоны, маршруты, сюжет, риск, материалы и разные возрастные группы"],
      ["Типовые площадки", "дают базовую функцию и безопасность, но реже провоцируют воображение, исследование и длительное пребывание"]
    ]
  },
  {
    title: "Дети как соавторы",
    text: "Развитие детских пространств нельзя сводить только к работе архитекторов или городских властей. Важны междисциплинарность, наблюдение за практиками и соучаствующее проектирование.",
    items: [
      ["Соучастие", "прогулки, карты, макеты и обсуждение сценариев помогают проектировать не абстрактно, а через опыт детей"],
      ["Городская функция", "площадка становится местом общения, эмоциональной разгрузки и связи ребенка, взрослого и города"]
    ]
  }
];

const grid = document.querySelector("#industryGrid");

function applyTypography(root = document.body) {
  const smallWords = "а|в|во|и|или|к|ко|на|не|но|о|об|обо|от|по|с|со|у|за|из|до|для|над|под|при";
  const pattern = new RegExp(`(^|[\\s(«"„])(${smallWords})\\s+`, "giu");
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    node.nodeValue = node.nodeValue.replace(pattern, `$1$2\u00A0`);
  });
}

function renderIndustry() {
  grid.innerHTML = industry.map(item => `
    <article class="org-card org-card--enter reveal is-visible" style="--accent:${item.accent}">
      <div class="org-card__photo">
        ${item.photo ? `<img src="${item.photo}" alt="${item.title}">` : ""}
      </div>
      <div>
        <span class="sticker sticker--pink org-card__project-sticker">${item.projects}</span>
        <h3>${item.title}</h3>
      </div>
      ${item.site ? `
        <div class="org-card__bottom">
          <a class="link" href="${item.site}" target="_blank" rel="noopener">сайт ↗</a>
        </div>
      ` : ""}
    </article>
  `).join("");
}

function renderEducation() {
  document.querySelector("#educationRail").innerHTML = education.map(item => `
    <article class="edu-card">
      <div class="edu-card__badges">
        <span class="edu-card__meta">${item.type}</span>
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
  const topbar = document.querySelector(".topbar");
  const logo = document.querySelector(".logo[href='#top']");
  const scrollTopLink = document.querySelector("[data-scroll-top]");

  function getScrollOffset() {
    return (topbar?.getBoundingClientRect().height || 0) + 28;
  }

  function getSectionAnchor(target) {
    if (!target.classList.contains("section")) return target;

    return target.querySelector(".section__label, .section__head, .split") || target;
  }

  function scrollToHash(hash) {
    if (hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname + window.location.search);
      return;
    }

    const target = document.querySelector(hash);
    if (!target) return;

    const anchor = getSectionAnchor(target);
    const top = Math.max(0, window.scrollY + anchor.getBoundingClientRect().top - getScrollOffset());

    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", hash);
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen.toString());
    toggle.textContent = isOpen ? "×" : "☰";
  });

  nav.addEventListener("click", event => {
    const link = event.target.closest("a[href^='#']");
    if (!link) return;

    event.preventDefault();
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
    scrollToHash(link.hash);
  });

  scrollTopLink?.addEventListener("click", event => {
    event.preventDefault();
    scrollToHash("#top");
  });

  logo?.addEventListener("click", event => {
    event.preventDefault();
    scrollToHash("#top");
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
    gravity: 0,
    drag: 0.9 + (index % 3) * 0.018,
    spring: 0.03 + (index % 4) * 0.004,
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
      const hasScrollImpulse = Math.abs(scrollDelta) > 0.5;
      const swing = hasScrollImpulse ? Math.sin(item.phase + scroll * 0.0018) : 0;
      const direction = item.phase % 2 > 1 ? -1 : 1;
      const impulse = hasScrollImpulse ? scrollVelocity * item.depth / item.mass : 0;
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
      item.scrollX = Math.max(-52, Math.min(52, item.scrollX + item.scrollVX * dt + swing * 0.012));
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

renderIndustry();
renderEducation();
renderKnowledge();
applyTypography();
setupReveal();
setupNav();
setupPlayObjects();

document.querySelector("#knowledgeTabs").addEventListener("click", event => {
  const button = event.target.closest(".knowledge-tab");
  if (!button) return;

  renderKnowledge(Number(button.dataset.index));
  applyTypography(document.querySelector("#knowledge"));
});

document.querySelector("#year").textContent = new Date().getFullYear();
