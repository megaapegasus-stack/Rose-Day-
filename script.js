// Reveal sections on scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Modal
const modal = document.getElementById("modal");
document.getElementById("openModal").onclick = () => {
  modal.style.display = "block";
};

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// Floating petals
const petalsContainer = document.querySelector(".petals");

setInterval(() => {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  petalsContainer.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}, 400);