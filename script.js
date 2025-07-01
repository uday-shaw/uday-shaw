// script.js

window.addEventListener("DOMContentLoaded", () => {
  const marker = document.querySelector("#marker");
  const model = document.querySelector("#animated-cylinder");

  marker.addEventListener("markerFound", () => {
    console.log("✅ Marker 45 detected");
    model.setAttribute("visible", "true");
  });

  marker.addEventListener("markerLost", () => {
    console.log("❌ Marker 45 lost");
    model.setAttribute("visible", "false");
  });

  // Optional: add a loading message or feedback UI
  const loadingMessage = document.createElement("div");
  loadingMessage.id = "loading-message";
  loadingMessage.textContent = "Scanning for marker #45...";
  document.body.appendChild(loadingMessage);

  marker.addEventListener("markerFound", () => {
    loadingMessage.style.display = "none";
  });

  marker.addEventListener("markerLost", () => {
    loadingMessage.style.display = "block";
  });
});
