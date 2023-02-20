import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-night": "PARTLY_CLOUDY_NIGHT",
    "rain-day": "PARTLY_CLOUDY_NIGHT",
    "rain-night": "PARTLY_CLOUDY_NIGHT",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color=" rgb(0, 68, 68)"
      size={60}
      animate={true}
    />
  );
}
