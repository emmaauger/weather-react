import React, { useState, useEffect } from "react";
import store from "./store";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(["F", "C"]);
  const [temperature, setTemperature] = useState(Math.round(props.celcius));

  useEffect(() => {
    const defaultUnit = ["FC"];
    setTemperature(`${Math.round(props.celcius)}`);
    setUnit(`${defaultUnit}`);
  }, [props.celcius]);

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
      setTemperature(Math.round(props.celcius));
    } else {
      setUnit(["C", "F"]);
      setTemperature(Math.round(((props.celcius - 32) * 5) / 9));
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
      setTemperature(Math.round(props.celcius));
      return <span>{}° </span>;
    }
  }
}
