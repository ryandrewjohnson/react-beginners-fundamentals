import React from "react";
import ReactDOM from "react-dom";
import SearchForm from './SearchForm';

import "./styles.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetchingJokes: false,
      jokes: [],
      searchTerm: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  onSearchChange(value) { 
    this.setState({ searchTerm: value });
  }

  searchJokes(limit = 5) {
    this.setState({ isFetchingJoke: true });

    console.log('limit', limit);
    
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
        <SearchForm 
          isFetchingJokes={this.state.isFetchingJokes} 
          onFormSubmit={this.onSearchSubmit}
          onSearchTermChange={this.onSearchChange}
          onFeelingLuckyClick={() => this.searchJokes(1)}
        />

        {this.state.isFetchingJokes 
          ? 'Loading joke...'
          : this.state.jokes.map(item => <p key={item.id}>{item.joke}</p>)
        }
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
