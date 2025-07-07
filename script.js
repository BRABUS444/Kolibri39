// Звёзды и блёстки
document.addEventListener("DOMContentLoaded", () => {
  const count = 50;
  for (let i = 0; i < count; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
  }
});

const style = document.createElement('style');
style.innerHTML = `
  .star {
    position: fixed;
    width: 2px;
    height: 2px;
    background: white;
    opacity: 0.8;
    border-radius: 50%;
    animation: twinkle 2s infinite ease-in-out;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
  }
`;
document.head.appendChild(style);
