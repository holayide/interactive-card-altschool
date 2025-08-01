import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CardProvider } from "./context/cardContent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </StrictMode>
);
