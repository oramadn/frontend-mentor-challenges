document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("../starter-code/data.json");
  const data = await response.json();
  const destinations = data.destinations;

  const navItems = document.querySelectorAll(".nav-item");
  const destinationImage = document.getElementById("destination-image");
  const destinationTitle = document.getElementById("destination-title");
  const destinationDescription = document.getElementById("destination-description");
  const destinationDistance = document.getElementById("destination-distance");
  const destinationTravel = document.getElementById("destination-travel");

  updateDestination("moon");

  // Add click handlers
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const destination = item.dataset.destination.toLowerCase();
      updateDestination(destination);
      setActiveTab(item);
    });
  });

  function updateDestination(destinationName) {
    const destination = destinations.find((d) => d.name.toLowerCase() === destinationName);

    // Fade out content
    destinationImage.style.opacity = "0";
    destinationTitle.style.opacity = "0";
    destinationDescription.style.opacity = "0";
    destinationDistance.style.opacity = "0";
    destinationTravel.style.opacity = "0";

    // Update content after fade out
    setTimeout(() => {
      destinationImage.src = destination.images.png.replace("../assests", "./assets");
      destinationTitle.textContent = destination.name;
      destinationDescription.textContent = destination.description;
      destinationDistance.textContent = destination.distance;
      destinationTravel.textContent = destination.travel;

      // Fade in new content
      destinationImage.style.opacity = "1";
      destinationTitle.style.opacity = "1";
      destinationDescription.style.opacity = "1";
      destinationDistance.style.opacity = "1";
      destinationTravel.style.opacity = "1";
    }, 300);
  }

  function setActiveTab(activeItem) {
    navItems.forEach((item) => {
      const underline = item.querySelector("div");
      const text = item.querySelector("p");

      if (item === activeItem) {
        underline.style.opacity = "1";
        text.style.opacity = "1";
      } else {
        underline.style.opacity = "0";
        text.style.opacity = "0.75";
      }
    });
  }
});
