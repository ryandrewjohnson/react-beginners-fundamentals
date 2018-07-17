import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "Here is original joke!"
    };

    this.onTellJokeClicked = this.onTellJokeClicked.bind(this);
  }

  onTellJokeClicked() {
    this.setState({
      joke: "Here is my awesome new joke!"
    });

    console.log("joke", this.state.joke);
  }

  render() {
    return (
      <div className="App">
        <h1>Joke Generator</h1>
        <p>Click the button below to generate joke!</p>
        <button onClick={this.onTellJokeClicked}>Tell me another joke</button>

        <p>{this.state.joke}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
