import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {

  const onTellJoke = () => {
    console.log('clicked');
  };

  return (
    <div className="App">
      <button onClick={onTellJoke}>Tell me a joke</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
