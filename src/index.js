import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <button onClick={() => console.log('clicked')}>Tell me a joke</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
