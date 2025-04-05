document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const images = slider.children;
  const totalImages = images.length;
  let currentIndex = 0;

  function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  const leftArrows = document.querySelectorAll(".left-arrow");
  const rightArrows = document.querySelectorAll(".right-arrow");

  leftArrows.forEach((arrow) => {
    arrow.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateSlide();
    });
  });

  rightArrows.forEach((arrow) => {
    arrow.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlide();
    });
  });
});