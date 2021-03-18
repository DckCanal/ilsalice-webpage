"use strict";

// ---- HEADER ----
const tabContents = document.querySelectorAll(".tab-content");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabControl = document.querySelector(".tab-control");
const header = document.querySelector("header");
const navbar = document.querySelector(".main-navbar");
const toggleBtn = document.querySelector(".navbar-toggle-btn");
const toggleIcon = document.querySelector(".navbar-toggle-btn ion-icon");
const navLinks = navbar.querySelectorAll(".nav-link");
const logoWrapper = document.querySelector(".logo-wrapper");
const btnContact = document.querySelector(".btn-contact");
const btnMap = document.querySelector(".btn-map");
let navExpanded = false;

// ---- Change navbar behaviour ----
const opt = {
  rootMargin: "-60px",
};
const intObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.add("nav-on-header");
      navbar.classList.remove("nav-on-main");
      logoWrapper.style["background-color"] = "transparent";
      navLinks.forEach((link) => {
        link.classList.add("on-header");
        link.classList.remove("on-main");
      });
    } else {
      navbar.classList.add("nav-on-main");
      navbar.classList.remove("nav-on-header");
      logoWrapper.style["background-color"] = "#fff";
      navLinks.forEach((link) => {
        link.classList.add("on-main");
        link.classList.remove("on-header");
      });
    }
  });
}, opt);
intObs.observe(header);

// ---- navbar links and logo link----
navbar.addEventListener("click", (e) => {
  e.preventDefault();
  const link = e.target.closest("a");
  if (!link) return;
  const id = link.dataset["for"];
  const targetSec = document.getElementById(id);
  targetSec.scrollIntoView({ behavior: "smooth" });
  compactNavbar();
});

// ------ navbar toggle button -----
const expandNavbar = () => {
  toggleIcon.classList.remove("rotate0");
  toggleIcon.classList.add("rotate90");
  navbar.classList.remove("navbar-min");
  navbar.classList.add("navbar-max");
  navExpanded = true;
};
const compactNavbar = () => {
  toggleIcon.classList.remove("rotate90");
  toggleIcon.classList.add("rotate0");
  navbar.classList.remove("navbar-max");
  navbar.classList.add("navbar-min");
  navExpanded = false;
};
const toggleNavbar = () => {
  if (navExpanded) {
    compactNavbar();
  } else {
    expandNavbar();
  }
};
toggleBtn.addEventListener("click", toggleNavbar);

// ---- header buttons ----
btnContact.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".who").scrollIntoView({ behavior: "smooth" });
});
btnMap.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".where").scrollIntoView({ behavior: "smooth" });
});

// ---- TAB component ----
tabControl.addEventListener("click", (e) => {
  e.preventDefault();
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  const id = btn.dataset["tabId"];
  const targetTab = document.getElementById(id);
  targetTab.classList.remove("tab-content-inactive");
  targetTab.classList.add("tab-content-active");
  targetTab
    .closest(".tab-container")
    .querySelectorAll(".tab-content-active")
    .forEach((t) => {
      if (t === targetTab) return;
      t.classList.remove("tab-content-active");
      t.classList.add("tab-content-inactive");
    });
  const precBtn = btn.closest(".tab-control").querySelector(".tab-btn-active");
  precBtn.classList.remove("tab-btn-active");
  precBtn.classList.add("tab-btn-inactive");
  btn.classList.remove("tab-btn-inactive");
  btn.classList.add("tab-btn-active");
});
