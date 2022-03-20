import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./Components/HomePage";
import Blogs from "./Components/Blogs";
import AboutUS from "./Components/AboutUS";
import NotFound from "./Components/Error404";

import TelMe from "./Components/AboutUs-nesting/telMe";
import Roules from "./Components/AboutUs-nesting/Rouls";

const Navbar = React.lazy(() => import("./Components/Navbar"));

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<h4>loading....</h4>}>
          <Navbar />
        </Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUS />}>
            <Route path=":telme" element={<TelMe />} />
            <Route path="roules" element={<Roules />} />
          </Route>
          <Route path="/blogs/*" element={<Blogs />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notFound" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
