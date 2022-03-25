import React from "react";

export default function Navbar({ logOutHandler }) {
  return (
    <nav>
      <div>botogram</div>
      <button onClick={logOutHandler}>Logout</button>
    </nav>
  );
}
