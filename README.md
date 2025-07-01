# Simple AR.js A-Frame Barcode Marker Example

This project demonstrates a basic augmented reality (AR) setup using [A-Frame](https://aframe.io) and [AR.js](https://github.com/AR-js-org/AR.js), with matrix barcode marker tracking.

## 📌 What It Does

- Uses the device's webcam to detect a barcode marker (`value="45"`).
- When the marker is visible, it renders a **yellow cylinder** (`<a-cylinder>`) in AR space on top of the marker.
- The scene is embedded and automatically hides scrollbars and margins.

## 📄 Included Libraries

- `aframe.min.js` – Core A-Frame library for 3D/VR rendering.
- `aframe-ar.min.js` – AR.js integration with A-Frame for marker-based AR.
- `aframe-extras.loaders.min.js` – Optional loader support for future model expansions.

## 🎯 How to Use

1. **Host the HTML file** on a local or remote web server (e.g. using VS Code Live Server).
2. **Print barcode marker #45** (available in AR.js examples or generate your own).
3. **Open the HTML file** in a browser with camera permissions (Chrome preferred).
4. **Point your webcam** at the printed marker to view the AR object.

## 🔧 Configuration Notes

- `detectionMode: mono_and_matrix` and `matrixCodeType: 4x4` enable matrix-style barcode tracking.
- `<a-entity camera>` is used instead of `<a-marker-camera>` to support multiple markers if extended.

---

🛠️ This is a great foundation for prototyping AR scenes using marker detection.
