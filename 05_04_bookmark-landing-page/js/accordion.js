document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".flex.flex-row");
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".accordion-icon");

    header.addEventListener("click", () => {
      const isOpen = !content.classList.contains("hidden");

      // Close all accordions and reset colors
      accordionItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector(".accordion-content");
        const otherIcon = otherItem.querySelector(".accordion-icon");

        otherContent.classList.add("hidden");
        otherIcon.classList.remove("rotate-180", "text-orange-500");
      });

      // Open the clicked accordion and change icon color
      if (!isOpen) {
        content.classList.remove("hidden");
        icon.classList.add("rotate-180", "text-orange-500");
      }
    });
  });
});
