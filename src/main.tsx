import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './samples/node-api'
import "styles/index.css";
import { CssVarsProvider } from "@mui/joy/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
