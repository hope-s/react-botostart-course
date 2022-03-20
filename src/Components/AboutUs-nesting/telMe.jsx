import React, { Component } from "react";

export default class TelMe extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Tel Me</h1>
        <p>Tel Me paragraph</p>
      </div>
    );
  }
}
