import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "Hello CodeSandbox: ", props.version),
    React.createElement("h2", null, "Start editing to see some magic happen!")
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App({ version: 1.0 }), rootElement);
