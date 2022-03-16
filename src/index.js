import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrandsProvider } from "./context/BrandsContext";

ReactDOM.render(
  <React.StrictMode>
    <BrandsProvider>
      <App />
    </BrandsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
