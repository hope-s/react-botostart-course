import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.post['Content-type'] = "application/json";
axios.defaults.headers.common['Authorization'] = "12345-1344-487";

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (errre) => {
    console.log(errre);
    return Promise.reject(errre);
  }
);

axios.interceptors.request.use(
  (response) => {
    console.log(response);
    return response;
  },
  (errre) => {
    console.log(errre);
    return Promise.reject(errre);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();