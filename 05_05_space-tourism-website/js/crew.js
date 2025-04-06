document.addEventListener("DOMContentLoaded", () => {
  fetch("./starter-code/data.json")
    .then((response) => response.json())
    .then((data) => {
      const crewMembers = data.crew;
      const dots = document.querySelectorAll(".nav-item");
      const roleElement = document.querySelector(".crew-role");
      const titleElement = document.querySelector(".crew-title");
      const descriptionElement = document.querySelector(".crew-description");
      const imageElement = document.getElementById("crew-image");

      // Function to update crew information
      function updateCrewInfo(index) {
        const member = crewMembers[index];
        roleElement.textContent = member.role.toUpperCase();
        titleElement.textContent = member.name.toUpperCase();
        descriptionElement.textContent = member.bio;
        imageElement.src = member.images.png.replace(
          "../assests/",
          "./src/assets/"
        );
      }

      function handleDotClick(event) {
        const index = event.target.dataset.index;

        updateCrewInfo(index);

        dots.forEach((dot) => {
          dot.classList.add("opacity-20");
          dot.classList.remove("opacity-100");
        });
        event.target.classList.remove("opacity-20");
        event.target.classList.add("opacity-100");
      }

      updateCrewInfo(0);
      dots[0].classList.remove("opacity-20");
      dots[0].classList.add("opacity-100");

      dots.forEach((dot) => {
        dot.addEventListener("click", handleDotClick);
      });
    })
    .catch((error) => console.error("Error loading crew data:", error));
});
