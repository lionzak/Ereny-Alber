function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const body = document.body;

  mobileNav.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (mobileNav.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}


// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const mobileNav = document.getElementById("mobileNav");
  const mobileToggle = document.querySelector(".mobile-menu-toggle");

  if (
    !mobileNav.contains(event.target) &&
    !mobileToggle.contains(event.target)
  ) {
    if (mobileNav.classList.contains("active")) {
      toggleMobileMenu();
    }
  }
});

// Close mobile menu on window resize if desktop size
window.addEventListener("resize", function () {
  const mobileNav = document.getElementById("mobileNav");
  if (window.innerWidth > 768 && mobileNav.classList.contains("active")) {
    toggleMobileMenu();
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
