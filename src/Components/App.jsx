// import styles from "./App.module.css";
import React from "react";
import Main from "./Main";
import styled, { css } from "styled-components";

function App(props) {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="Main">
      <Main/>
    </div>
  );
}

export default App;
