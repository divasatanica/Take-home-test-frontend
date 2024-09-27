import { StrictMode } from "react";
import NiceModal from "@ebay/nice-modal-react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NiceModal.Provider>
      <RouterProvider router={router} />
    </NiceModal.Provider>
  </StrictMode>
);
