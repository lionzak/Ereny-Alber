document.querySelectorAll(".social-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    const platform = this.getAttribute("data-platform");
    gtag("event", "click", {
      event_category: "social",
      event_label: platform,
    });
    console.log("added analytics");
    
  });
});
