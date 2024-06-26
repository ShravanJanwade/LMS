import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "./context/AuthProvider";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <App/>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);