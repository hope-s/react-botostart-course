import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 9999;
  & div {
    height: 4px;
    width: 35px;
    margin: 4px;
    border-radius: 2px;
    background-color: ${({ isOpen }) => (isOpen ? "white" : "#000000")};
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-origin: 29px;
  }
  & :nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
  & :nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }
  & :nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  }
`;

export default function Hamburger({ state }) {
  return (
    <Div isOpen={state}>
      <div></div>
      <div></div>
      <div></div>
    </Div>
  );
}
