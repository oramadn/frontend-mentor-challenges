async function loadComponents() {
  try {
    // Load header
    const headerRes = await fetch("/05_05_space-tourism-website/components/header.html");
    document.body.insertAdjacentHTML("afterbegin", await headerRes.text());

    // Load mobile menu
    const menuRes = await fetch("/05_05_space-tourism-website/components/mobile-menu.html");
    document.body.insertAdjacentHTML("beforeend", await menuRes.text());

    // Now initialize menu functionality
    initMenu();
    setActivePage();
  } catch (error) {
    console.error("Error loading components:", error);
  }
}

// Initialize menu after components load
function initMenu() {
  document.getElementById("open-menu").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.remove("translate-x-full");
  });

  document.getElementById("close-menu").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.add("translate-x-full");
  });
}

// Set active page indicator AFTER components exist
function setActivePage() {
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll("#mobile-menu a");

  // Remove all indicators
  menuLinks.forEach((link) => {
    link.classList.remove("active");
    const existingIndicator = link.querySelector(".active-indicator");
    if (existingIndicator) {
      existingIndicator.remove();
    }
  });

  // Add to current page
  menuLinks.forEach((link) => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
      link.innerHTML += `
        <div class="active-indicator absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white"></div>
      `;
    }
  });
}

document.addEventListener("DOMContentLoaded", loadComponents);
