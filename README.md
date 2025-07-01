+This project is a modular, browser-based augmented reality (AR) experience using **AR.js** and **A-Frame**. It tracks a specific barcode marker (`value="45"`) via webcam and renders a dynamic, animated 3D cylinder anchored to that marker.

## 🚀 Features

- 📷 **Marker-based AR** using matrix barcodes (4x4) via webcam
- 🌀 **Animated 3D cylinder** with physically inspired material design
- ✅ **Marker detection status** displayed through UI feedback
- ⚡ Modular architecture: HTML, CSS, and JavaScript separated for scalability

---

## 🧩 Project Structure
📁 ar-barcode-demo/ ├── index.html         # Main scene with AR.js + A-Frame ├── style.css          # Scene styling and overlay UI ├── script.js          # Marker detection logic and event listeners

---



---

## 💻 How to Run

1. **Clone or download the repo.**

2. Serve the files locally:
   ```bash
   npx serve .       # or python -m http.server


3. Open index.html in a browser (preferably Chrome) with webcam access.
4. Show barcode marker #45 to your camera.
🎯 What You'll See- A rotating gold cylinder appears on top of the barcode marker.
- An on-screen message prompts you when the marker is not visible.
- Real-time marker tracking logs are printed in the browser console.
📚 Tech Stack| Tool | Role | 
| A-Frame | 3D rendering and scene management | 
| AR.js | Marker recognition and AR integration | 
| aframe-extras | Optional loaders and utilities | 
| HTML/CSS/JS | Modular web development stack | 





