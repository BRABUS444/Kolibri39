
async function loadReviews() {
    const res = await fetch('reviews.json');
    const reviews = await res.json();
    const container = document.getElementById('reviews');
    container.innerHTML = '<h2>Оставленные отзывы:</h2>';
    for (const r of reviews) {
        container.innerHTML += `<p><strong>${r.name}:</strong> ${r.text}</p>`;
    }
}

async function submitReview() {
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    if (!name || !review) return alert('Пожалуйста, заполните все поля.');
    await fetch('https://example.com/api/add_review', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, text: review })
    });
    location.reload();
}

loadReviews();
