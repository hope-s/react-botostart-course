import React, { Component } from "react";
import HOComponent from "./HOComponent";

class Child2 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.clickHandler}>counter</button>
        <h1>{this.props.number}</h1>
        <h4>{this.props.text}</h4>
        <h3>{this.props.n}</h3>
      </div>
    );
  }
}
export default HOComponent(Child2, 1);
