import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { HomeProvider } from "./homeState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HomeProvider>
  </React.StrictMode>
);