import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetchingJoke: false,
      joke: null,
      searchTerm: ''
    };

    this.onTellJoke = this.onTellJoke.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
  }

  onTellJoke() {
    this.fetchJoke();
  }

  onSearchChange(event) { 
    this.setState({ searchTerm: event.target.value });
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
    
    fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=5`, {
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

  onSearchSubmit(event) {
    event.preventDefault();
    this.searchJokes(); 
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSearchSubmit}>
          <input type="text" placeholder="Enter search term..." onChange={this.onSearchChange} />
          <button>Search</button>
          <button onClick={this.onTellJoke} disabled={this.state.isFetchingJoke}>Tell me a joke</button>
        </form>

        <p>Your search term: {this.state.searchTerm}</p>
        
        <p>{this.state.isFetchingJoke ? 'Loading joke...' : this.state.joke}</p>

         {this.state.jokes.map(item => <p>{item.joke}</p>)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
