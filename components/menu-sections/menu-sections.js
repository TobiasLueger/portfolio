const _ = {
  defaults: {
    componentSelector: ".header",
    pluginOptions: {
      selectors: {
        isActive: "is-active",
        noScroll: "no-scroll",
      },
    },
  },
};

const o = _.defaults;

const defaultSection = document.querySelector(".section-first");
const meSection = document.querySelector(".section-me");
const projectsSection = document.querySelector(".section-projects");
const contactSection = document.querySelector(".section-contact");

function bindListeners() {
  const navPoints = document.querySelectorAll(".card a");

  const closeButtons = document.querySelectorAll(".section__close");

  navPoints.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(event.target.parentNode.parentNode.innerText);

      makeNavAvtive(false);

      if (event.target.parentNode.parentNode.innerText === "ÜBER MICH") {
        console.log(true, "ÜBER MICH");
        meSection.classList.add(o.pluginOptions.selectors.isActive);
        defaultSection.classList.add(o.pluginOptions.selectors.noScroll);
        makeNavAvtive("ÜBER MICH");
        showSideNav();
        closeTabs(false, true, true);
      }

      if (event.target.parentNode.parentNode.innerText === "PROJEKTE") {
        console.log(true, "PROJEKTE");
        projectsSection.classList.add(o.pluginOptions.selectors.isActive);
        defaultSection.classList.add(o.pluginOptions.selectors.noScroll);
        makeNavAvtive("PROJEKTE");
        showSideNav();
        closeTabs(true, false, true);
      }

      if (event.target.parentNode.parentNode.innerText === "KONTAKT") {
        console.log(true, "KONTAKT");
        contactSection.classList.add(o.pluginOptions.selectors.isActive);
        defaultSection.classList.add(o.pluginOptions.selectors.noScroll);
        makeNavAvtive("KONTAKT");
        showSideNav();
        closeTabs(true, true, false);
      }
    });
  });

  closeButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(event.target.parentNode);
      makeNavAvtive(false);

      if (event.target.parentNode.classList.contains("section-me")) {
        console.log(true, "ÜBER MICH");
        closeTabs(true, false, false);
        showSideNav(true);
      }

      if (event.target.parentNode.classList.contains("section-projects")) {
        console.log(true, "PROJEKTE");
        closeTabs(false, true, false);
        showSideNav(true);
      }

      if (event.target.parentNode.classList.contains("section-contact")) {
        console.log(true, "KONTAKT");
        closeTabs(false, false, true);
        showSideNav(true);
      }
    });
  });
}

function closeTabs(about, project, contact) {
  if (about) {
    meSection.classList.remove(o.pluginOptions.selectors.isActive);
    defaultSection.classList.remove(o.pluginOptions.selectors.noScroll);
  }

  if (project) {
    projectsSection.classList.remove(o.pluginOptions.selectors.isActive);
    defaultSection.classList.remove(o.pluginOptions.selectors.noScroll);
  }

  if (contact) {
    contactSection.classList.remove(o.pluginOptions.selectors.isActive);
    defaultSection.classList.remove(o.pluginOptions.selectors.noScroll);
  }
}

function makeNavAvtive(activeItem) {
  const navPoints = document.querySelectorAll(".side-nav .card");

  navPoints.forEach((item) => {
    console.log(item.innerText, activeItem);

    if (item.innerText === activeItem) {
      console.log(true, "ÜBER MICH");
      item.classList.add("is-active");
    }

    if (item.innerText === activeItem) {
      console.log(true, "PROJEKTE");
      item.classList.add("is-active");
    }

    if (item.innerText === activeItem) {
      console.log(true, "KONTAKT");
      item.classList.add("is-active");
    }

    if (activeItem === false) {
      console.log(false, "alle inactive");
      item.classList.remove("is-active");
    }
  });
}

function showSideNav(close = false) {
  if (
    document.querySelector(".section-content.is-active") &&
    !document.querySelector(".side-nav").classList.contains("is-active") &&
    close === false
  ) {
    document
      .querySelector(".side-nav")
      .classList.add(o.pluginOptions.selectors.isActive);
  }

  if (close === true) {
    document
      .querySelector(".side-nav")
      .classList.remove(o.pluginOptions.selectors.isActive);
  }
}

export function init() {
  bindListeners();
  console.log("menu-sections init");
}
