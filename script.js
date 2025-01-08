// Select necessary elements
const galleryItems = document.querySelectorAll(".gallery-item img");
const fullscreenViewer = document.getElementById("fullscreen-viewer");
const fullscreenImage = document.getElementById("fullscreen-image");
const closeButton = document.getElementById("close-button");

// Add event listeners to gallery images
galleryItems.forEach((img) => {
  img.addEventListener("click", () => {
    fullscreenImage.src = img.src; // Set clicked image as fullscreen image
    fullscreenViewer.classList.add("visible");
  });
});

// Close button functionality
closeButton.addEventListener("click", () => {
  fullscreenViewer.classList.remove("visible");
});

// Close fullscreen when clicking outside the image
fullscreenViewer.addEventListener("click", (e) => {
  if (e.target === fullscreenViewer) {
    fullscreenViewer.classList.remove("visible");
  }
});
