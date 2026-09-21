# Password-Generator
An interactive, 3D flipping password generator built with vanilla JS, CSS variables, and HTML. Compares standard pseudo-random number generation against the hardware-backed Web Crypto API for cryptographically secure passwords.

# 🔑 Dual-Engine Password Generator

A sleek, interactive web application that provides two different tiers of security for generating passwords. The UI features a polished 3D card-flipping design with animated flowing gradient borders, prioritizing user experience and clean code architecture.

### ⚙️ How It Works
The application splits its functionality into two distinct generation methods:
*   **Math.random() Engine:** Quick, pseudo-random generation suitable for casual, non-sensitive use cases (not cryptographically secure).
*   **Web Crypto API Engine:** Utilizes hardware-backed `window.crypto.getRandomValues()` to produce true cryptographically secure strings for actual security applications.

### 🛠️ Tech Stack
*   **Frontend:** HTML5, Semantic Structure
*   **Styling:** CSS3, 3D Perspectives, Keyframe Animations, Flexbox, Dynamic Gradients
*   **Scripting:** Vanilla JavaScript (ES6+), DOM Manipulation, Web Crypto API
```

---
