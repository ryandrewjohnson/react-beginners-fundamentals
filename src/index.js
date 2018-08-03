import React from "react";
import ReactDOM from "react-dom";
import Joke from "./Joke/Joke";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: null,
      jokes: [],
      searchTerm: ""
    };

    this.onTellJokeClicked = this.onTellJokeClicked.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onTellJokeClicked() {
    this.fetchJoke();
    this.setState({ jokes: [] });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    event.preventDefault();
    this.searchJokes();
    this.setState({ joke: null });
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
    const response = await fetch(
      `https://icanhazdadjoke.com/search?limit=10&term=${
        this.state.searchTerm
      }`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    );

    const { results: jokes } = await response.json();

    this.setState({ jokes });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSearchSubmit}>
          <h1>Doogle</h1>
          <input
            type="text"
            placeholder="enter search term"
            onChange={this.onSearchChange}
          />
          <button>Search</button>
          <button type="button" onClick={this.onTellJokeClicked}>
            I'm Feeling Funny 🤪
          </button>
        </form>

        {this.state.joke && <p>{this.state.joke.joke}</p>}

        {this.state.jokes.map(item => <p key={item.id}>{item.joke}</p>)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
