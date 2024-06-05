import React from "react";
import "./index.css";
import App from "./App";
import { TodoContextProvider } from "./context";
import { createRoot } from "react-dom/client";
import { EmailContextProvider } from "./context/LoginContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmailContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </EmailContextProvider>
  </React.StrictMode>
);
