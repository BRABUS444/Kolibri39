
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".review-form");
  const reviewsSection = document.createElement("section");
  reviewsSection.id = "reviews-display";
  reviewsSection.innerHTML = "<h2>Отзывы покупателей</h2><div id='reviews-list'></div>";
  form.parentNode.insertBefore(reviewsSection, form);

  const reviewsList = document.getElementById("reviews-list");

  function displayReviews() {
    const reviews = JSON.parse(localStorage.getItem("kolibriReviews") || "[]");
    reviewsList.innerHTML = "";
    reviews.forEach((review) => {
      const div = document.createElement("div");
      div.className = "review-entry";
      div.innerHTML = `
        <strong>${review.name}</strong><br>
        <p>${review.message}</p>
      `;
      reviewsList.appendChild(div);
    });
  }

  displayReviews();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const message = form.message.value.trim();

    if (name && message) {
      const reviews = JSON.parse(localStorage.getItem("kolibriReviews") || "[]");
      reviews.unshift({ name, message });
      localStorage.setItem("kolibriReviews", JSON.stringify(reviews));
      displayReviews();
      form.reset();
    }
  });
});
