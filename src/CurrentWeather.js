import React from "react";
import "./CurrentWeather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentWeather() {
  return (
    <div className="Container">
      <div className="row">
        <div className="col">
          <div className="CurrentWeather">
            <form className="Search">
              <input type="text"></input>
              <input type="submit" value="Search"></input>
            </form>
            <h2>Toruń</h2>
            <p className="CurrentDay">Monday 20:00</p>
            <p className="CurrentDescription">Clear sky</p>
            <div className="row">
              <div className="col-2 WeatherImage">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="black"
                  size="50"
                  animate={true}
                />
              </div>
              <div className="col-3 WeatherTemp">
                14<span className="Unit">°C</span>
              </div>
            </div>
            <p className="WeatherConditions">humidity 38%</p>
            <p className="WeatherConditions">Wind 8 km/h</p>
          </div>
        </div>
        <div className="col">
          <div className="Forecast">
            <div className="row">
              <div className="col ForecastDay">Monday</div>
              <div className="col">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="black"
                  size="30"
                  animate={true}
                />
              </div>
              <div className="col">7 °C</div>
            </div>
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
              <div className="col">7 °C</div>
            </div>
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
              <div className="col">7 °C</div>
            </div>
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
              <div className="col">7 °C</div>
            </div>
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
              <div className="col">7 °C</div>
            </div>
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
              <div className="col">7 °C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
