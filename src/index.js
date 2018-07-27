import React from "react";
import ReactDOM from "react-dom";
import Joke from "./Joke/Joke";

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
    this.fetchJoke();
  }

  onTellJokeClicked() {
    this.fetchJoke();
  }

  fetchJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ joke: json });
      });
  }

  render() {
    return (
      <div className="App">
        <form>
          <h1>Doogle</h1>
          <input type="text" placeholder="enter search term" />
          <button>Search</button>
          <button onClick={this.onTellJokeClicked}>I'm Feeling Funny 🤪</button>
        </form>

        {this.state.joke && <p>{this.state.joke.joke}</p>}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
