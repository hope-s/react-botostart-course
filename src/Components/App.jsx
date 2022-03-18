import React, { Component } from "react";
import Child from "./Child";
import Child2 from "./Child2";

export default class App extends Component {
  render() {
    return (
      <div>
        <Child text="Child" n={1}/>
        <Child2 text="Child2"/>
      </div>
    );
  }
}