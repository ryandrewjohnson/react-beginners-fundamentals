import React from "react";

const Joke = ({ joke }) =>
  joke !== null ? (
    <div>
      <p>id: {joke.id}</p>
      <p>type: {joke.type}</p>
      <p>setup: {joke.setup}</p>
      <p>punchline: {joke.punchline}</p>
    </div>
  ) : null;

export default Joke;
