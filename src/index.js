import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import CurrentWeather from "./CurrentWeather";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentWeather />
  </React.StrictMode>
);

reportWebVitals();
