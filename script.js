const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const listToggles = document.querySelectorAll(".toc-list-toggle[aria-controls]");

listToggles.forEach((toggle) => {
  const list = document.getElementById(toggle.getAttribute("aria-controls"));

  if (!list) {
    return;
  }

  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";

    toggle.setAttribute("aria-expanded", String(willOpen));
    list.hidden = !willOpen;
    toggle.closest(".toc-list")?.classList.toggle("is-open", willOpen);
  });
});
