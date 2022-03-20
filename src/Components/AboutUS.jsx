import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class AboutUS extends Component {
  render() {
    return (
      <div>
        <h1>aboutus</h1>
        <Link to="telme">telMe</Link>
        <br />
        <Link to="roules">roules</Link>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}
