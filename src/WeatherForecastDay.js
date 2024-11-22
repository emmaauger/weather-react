import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import store from "./store";
import { useSelector } from "react-redux";

export default function WeatherForecastDay(props) {
  const [temperature, setTemperature] = useState([
    props.data.temperature.maximum,
    props.data.temperature.minimum,
  ]);
  let select = useSelector((state) => state);
  let storeIdx = store.getState().units.length - 1;

  function changeUnit() {
    if (store.getState().units[storeIdx].currentUnit[0] === "C") {
      let max = Math.round((props.data.temperature.maximum * 9) / 5 + 32);
      let min = Math.round((props.data.temperature.minimum * 9) / 5 + 32);
      setTemperature([max, min]);
      return null;
    } else {
      setTemperature([
        Math.round(props.data.temperature.maximum),
        Math.round(props.data.temperature.minimum),
      ]);
      return null;
    }
  }
  useEffect(() => {
    changeUnit();
  }, [select]); // eslint-disable-line react-hooks/exhaustive-deps

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
          {temperature[0]}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {temperature[1]}°
        </span>
      </div>
    </div>
  );
}
