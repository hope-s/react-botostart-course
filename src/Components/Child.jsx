import React, { Component } from "react";
class Child extends Component {
  render() {
    const { body, title } = this.props;
    return (
      <div style={{border: '1px solid blue', borderRadius: 10, margin: 10, padding: 10}}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Child;
