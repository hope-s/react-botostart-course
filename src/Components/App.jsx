// import styles from "./App.module.css";
import React from "react";
import Hamburger from "./Hamburger";
import styled, { css } from "styled-components";

const Ul = styled.ul`
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-color: ${({ isOpen }) => (isOpen ? "blue" : "white")};
    height: ${({ isOpen }) => (isOpen ? "10%" : "0")};
    color: white;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  padding: 0.125rem;
  margin: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: right;
  list-style: none;
  & li {
    margin: 1rem;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  }
`;

function App(props) {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <div onClick={() => setOpen((state) => !state)}>
        <Hamburger state={open} />
      </div>
      <Ul isOpen={open}>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>for</li>
        <li>five</li>
        <li>six</li>
      </Ul>
    </>
  );
}

export default App;
