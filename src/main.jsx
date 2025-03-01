import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("brand-data")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
