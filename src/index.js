import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      joke: 'Original joke goes here...'
    };

    this.onTellJoke = this.onTellJoke.bind(this);
  }

  onTellJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ joke: json.joke});
      });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onTellJoke}>Tell me a joke</button>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
