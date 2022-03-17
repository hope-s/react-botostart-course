import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log("child construnctor");
  }

  componentDidMount() {
    console.log("child mount");
  }

  componentDidUpdate() {
    console.log("Child updated");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log(`%c Child Render`, "color:green");
    return (
      <div>
          Child
      </div>
    );
  }
}
