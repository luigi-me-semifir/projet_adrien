import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./reset.css"; // Reset CSS
import "./index.css"; // Styles globaux

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
