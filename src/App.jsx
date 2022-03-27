import React from "react";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import Number from "./components/Number";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <Number/>
    </Provider>
  );
}
