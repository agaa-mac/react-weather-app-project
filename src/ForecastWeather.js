import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

export default function ForecastWeather(props) {
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="col-5">
        <div className="Forecast">
          <WeatherForecastDay data={forecast[0]} />
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
    );
  } else {
    let apiKey = "bb5oaf353e45cba2e47481cc44200t7b";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
