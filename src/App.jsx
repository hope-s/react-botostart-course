import React from "react";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./components/Users";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <Users/>
    </Provider>
  );
}
