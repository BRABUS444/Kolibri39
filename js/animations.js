
// Добавим эффект появления при скролле
document.addEventListener("DOMContentLoaded", function () {
  const animatedItems = document.querySelectorAll(".animate");

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    animatedItems.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
