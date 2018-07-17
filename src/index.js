import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  return (
    <div className="App" tabIndex="1">
      <h1>Hello CodeSandbox: {props.version}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App version="1.0" />, rootElement);
