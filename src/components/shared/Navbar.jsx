import React from "react";
import "../style.scss";
import Shop from "../../assets/shop.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.basket);
  return (
    <div>
      <nav className="navbar">
        <div className="cartShopIcon">
          <Link to="cart">
            <img src={Shop} alt="shop" />
          </Link>
          {state.itemsCounter > 0 && <span>{state.itemsCounter}</span>}
        </div>
        <Link className="navLink" to="/products">
          Products
        </Link>
      </nav>
    </div>
  );
}
