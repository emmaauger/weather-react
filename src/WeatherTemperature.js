import React, { useState } from "react";
import store from "./store";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(["C", "F"]);
  const [temperature, setTemperature] = useState(Math.round(props.celcius));

  const updateGlobalState = () => {
    const globUnit = unit;
    if (isNaN(unit)) {
      store.dispatch({ type: "updateUnit", payload: globUnit });
    }
  };

  function changeUnit(event) {
    event.preventDefault();
    if (unit[0] === "C") {
      setUnit(["F", "C"]);
      setTemperature(Math.round((props.celcius * 9) / 5 + 32));
    } else {
      setUnit(["C", "F"]);
      setTemperature(Math.round(props.celcius));
    }
    updateGlobalState();
  }

  if (props.main) {
    return (
      <span>
        <span className="temperatureMain">{temperature}</span>
        <span className="unit">
          °{unit[0]} | °
          <a href="/" onClick={changeUnit}>
            {unit[1]}
          </a>
        </span>
      </span>
    );
  } else {
    let storeIdx = store.getState().units.length - 1;
    if (store.getState().units[storeIdx].currentUnit[0] === "F") {
      return <span>{}° </span>;
    } else {
      setTemperature(Math.round((props.celcius * 9) / 5 + 32));
      return <span>{}° </span>;
    }
  }
}
