// Intersection Observer for Dorama-style scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".dorama-fade");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Add 'visible' class when the element comes into view
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: Stop observing once it's visible if we only want it to animate once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => {
    observer.observe(el);
  });
});
