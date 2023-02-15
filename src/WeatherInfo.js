import React from "react";
import FormattedDate from "./FormattedDate";

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
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
        <div className="col-3 WeatherTemp">
          {props.data.temperature}
          <span className="Unit">°C</span>
        </div>
      </div>
      <p className="WeatherConditions">humidity {props.data.humidity} %</p>
      <p className="WeatherConditions">Wind {props.data.wind} km/h</p>
    </div>
  );
}
