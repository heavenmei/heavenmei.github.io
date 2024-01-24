import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";

import "./assets/css/github-markdown.css";
import "markdown-navbar/dist/navbar.css";
import "./assets/css/index.css";
import "./main.scss";
import "animate.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
