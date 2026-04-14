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
  const setupCustomPlayer = (overlayId, iframeId) => {
    const overlay = document.getElementById(overlayId);
    const iframe = document.getElementById(iframeId);

    if (overlay && iframe) {
      overlay.addEventListener('click', () => {
        // Play the YouTube video via postMessage
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        
        // Hide the overlay
        overlay.classList.add('hidden');
      });
    }
  };

  // Setup VSL player (click to play)
  setupCustomPlayer('videoOverlay', 'vslIframe');
});
