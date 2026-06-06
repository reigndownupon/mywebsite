const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const themeText = document.querySelector(".theme-text");
const savedTheme = localStorage.getItem("reigndownupon-theme");

function setTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("dark", isDark);
  themeText.textContent = isDark ? "Dark" : "Light";
  localStorage.setItem("reigndownupon-theme", theme);
}

setTheme(savedTheme || "light");

themeToggle.addEventListener("click", () => {
  setTheme(body.classList.contains("dark") ? "light" : "dark");
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("This form is a visual placeholder for now. I can connect it before launch.");
});
