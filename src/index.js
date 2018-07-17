import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: null
    };

    this.onTellJokeClicked = this.onTellJokeClicked.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ joke: json });
      });
  }

  onTellJokeClicked() {
    this.setState(
      {
        joke: "Here is my awesome new joke!"
      },
      () => {
        console.log("joke", this.state.joke);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Joke Generator</h1>
        <p>Click the button below to generate joke!</p>
        <button onClick={this.onTellJokeClicked}>Tell me another joke</button>

        <div>
          <label>id:</label>
          <span>{this.state.joke.id}</span>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
