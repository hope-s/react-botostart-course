import React from "react";
import Demo from "./components/Demo";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Demo />
    </Provider>
  );
}

export default App;
