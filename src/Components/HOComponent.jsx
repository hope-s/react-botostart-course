import React, { Component } from "react";

export default function HOComponent(CO, number) {
  class HOComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 10,
      };
    }

    handelClick = () => {
      this.setState((prev) => ({
        number: prev.number + number,
      }));
    };
    render() {
      return <CO number={this.state.number} clickHandler={this.handelClick} {...this.props} n={this.props.n} />;
    }
  }
  return HOComponent;
}
