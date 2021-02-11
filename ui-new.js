"use strict";
const tabContents = document.querySelectorAll(".tab-content");
const t1 = tabContents[1];
tabContents.forEach((t) => {
  const perc = (t.dataset["tabId"] - 1) * 100;
  t.style.transform = `translateX(${perc}%)`;
});
