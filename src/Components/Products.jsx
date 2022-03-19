import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Products extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Products</h1>
        <button>
          <Link to="/products/1">1</Link>
        </button>
        <button>
          <Link to="/products/2">2</Link>
        </button>
        <button>
          <Link to="/products/3">3</Link>
        </button>
        <button>
          <Link to="/products/4">4</Link>
        </button>
        <button onClick={() => this.props.history.replace("home")}>GO</button>
      </div>
    );
  }
}
