import React from 'react';

const SearchForm = props => (
  <form onSubmit={props.onFormSubmit}>
    <input type="text" placeholder="Enter search term..." onChange={(event) => props.onSearchTermChange(event.target.value)} />
    <button>Search</button>
    <button onClick={() => this.searchJokes(1)} disabled={props.isFetchingJoke}>I'm Feeling Funny</button>
  </form>
);

 export default SearchForm;