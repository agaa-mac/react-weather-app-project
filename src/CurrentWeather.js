import React, { useState } from "react";
import "./CurrentWeather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});

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

  if (ready) {
    return (
      <div className="Container">
        <div className="row">
          <div className="col">
            <div className="CurrentWeather">
              <form className="Search">
                <input
                  type="text"
                  placeholder="Enter a City.."
                  className="Text"
                ></input>
                <input
                  type="submit"
                  value="Search"
                  className="SearchButton"
                ></input>
              </form>
              <h2>{weather.city}</h2>
              <p className="CurrentDay">
                <FormattedDate date={weather.date} />
              </p>
              <p className="CurrentDescription">{weather.description}</p>
              <div className="row">
                <div className="col-2 WeatherImage">
                  <img src={weather.iconUrl} alt={weather.description} />
                </div>
                <div className="col-3 WeatherTemp">
                  {weather.temperature}
                  <span className="Unit">°C</span>
                </div>
              </div>
              <p className="WeatherConditions">humidity {weather.humidity} %</p>
              <p className="WeatherConditions">Wind {weather.wind} km/h</p>
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
    let apiKey = "bb5oaf353e45cba2e47481cc44200t7b";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
