import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import TelMe from "../Components/AboutUs-nesting/telMe";
import Roules from "../Components/AboutUs-nesting/Rouls";

export default class AboutUS extends Component {
  render() {
    return (
      <div>
        <h1>aboutus</h1>
        <div>
          <Link to="/aboutus/telme">Tel me</Link>
          <br />
          <Link to="/aboutus/roules">roules</Link>
        </div>
        <div>
          <Route
            path="/aboutus/telme:id?"
            render={(props) => <TelMe {...props} title="telMe" />}
          />
          <Route path="/aboutus/roules" component={Roules} />
        </div>
      </div>
    );
  }
}
