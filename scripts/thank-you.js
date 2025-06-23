document.getElementById("datetime").textContent = new Date().toLocaleString();

const spanElement = document.querySelector("span.value");

spanElement.textContent = Math.floor(Math.random() * 9000);

function goHome() {
  window.location.href = "/";
}

function submitAnother() {
  window.location.href = "/#contact";
}

// Add some interactive sparkle effect
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  container.addEventListener("mousemove", function (e) {

    const sparkle = document.createElement("div");
    sparkle.style.position = "absolute";
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    sparkle.style.width = "4px";
    sparkle.style.height = "4px";
    sparkle.style.background = "#667eea";
    sparkle.style.borderRadius = "50%";
    sparkle.style.pointerEvents = "none";
    sparkle.style.animation = "sparkle 1s ease-out forwards";

    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  });
});

// Add sparkle animation
const style = document.createElement("style");
style.textContent = `
            @keyframes sparkle {
                0% {
                    opacity: 1;
                    transform: scale(0) rotate(0deg);
                }
                100% {
                    opacity: 0;
                    transform: scale(1) rotate(180deg);
                }
            }
        `;
document.head.appendChild(style);
