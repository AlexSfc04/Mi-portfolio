// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Hide drawer element
setTimeout(() => {
  const drawer = document.querySelector('._drawer_1w1y8_123');
  if (drawer) {
    drawer.style.display = 'none';
  }
}, 0);
