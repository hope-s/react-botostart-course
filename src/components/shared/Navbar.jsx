import React, { useContext } from "react";
import { CardContext } from "../context/CardContextProvider";
import "../style.scss";
import Shop from "../../assets/shop.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { state } = useContext(CardContext);
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
