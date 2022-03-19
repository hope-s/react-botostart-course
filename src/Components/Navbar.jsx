import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/products">Products</Link>
      </button>
      <button>
        <Link
          to={{
            pathname: "/blogs",
            search: "?sort=name",
            hash: "#the-hash",
            state: { fromDashboard: true },
          }}
        >
          Blogs
        </Link>
      </button>
      <button>
        <Link to="/aboutus">AboutUS</Link>
      </button>
    </div>
  );
}
