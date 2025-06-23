// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-GB'); // This gives dd/mm/yyyy format
  const formattedTime = now.toLocaleTimeString();
  document.getElementById("datetime").textContent = `${formattedDate} ${formattedTime}`;

  const spanElement = document.querySelector("span.value");
  if (spanElement) {
    spanElement.textContent = Math.floor(Math.random() * 9000);x  
  }
});

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