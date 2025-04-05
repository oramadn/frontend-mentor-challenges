document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Remove active styles from all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("text-primary");
        btn.classList.add("text-gray-500");
        btn.querySelector("div").classList.remove("bg-orange-500");
        btn.querySelector("div").classList.add("bg-transparent");
      });

      // Hide all tab contents
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("flex");
        content.classList.add("hidden");
      });

      // Add active styles to clicked button
      this.classList.remove("text-gray-500");
      this.classList.add("text-primary");
      this.querySelector("div").classList.remove("bg-transparent");
      this.querySelector("div").classList.add("bg-orange-500");

      // Show the corresponding tab content
      document.getElementById(tabId).classList.remove("hidden");
      document.getElementById(tabId).classList.add("flex");
    });
  });
});
