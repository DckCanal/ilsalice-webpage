"use strict";
const header = document.querySelector(".jumbotron");
const pages = document.querySelectorAll(".page");
const contentDivs = document.querySelectorAll(".content-div");
const navBtn = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-main");
const navLinks = document.querySelectorAll(".nav-link");
const textLinks = document.querySelectorAll(".text-link");
const brand = document.querySelector(".navbar-brand");
const covidBtn = document.querySelector(".btn-covid-alert");
let navMenuHeight = 40 * navLinks.length;
let navExpanded = false;

// ----------- Intersection observer, for content-div animations -----------------
const obsOpt = {
  root: null,
  rootMargin: "0%",
  threshold: 0, // default value
};
const showContentDiv = function (entries, obs) {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.remove("content-div--hidden");
    //obs.unobserve(e.target);
  });
};
const obs = new IntersectionObserver(showContentDiv, obsOpt);

contentDivs.forEach((div, i) => {
  (i + 1) % 2 === 0 ? div.classList.add("even") : div.classList.add("odd");
  obs.observe(div);
});

// ---------- Mobile: scroll adjustment for navbar toggler button
navBtn.addEventListener("click", () => {
  if (!navExpanded) {
    if (
      navbar.getBoundingClientRect().bottom + navMenuHeight >=
      document.documentElement.clientHeight
    )
      window.scrollTo({
        behavior: "smooth",
        top:
          navbar.getBoundingClientRect().bottom +
          window.pageYOffset +
          navMenuHeight -
          document.documentElement.clientHeight,
        left: 0,
      });
  }
  navExpanded = !navExpanded;
});

// ------ Remove covid alert on user's confirm -----------------
covidBtn.addEventListener("click", function (e) {
  // e.target.closest(".covid-alert").style.display = "none";
  e.target.closest(".covid-alert").style.opacity = 0;
  e.target.closest(".covid-alert").style.transform = "translateY(-8rem)";
  // document.querySelector(".container-xl").style.transform =
  //   "translateY(-16rem)";
  setTimeout(
    () => e.target.closest(".covid-alert").classList.add("hidden"),
    1000
  );
});

// --------- navbar navigation --------------

const navigateTo = function (
  page,
  top = header.getBoundingClientRect().height + 1
) {
  window.scrollTo({ behavior: "smooth", top: top });

  // Show the correct page
  pages.forEach((p) => {
    if (p.classList.contains(page)) p.classList.remove("hidden");
    else p.classList.add("hidden");
  });
  // Set active link
  navLinks.forEach((l) => {
    if (l.dataset.to === page) l.classList.add("active");
    else l.classList.remove("active");
  });
};

navbar.addEventListener("click", function (e) {
  // Guard clause
  if (!e.target.classList.contains("nav-link") && e.target !== brand) return;

  e.preventDefault();

  // Back to top of page
  // const y = (header.getBoundingClientRect().height + 1).toFixed(0);
  // window.scrollTo({ behavior: "smooth", top: y });

  // Navigation
  if (e.target.classList.contains("nav-link")) {
    navigateTo(e.target.dataset.to);
  }
  if (e.target === brand) {
    // Hide content divs, if not already on the home page
    if (document.querySelector(".home-page").classList.contains("hidden"))
      contentDivs.forEach((c) => {
        c.classList.add("content-div--hidden");
      });

    navigateTo("home-page");
  }
});

// ---------- navigation ----------------
textLinks.forEach((l) => {
  l.addEventListener("click", function (e) {
    e.preventDefault();
    navigateTo(e.target.dataset.to);
  });
});
