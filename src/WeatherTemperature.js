import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(["C","F]");
  const [temperature, setTemperature] = useState(Math.round(props.celcius));

  function changeUnit(event) {
    event.preventDefault();
    if (unit[0] === "C") {
      setUnit(["F","C");
      setTemperature(Math.round((props.celcius * 9) / 5 + 32));
    } else {
      setUnit(["C","F");
      setTemperature(Math.round(props.celcius));
    }
  }

  return (
    <span>
      <span className="temperature">{temperature}</span>
      <span className="unit">
        °{unit[0]} | °
        <a href="/" onClick={changeUnit}>
          {unit[1]}
        </a>
      </span>
    </span>
  );
}
