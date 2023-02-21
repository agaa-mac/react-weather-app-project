import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import CurrentWeather from "./CurrentWeather";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <React.StrictMode>
      <CurrentWeather />
    </React.StrictMode>
    <div>
      <footer>
        This project was coded by Agata Mączyńska and is open-sourced on{" "}
        <a
          href="https://github.com/agaa-mac/react-weather-app-project"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>{" "}
        and hosted on
        <a
          href="https://musical-rabanadas-60e773.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Netlify
        </a>{" "}
      </footer>
    </div>
  </div>
);

reportWebVitals();
