import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  joke = 'Original joke goes here...';

  onTellJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.joke = json.joke;
        console.log('joke', this.joke);
      });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onTellJoke}>Tell me a joke</button>
        <p>{this.joke}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
