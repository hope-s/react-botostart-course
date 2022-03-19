import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./Components/HomePage";
import Products from "./Components/Products";
import Blogs from "./Components/Blogs";
import AboutUS from "./Components/AboutUS";
import Product from "./Components/Product";
import NotFound from "./Components/Error404";
import Navbar from "./Components/Navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <Switch>
            <Route path="/products/:id" component={Product} />
            <Route
              path="/blogs/:name?"
              render={(props) => <Blogs {...props} name="hope" />}
            />
            <Route path="/products" component={Products} />
            <Route path="/aboutus" component={AboutUS} />
            <Route path="/notFound" component={NotFound} />
            <Redirect from="/id" to="/aboutus" />
            <Route exact path="/" component={HomePage} />
            <Redirect to="/notFound" />
          </Switch>
        </div>
      </>
    );
  }
}
