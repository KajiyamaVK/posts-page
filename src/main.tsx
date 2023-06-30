import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import "./global.css";
import { GeneralProvider } from "./context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GeneralProvider>
      <Header />
      <App />
    </GeneralProvider>
  </React.StrictMode>
);
