import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <p>Click the button below to generate joke!</p>
      <button>Tell me a joke</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
