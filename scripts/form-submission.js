// Script to handle form submission and redirect
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const targetUrl = "https://ereny-alber.vercel.app/thank-you.html";

  if (form) {
    form.addEventListener("submit", function (e) {
      // Prevent default form submission temporarily
      e.preventDefault();

      // Create FormData from the form
      const formData = new FormData(form);

      // Submit the form data to getform.io
      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Form submitted successfully
            handleRedirect();
          } else {
            // Handle error
            console.error("Form submission failed");
            handleRedirect(); // Still redirect even if submission fails
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          handleRedirect(); // Still redirect even if there's an error
        });
    });
  }

  function handleRedirect() {
    // First, open the thank you page in a new tab
    window.open(targetUrl, "_blank");

    // Then try to close the current tab
    setTimeout(() => {
      try {
        window.close();
        // If close doesn't work, redirect current tab
        setTimeout(() => {
          if (!window.closed) {
            window.location.href = targetUrl;
          }
        }, 200);
      } catch (error) {
        // If closing fails, redirect the current tab
        window.location.href = targetUrl;
      }
    }, 500);
  }
});

// Alternative: If you prefer to let the form submit normally and then redirect
// Just add this to your form's onsubmit:
// onsubmit="setTimeout(function(){try{window.close();setTimeout(()=>{if(!window.closed){window.location.href='https://ereny-alber.vercel.app/thank-you.html'}},100)}catch(e){window.location.href='https://ereny-alber.vercel.app/thank-you.html'}}, 1000)"
