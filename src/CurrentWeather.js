import React, { useState } from "react";
import "./CurrentWeather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

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
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
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
              <WeatherInfo data={weather} />
            </div>
          </div>
          <div className="col-5">
            <div className="Forecast">
              <div className="row ForecastInfo">
                <div className="col ForecastDay">Monday</div>
                <div className="col">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="black"
                    size="30"
                    animate={true}
                  />
                </div>
                <div className="col Temperature">7 °C</div>
              </div>
              <div className="row ForecastInfo">
                <div className="col ForecastDay">Tuesday</div>
                <div className="col Icon">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="black"
                    size="30"
                    animate={true}
                  />
                </div>
                <div className="col Temperature">7 °C</div>
              </div>
              <div className="row ForecastInfo">
                <div className="col ForecastDay">Wednesday</div>
                <div className="col">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="black"
                    size="30"
                    animate={true}
                  />
                </div>
                <div className="col Temperature">7 °C</div>
              </div>
              <div className="row ForecastInfo">
                <div className="col ForecastDay">Thursday</div>
                <div className="col">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="black"
                    size="30"
                    animate={true}
                  />
                </div>
                <div className="col Temperature">7 °C</div>
              </div>
              <div className="row ForecastInfo">
                <div className="col ForecastDay">Friday</div>
                <div className="col">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="black"
                    size="30"
                    animate={true}
                  />
                </div>
                <div className="col Temperature">7 °C</div>
              </div>
              <div className="row ForecastInfo">
                <div className="col ForecastDay">Saturday</div>
                <div className="col">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="black"
                    size="30"
                    animate={true}
                  />
                </div>
                <div className="col Temperature">7 °C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
  }
}
