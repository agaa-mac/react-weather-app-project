import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastWeather() {
  return (
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
  );
}
