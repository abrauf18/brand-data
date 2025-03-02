import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import brandData from "../api.json";

createRoot(document.getElementById("brand-data")).render(
  <StrictMode>
    <App data={brandData} />
  </StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// function renderBrandData(data) {
//   console.log("Received data:", data);

//   // 1) Grab the container
//   const container = document.getElementById("brand-data");
//   if (!container) {
//     console.error("No #brand-data element found!");
//     return;
//   }

//   // 2) Render the React app with the data as props
//   const root = createRoot(container);
//   root.render(
//     <StrictMode>
//       <App data={data} />
//     </StrictMode>
//   );
// }

// window.renderBrandData = renderBrandData;
