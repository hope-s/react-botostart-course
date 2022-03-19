import React, { Component } from "react";

export default class Produnct extends Component {
    render() {
    return <h2>this is a produnct {this.props.match.params.id}</h2>;
  }
}
