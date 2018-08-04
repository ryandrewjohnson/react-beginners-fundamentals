import React from "react";

const JokeSearchForm = props => (
  <form onSubmit={props.onFormSubmit}>
    <h1>Doogle</h1>
    <input
      type="text"
      placeholder="enter search term"
      onChange={props.onSearchChange}
    />
    <button>Search</button>
    <button type="button" onClick={this.onTellJokeClicked}>
      I'm Feeling Funny 🤪
    </button>
  </form>
);

export default JokeSearchForm;
