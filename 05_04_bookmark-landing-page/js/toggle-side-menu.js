// Add this to your toggle-side-menu.js file
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector("nav img");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.getElementById("close-menu");

  hamburgerIcon.addEventListener("click", function () {
    // Show the menu
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    // Prevent scrolling
    document.body.classList.add("overflow-hidden");
  });

  closeButton.addEventListener("click", function () {
    // Hide the menu
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    // Re-enable scrolling
    document.body.classList.remove("overflow-hidden");
  });

  // Close menu when clicking on any nav link
  const navLinks = mobileMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
      document.body.classList.remove("overflow-hidden");
    });
  });
});
