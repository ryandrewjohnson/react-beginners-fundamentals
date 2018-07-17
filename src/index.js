import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  let joke = "Here is original joke!";

  const onTellJoke = () => {
    joke = "Here is my awesome new joke!";
    console.log("joke", joke);
  };

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <p>Click the button below to generate joke!</p>
      <button onClick={onTellJoke}>Tell me another joke</button>

      <p>{joke}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
