import React from 'react';

 const JokeSearchForm = props => (
  <form onSubmit={this.onSearchSubmit}>
    <input type="text" placeholder="Enter search term..." onChange={this.onSearchChange} />
    <button>Search</button>
    <button onClick={() => this.searchJokes(1)} disabled={this.state.isFetchingJoke}>I'm Feeling Funny 🤪</button>
  </form>
 );

 export default JokeSearchForm;