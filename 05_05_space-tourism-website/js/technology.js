document.addEventListener("DOMContentLoaded", () => {
  fetch("./starter-code/data.json") // Make sure this path is correct relative to technology.html
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data.technology) {
        console.error("Error: 'technology' data not found in JSON.");
        return;
      }
      const technologyData = data.technology;
      const navItems = document.querySelectorAll(".tech-nav-item");
      const titleElement = document.querySelector(".tech-title");
      const descriptionElement = document.querySelector(".tech-description");
      const imageElement = document.getElementById("tech-image");

      const activeClasses = ["bg-white", "text-black"];
      const inactiveClasses = [
        "bg-transparent",
        "text-white",
        "border-[#504f59]",
        "border-1",
      ];

      function updateTechInfo(index) {
        if (index < 0 || index >= technologyData.length) {
          console.error(`Invalid index: ${index}`);
          return;
        }

        const item = technologyData[index];

        titleElement.style.opacity = 0;
        descriptionElement.style.opacity = 0;
        imageElement.style.opacity = 0;

        setTimeout(() => {
          titleElement.textContent = item.name.toUpperCase();
          descriptionElement.textContent = item.description;

          // *** CORRECTED PATH REPLACEMENT LOGIC ***
          // Use the correct source path "../assests/" (double 's') from data.json
          // Assume the target structure is "./src/assets/" relative to the HTML file. Adjust if necessary.
          const imagePath = item.images.portrait.replace(
            "../assests/", // <-- Fixed: Match the double 's' in data.json
            "./src/assets/" // <-- Target path relative to HTML (adjust if your folder structure is different)
          );
          // *** END CORRECTION ***

          console.log("Attempting to load image:", imagePath); // Add for debugging

          imageElement.src = imagePath;
          imageElement.alt = `Image of ${item.name}`;

          titleElement.style.opacity = 1;
          descriptionElement.style.opacity = 1;
          imageElement.style.opacity = 1;
        }, 150);
      }

      function handleItemClick(event) {
        const clickedItem = event.currentTarget;
        const index = clickedItem.dataset.index;
        updateTechInfo(index);

        navItems.forEach((item) => {
          item.classList.remove(...activeClasses);
          item.classList.add(...inactiveClasses);
        });

        clickedItem.classList.remove(...inactiveClasses);
        clickedItem.classList.add(...activeClasses);
      }

      if (technologyData.length > 0) {
        updateTechInfo(0);

        navItems.forEach((item, idx) => {
          if (idx === 0) {
            item.classList.remove(...inactiveClasses);
            item.classList.add(...activeClasses);
          } else {
            item.classList.remove(...activeClasses);
            item.classList.add(...inactiveClasses);
          }
        });

        navItems.forEach((item) => {
          item.addEventListener("click", handleItemClick);
        });
      } else {
        console.error("No technology data available to display.");
      }
    })
    .catch((error) => console.error("Error loading technology data:", error));
});
