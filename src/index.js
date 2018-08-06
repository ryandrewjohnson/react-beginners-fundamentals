import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  let joke = 'Original joke goes here...';

  const onTellJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        joke = json.joke;
        console.log('joke', joke);
      });
  };

  return (
    <div className="App">
      <button onClick={onTellJoke}>Tell me a joke</button>
      <p>{joke}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
