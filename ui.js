const contentDivs = document.querySelectorAll(".content-div");
const navBtn = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-main");
const navItems = document.querySelectorAll(".nav-item");
const brand = document.querySelector(".navbar-brand");
let navMenuHeight = 40 * navItems.length;
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
    obs.unobserve(e.target);
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

brand.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
