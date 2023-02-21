import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  if (loaded) {
    return (
      <div className="col-5">
        <div className="Forecast">
          <div className="row ForecastInfo">
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col-12" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
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
