import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("C");
  const [temperature, setTemperature] = useState(Math.round(props.celcius));
  const [notUnit, setNotUnit] = useState("F");

  function changeUnit(event) {
    event.preventDefault();
    if (unit === "C") {
      setUnit("F");
      setTemperature(Math.round((props.celcius * 9) / 5 + 32));
      setNotUnit("C");
    } else {
      setUnit("C");
      setTemperature(Math.round(props.celcius));
      setNotUnit("F");
    }
  }

  return (
    <span>
      <span className="temperature">{temperature}</span>
      <span className="unit">
        °{unit} | °
        <a href="/" onClick={changeUnit}>
          {notUnit}
        </a>
      </span>
    </span>
  );
}
