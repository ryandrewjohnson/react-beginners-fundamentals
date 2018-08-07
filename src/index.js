import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetchingJoke: false,
      joke: null
    };

    this.onTellJoke = this.onTellJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
    this.searchJokes();
  }

  onTellJoke() {
    this.fetchJoke();
  }

  fetchJoke() {
    this.setState({ isFetchingJoke: true });

    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ 
          isFetchingJoke: false,
          joke: json.joke
        });
      })
      .catch(err => {
        this.setState({ isFetchingJoke: false });
      });
  }

  searchJokes() {
    this.setState({ isFetchingJoke: true });
    
    fetch("https://icanhazdadjoke.com/search", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      const jokes = json.results;
      this.setState({
        isFetchingJoke: false,
        jokes
      });
    })
    .catch(err => {
      this.setState({ isFetchingJoke: false });
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" placeholder="Enter search term..." />
          <button>Search</button>
          <button onClick={this.onTellJoke} disabled={this.state.isFetchingJoke}>Tell me a joke</button>
        </form>
        
        <p>{this.state.isFetchingJoke ? 'Loading joke...' : this.state.joke}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
