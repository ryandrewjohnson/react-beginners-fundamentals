import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const logoUrl =
  "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png";

function App(props) {
  return (
    <div className="App" tabIndex="1">
      <img src={logoUrl} width="200" alt="logo" />
      <h1>Hello CodeSandbox: {props.version}</h1>

      {props.version < 1 ? (
        <p>You should upgrade your version</p>
      ) : (
        <p>Your version is up to date</p>
      )}

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App version="1.0" />, rootElement);
