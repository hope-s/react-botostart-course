import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

export default class Blogs extends Component {
  render() {
    const res = queryString.parse(this.props.location.search);
    console.log(res);
    return (
      <div>
        <button>
          <Link
            to={{
              pathname: "/blogs/one",
            }}
          >
            one
          </Link>
        </button>
        <button>
          <Link to="/blogs/two">two</Link>
        </button>
        <button>
          <Link to="/blogs/three">three</Link>
        </button>
        <button>
          <Link to="/blogs/for">for</Link>
        </button>
        <h4>blog:{this.props.match.params.name}</h4>
      </div>
    );
  }
}
