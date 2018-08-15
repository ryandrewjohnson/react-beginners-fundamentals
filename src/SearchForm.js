import React from 'react';

const SearchForm = props => (
  <form onSubmit={props.onFormSubmit}>
    <input type="text" placeholder="Enter search term..." onChange={(event) => props.onSearchTermChange(event.target.value)} />
    <button>Search</button>
    <button onClick={props.onFeelingLuckyClick} disabled={props.isFetchingJoke} type="button">I'm Feeling Funny</button>
  </form>
);

 export default SearchForm;