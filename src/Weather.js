import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      percipitation: 15,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.percipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "326468886cdb97f0a6e01a8cc558a9e3";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
