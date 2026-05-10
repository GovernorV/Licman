const translations = {
  ru: {
    nav: { features: "Возможности", pricing: "Цены", demo: "Демо", screens: "Скриншоты" },
    hero: {
      eyebrow: "Менеджер лицензий и договоров",
      title: "License Manager",
      text: "Контроль лицензий, договоров, сроков действия, ответственных лиц и уведомлений в одной рабочей программе.",
      demo: "Скачать демо",
      pricing: "Посмотреть цены"
    },
    features: {
      eyebrow: "Ключевые возможности",
      title: "Все важные лицензии под контролем",
      items: [
        { title: "Единый реестр", text: "Таблица лицензий и договоров с номером договора, контрагентом, названием, датами, ценой, количеством, типом и отделом." },
        { title: "Сроки и уведомления", text: "Контроль окончания лицензий с уведомлениями за 90, 30 и 15 дней через SQL Server Agent и Database Mail." },
        { title: "Роли и доступ", text: "Администратор, супервайзер, пользователь и гость с ограничением доступа по ролям и отделам." },
        { title: "Поиск и фильтры", text: "Поиск по выбранному полю, фильтрация по датам, типу и признаку активности, сортировка по колонкам." },
        { title: "Экспорт", text: "Экспорт текущей таблицы в Excel для отчетности и дальнейшего анализа." },
        { title: "Цветовая индикация", text: "Белый, желтый, оранжевый, красный и черный статусы помогают быстро увидеть приближающиеся и просроченные окончания." }
      ]
    },
    pricing: {
      eyebrow: "Стоимость",
      title: "Простые варианты покупки и аренды",
      buy: { title: "Покупка", extra: "+ 3 000 руб. за дополнительное рабочее место" },
      month: { title: "Аренда на месяц", extra: "+ 100 руб. за дополнительное рабочее место" },
      year: { title: "Аренда на год", extra: "+ 1 000 руб. за дополнительное рабочее место" },
      note: "В английской версии цены указаны в евро по курсу 100 руб./евро."
    },
    demo: {
      eyebrow: "Демо-версия",
      title: "Попробуйте программу перед внедрением",
      link: "Открыть демо на Яндекс Диске",
      limitsTitle: "Ограничения демо",
      limits: [
        "Используется база данных LicManDemo.",
        "Сохранение и удаление данных заблокированы.",
        "Администрирование пользователей и резервное копирование отключены.",
        "Экспорт ограничен и помечен как DEMO.",
        "Интерфейс помечен как Demonstration mode."
      ]
    },
    screens: {
      eyebrow: "Скриншоты",
      title: "Основной экран",
      caption: "Главное окно: редактор лицензии, создание, управление, поиск, фильтр и таблица договоров."
    },
    footer: { demo: "Демо-версия" }
  },
  en: {
    nav: { features: "Features", pricing: "Pricing", demo: "Demo", screens: "Screenshots" },
    hero: {
      eyebrow: "License and contract management",
      title: "License Manager",
      text: "Track licenses, contracts, expiration dates, responsible users, access roles, and notifications in one desktop application.",
      demo: "Download demo",
      pricing: "View pricing"
    },
    features: {
      eyebrow: "Key features",
      title: "Keep every important license under control",
      items: [
        { title: "Unified register", text: "A license and contract table with contract number, contractor, name, dates, cost, quantity, type, category, and department." },
        { title: "Expiration alerts", text: "Expiration monitoring with notifications 90, 30, and 15 days before the due date through SQL Server Agent and Database Mail." },
        { title: "Roles and access", text: "Administrator, supervisor, user, and guest roles with department-based visibility and permissions." },
        { title: "Search and filters", text: "Search by selected field, filter by date, type, and active status, and sort records by table columns." },
        { title: "Excel export", text: "Export the current table view to Excel for reporting and further analysis." },
        { title: "Color status", text: "White, yellow, orange, red, and black row states make upcoming renewals and expired licenses easy to spot." }
      ]
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple purchase and rental options",
      buy: { title: "Purchase", extra: "+ €30 per additional workstation" },
      month: { title: "Monthly rental", extra: "+ €1 per additional workstation" },
      year: { title: "Annual rental", extra: "+ €10 per additional workstation" },
      note: "Euro prices are calculated at 100 RUB per EUR."
    },
    demo: {
      eyebrow: "Demo version",
      title: "Try the application before rollout",
      link: "Open demo on Yandex Disk",
      limitsTitle: "Demo limitations",
      limits: [
        "The demo uses the LicManDemo database.",
        "Saving and deleting data are disabled.",
        "User administration and backup are disabled.",
        "Export is limited and marked as DEMO.",
        "The interface is marked as Demonstration mode."
      ]
    },
    screens: {
      eyebrow: "Screenshots",
      title: "Main screen",
      caption: "Main window: license editor, creation, management, search, filters, and the contract table."
    },
    footer: { demo: "Demo version" }
  }
};

const prices = {
  ru: { buy: "30 000 руб.", month: "1 000 руб.", year: "10 000 руб." },
  en: { buy: "€300", month: "€10", year: "€100" }
};

function getValue(path, lang) {
  return path.split(".").reduce((value, key) => value?.[key], translations[lang]);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(element.dataset.i18n, lang);
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-price]").forEach((element) => {
    element.textContent = prices[lang][element.dataset.price];
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  const heroScreenshot = document.querySelector("[data-screenshot='hero']");
  if (heroScreenshot) {
    heroScreenshot.src = lang === "en" ? "assets/licman-main-en.jpg" : "assets/licman-main-ru.jpg";
    heroScreenshot.alt = lang === "en" ? "License Manager main screen" : "Главное окно Менеджера лицензий";
  }
  const mainScreenshot = document.querySelector("[data-screenshot='main']");
  if (mainScreenshot) {
    mainScreenshot.src = lang === "en" ? "assets/licman-main-en.jpg" : "assets/licman-main-ru.jpg";
    mainScreenshot.alt = lang === "en" ? "License Manager main window in English" : "Главное окно Менеджера лицензий на русском языке";
  }
  localStorage.setItem("licman-language", lang);
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem("licman-language") || "ru");
