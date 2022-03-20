import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Provider from "./components/store/Provider";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
