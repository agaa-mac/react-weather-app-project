import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function (props) {
  const [unit, setUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        {props.tempC}
        <span className="Unit">
          °C |
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.tempC * 9) / 5 + 32);
    return (
      <span>
        {fahrenheit}
        <span className="Unit">
          <a href="/" onClick={convertToC}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
