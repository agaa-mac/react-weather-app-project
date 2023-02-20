import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherIcon.css";

export default function WeatherForecastDay(props) {
  function temperature() {
    let temperature = Math.round(props.data.temperature.day);
    return `${temperature}°`;
  }
  function day() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="row ForecastInfo">
      <div className="col ForecastDay">{day()}</div>
      <div className="col">
        <WeatherIcon code={props.data.condition.icon} size={40} />
      </div>
      <div className="col Temperature"> {temperature()}C</div>
    </div>
  );
}
