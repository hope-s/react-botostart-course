import React, { Component } from "react";
import Child from "./Child";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "one",
      remove: false,
    };
    console.log("construnctor");
  }

  componentDidMount() {
    console.log("mount");
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <>
        <button onClick={this.props.set} type="button">
          set
        </button>
        <button onClick={() => this.setState({ name: "two" })}>setName</button>;
        <button onClick={() => this.setState({ remove: true })}>
          remove Child
        </button>
        {
            !this.state.remove && <Child/>
        }
      </>
    );
  }
}
