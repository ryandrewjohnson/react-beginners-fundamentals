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
    this.searchJokes();
  }

  onTellJokeClicked() {
    this.fetchJoke();
  }

  async fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const joke = await response.json();
    this.setState({ joke });
  }

  async searchJokes() {
    const response = await fetch("https://icanhazdadjoke.com/search?limit=10", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const { results: jokes } = await response.json();

    this.setState({ jokes });
  }

  render() {
    return (
      <div className="App">
        <form>
          <h1>Doogle</h1>
          <input
            type="text"
            placeholder="enter search term"
            onChange={event => console.log(event.target.value)}
          />
          <button>Search</button>
          <button type="button" onClick={this.onTellJokeClicked}>
            I'm Feeling Funny 🤪
          </button>
        </form>

        {this.state.joke && <p>{this.state.joke.joke}</p>}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
