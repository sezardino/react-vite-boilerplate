import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { ReactQueryProvider, ProjectRouter } from "./libs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <NextUIProvider>
        <RouterProvider router={ProjectRouter} />

        <Toaster richColors position="top-right" expand duration={5000} />
      </NextUIProvider>
    </ReactQueryProvider>
  </React.StrictMode>
);
