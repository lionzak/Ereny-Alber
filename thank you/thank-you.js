document.getElementById("datetime").textContent = new Date().toLocaleString();

const spanElement = document.querySelector("span.value");
spanElement.textContent = Math.floor(Math.random() * 9000);

function goHome() {
  window.location.replace("https://ereny-alber.vercel.app/");
}

function submitAnother() {
  window.location.replace("https://ereny-alber.vercel.app/#contact");
}
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
