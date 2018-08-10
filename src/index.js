import React from "react";
import ReactDOM from "react-dom";
import SearchForm from './SearchForm';

import "./styles.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetchingJoke: false,
      jokes: [],
      searchTerm: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  onSearchChange(event) { 
    this.setState({ searchTerm: event.target.value });
  }

  searchJokes(limit = 5) {
    this.setState({ isFetchingJoke: true });
    
    fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`, {
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
        <SearchForm />

        {this.state.isFetchingJoke 
          ? 'Loading joke...'
          : this.state.jokes.map(item => <p key={item.id}>{item.joke}</p>)
        }
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
