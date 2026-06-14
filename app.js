const industry = [
  {
    title: "АФА",
    category: "Архитектурное бюро",
    description: "Бюро, которое можно включить в каталог как пример команды, работающей с детскими и общественными пространствами.",
    specialization: ["детские площадки", "общественные пространства"],
    projects: "реализованные проекты и фотографии добавляются в карточку",
    site: "#",
    accent: "#ffe0eb"
  },
  {
    title: "Чехарда",
    category: "Архитектурное бюро",
    description: "Команда для раздела архитектурных бюро, специализирующихся на игровых пространствах и детской инфраструктуре.",
    specialization: ["игровые пространства", "детская среда"],
    projects: "карточку можно расширить галереей кейсов",
    site: "#",
    accent: "#cdeef1"
  },
  {
    title: "Дружба",
    category: "Бюро общественных пространств",
    description: "Бюро общественных пространств, которое среди прочего может работать с детскими сценариями и городской средой.",
    specialization: ["публичные пространства", "соучастие"],
    projects: "добавить список проектов, город и год",
    site: "#",
    accent: "#e2f0c1"
  },
  {
    title: "Мегабудка",
    category: "Производитель оборудования",
    description: "Производители игрового оборудования и объектов для площадок: важная часть экосистемы детской урбанистики.",
    specialization: ["оборудование", "игровые объекты"],
    projects: "добавить фотографии объектов и контакты",
    site: "#",
    accent: "#ffe08a"
  },
  {
    title: "Бюро детской среды",
    category: "Архитектурное бюро",
    description: "Шаблонная карточка для будущих участников каталога: описание, специализация, сайт, контакты, проекты.",
    specialization: ["исследования", "проектирование"],
    projects: "можно заменить на реальную организацию",
    site: "#",
    accent: "#ffd6c9"
  },
  {
    title: "Лаборатория игровых практик",
    category: "Исследовательская группа",
    description: "Пример карточки для исследователей, которые изучают игру, развитие, сценарии активности и городские пространства.",
    specialization: ["исследования", "методики"],
    projects: "добавить публикации и PDF",
    site: "#",
    accent: "#d9d6ff"
  }
];

const education = [
  {
    title: "Драконопроект",
    type: "Архитектура для детей",
    age: "дети и подростки",
    format: "мастерские, занятия, проектные практики",
    description: "Карточка образовательной инициативы: описание, возраст участников, формат и ссылка."
  },
  {
    title: "Детские архитектурные школы",
    type: "Архитектурные школы",
    age: "7–17 лет",
    format: "курсы и студии",
    description: "Раздел для школ, кружков и студий, которые объясняют детям архитектуру и город."
  },
  {
    title: "Урбанистика для подростков",
    type: "Урбанистика",
    age: "12–18 лет",
    format: "летние школы, воркшопы, прогулки",
    description: "Программы, где подростки исследуют район, собирают сценарии и предлагают изменения."
  },
  {
    title: "Профориентация",
    type: "Профориентация",
    age: "старшие школьники",
    format: "кружки, интенсивы, программы вузов",
    description: "Навигация для тех, кто хочет связать учебу с архитектурой, городом и исследованиями среды."
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
    text: "Therapeutic playgrounds можно оформить отдельным блоком: среда как поддержка реабилитации, восстановления и эмоциональной регуляции.",
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
    <button class="chip ${category === currentCategory ? "is-active" : ""}" data-category="${category}">${category}</button>
  `).join("");
}

function renderIndustry() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = industry.filter(item => {
    const matchesCategory = currentCategory === "Все" || item.category === currentCategory;
    const haystack = [item.title, item.category, item.description, item.specialization.join(" ")].join(" ").toLowerCase();
    return matchesCategory && haystack.includes(query);
  });
  grid.innerHTML = cards.map(item => `
    <article class="org-card reveal is-visible" style="--accent:${item.accent}">
      <div class="org-card__photo" aria-hidden="true"></div>
      <div>
        <span class="sticker sticker--pink">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <div class="org-card__meta">
        ${item.specialization.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="org-card__bottom">
        <span>${item.projects}</span>
        <a class="link" href="${item.site}">сайт</a>
      </div>
    </article>
  `).join("") || `<p>Ничего не найдено. Попробуй другой запрос.</p>`;
}

function renderEducation() {
  document.querySelector("#educationRail").innerHTML = education.map(item => `
    <article class="edu-card">
      <span class="edu-card__age">${item.age}</span>
      <div>
        <span class="sticker sticker--blue">${item.type}</span>
        <h3>${item.title}</h3>
      </div>
      <p>${item.description}</p>
      <p><b>Формат:</b> ${item.format}</p>
      <a class="link" href="#">добавить ссылку</a>
    </article>
  `).join("");
}

function renderKnowledge(activeIndex = 0) {
  const tabs = document.querySelector("#knowledgeTabs");
  const content = document.querySelector("#knowledgeContent");
  tabs.innerHTML = knowledge.map((item, index) => `
    <button class="knowledge-tab ${index === activeIndex ? "is-active" : ""}" data-index="${index}">${item.title}</button>
  `).join("");
  const item = knowledge[activeIndex];
  content.innerHTML = `
    <span class="sticker sticker--yellow">тема</span>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <div class="knowledge-list">
      ${item.items.map(([title, text]) => `<article class="knowledge-item"><b>${title}</b><span>${text}</span></article>`).join("")}
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

function setupMap() {
  const tooltip = document.querySelector("#mapTooltip");
  document.querySelectorAll(".pin").forEach(pin => {
    pin.addEventListener("click", () => {
      tooltip.textContent = pin.dataset.place + ": фото, авторы, год, сценарии активности и особенности.";
    });
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
    ].join("%0D%0A");
    window.location.href = `mailto:hello@example.com?subject=Добавить проект в Детскую среду&body=${body}`;
  });
}

renderFilters();
renderIndustry();
renderEducation();
renderKnowledge();
setupReveal();
setupNav();
setupMap();
setupForm();
document.querySelector("#year").textContent = new Date().getFullYear();

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
