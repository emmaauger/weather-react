import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code="01n" size={32} />

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          <WeatherTemperature
            celcius={props.data.temperature.maximum}
            main={false}
          />
        </span>
        <span className="WeatherForecast-temperature-min">
          <WeatherTemperature
            celcius={props.data.temperature.minimum}
            main={false}
          />
        </span>
      </div>
    </div>
  );
}
