import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/system";
import { themeOptions } from "./Style/style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themeOptions}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
