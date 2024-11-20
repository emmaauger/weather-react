import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is created by Emma Auger Hirner and is open sourced on{" "}
          <a
            href="https://github.com/emmaauger/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
