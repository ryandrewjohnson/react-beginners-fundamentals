import React from "react";
import ReactDOM from "react-dom";
import Joke from "./Joke/Joke";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: []
    };

    this.onTellJokeClicked = this.onTellJokeClicked.bind(this);
  }

  componentDidMount() {
    this.fetchJokes();
  }

  onTellJokeClicked() {
    this.fetchJokes();
  }

  fetchJokes() {
    fetch(
      "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ jokes: json });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Joke Generator</h1>
        <p>Click the button below to generate joke!</p>
        <button onClick={this.onTellJokeClicked}>Tell me another joke</button>

        {this.state.jokes.map(joke => <Joke joke={joke} />)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
