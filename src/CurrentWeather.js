import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";
import ForecastWeather from "./ForecastWeather";

import WeatherInfo from "./WeatherInfo";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("London");

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setWeather({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon,
    });
  }
  function search() {
    let apiKey = "bb5oaf353e45cba2e47481cc44200t7b";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="Container">
        <div className="row">
          <div className="col">
            <div className="CurrentWeather">
              <form className="Search" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a City.."
                  onChange={handleCity}
                  className="Text"
                ></input>
                <input
                  type="submit"
                  value="Search"
                  className="SearchButton"
                ></input>
              </form>
              <WeatherInfo data={weather} alt={weather.description} />
            </div>
          </div>
          <ForecastWeather />
        </div>
      </div>
    );
  } else {
    search();
  }
}
