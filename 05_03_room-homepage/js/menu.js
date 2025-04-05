const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-menu");

menuButton.addEventListener("click", () => {
  menu.classList.remove("-translate-y-full");
  overlay.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  menu.classList.add("-translate-y-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  menu.classList.add("-translate-y-full");
  overlay.classList.add("hidden");
});
