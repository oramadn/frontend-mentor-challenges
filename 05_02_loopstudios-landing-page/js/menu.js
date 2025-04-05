const menuButton = document.querySelector(".menu__button");
const menuOverlay = document.querySelector(".menu__overlay");
const menuIcon = document.querySelector(".menu-icon");

menuButton.addEventListener("click", () => {
  menuOverlay.classList.toggle("menu--active");

  if (menuOverlay.classList.contains("menu--active")) {
    menuIcon.src = "./images/icon-close.svg";
    menuButton.setAttribute("aria-label", "Close menu");
  } else {
    menuIcon.src = "./images/icon-hamburger.svg";
    menuButton.setAttribute("aria-label", "Open menu");
  }
});
