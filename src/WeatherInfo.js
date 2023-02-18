import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2>{props.data.city}</h2>
      <p className="CurrentDay">
        <FormattedDate date={props.data.date} />
      </p>
      <p className="CurrentDescription">{props.data.description}</p>
      <div className="row">
        <div className="col-2 WeatherImage">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <img
            className="mainIcon"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
        </div>
        <div className="col-6 WeatherTemp">
          <WeatherTemperature tempC={props.data.temperature} />
        </div>
      </div>
      <p className="WeatherConditions">Humidity {props.data.humidity} %</p>
      <p className="WeatherConditions">Wind {props.data.wind} km/h</p>
    </div>
  );
}
