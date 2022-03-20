import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h4>
        <Link to="/">Home</Link>
      </h4>
      <h4>
        <Link to="/blogs">Blogs</Link>
      </h4>
      <h4>
        <Link to="/aboutus">AboutUS</Link>
      </h4>
    </div>
  );
}
