"use strict";

// ---- HEADER ----
const tabContents = document.querySelectorAll(".tab-content");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabControl = document.querySelector(".tab-control");
const header = document.querySelector("header");
const navbar = document.querySelector(".main-navbar");
const navLinks = navbar.querySelectorAll("a");
// ---- SECTIONS ----
// const whoSec = document.querySelector(".who");
// const whatIsSec = document.querySelector(".what-is");
// const whatDoSec = document.querySelector(".what-do");
// const whereSec = document.querySelector(".where");

// ---- Change navbar behaviour ----
const opt = {
  rootMargin: "-60px",
};
const intObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.add("nav-on-header");
      navbar.classList.remove("nav-on-main");
      navLinks.forEach((link) => {
        link.classList.add("on-header");
        link.classList.remove("on-main");
      });
    } else {
      navbar.classList.add("nav-on-main");
      navbar.classList.remove("nav-on-header");
      navLinks.forEach((link) => {
        link.classList.add("on-main");
        link.classList.remove("on-header");
      });
    }
  });
}, opt);
intObs.observe(header);

// ---- navbar links ----
navbar.addEventListener("click", (e) => {
  e.preventDefault();
  const link = e.target.closest("a");
  if (!link) return;
  const id = link.dataset["for"];
  const targetSec = document.getElementById(id);
  targetSec.scrollIntoView({ behavior: "smooth" });
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
