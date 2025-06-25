document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const targetUrl = "https://ereny-alber.vercel.app/thank-you.html";

  function showLoading() {
    loadingOverlay.classList.add("show");
    document.body.classList.add("loading");
  }

  function hideLoading() {
    loadingOverlay.classList.remove("show");
    document.body.classList.remove("loading");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      showLoading();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          hideLoading();

          if (response.ok) {
            window.location.href = targetUrl;
          } else {
            console.error("Form submission failed:", response.status);
            alert("There was an error sending your message. Please try again.");
          }
        })
        .catch((error) => {
          hideLoading();
          console.error("Error:", error);
          alert("There was an error sending your message. Please try again.");
        });
    });
  }
});
