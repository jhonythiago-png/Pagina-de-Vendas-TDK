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
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  elements.forEach(el => {
    observer.observe(el);
  });

  // CUSTOM VIDEO PLAYER LOGIC
  const videoOverlay = document.getElementById('videoOverlay');
  const vslIframe = document.getElementById('vslIframe');

  if (videoOverlay && vslIframe) {
    videoOverlay.addEventListener('click', () => {
      // Play the YouTube video via postMessage
      vslIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      
      // Hide the overlay
      videoOverlay.classList.add('hidden');
    });
  }
});
