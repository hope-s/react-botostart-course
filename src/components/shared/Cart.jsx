import React from "react";
import { shorten } from "../../helper/functions";
import { quantityCount } from "../../helper/functions";
import Trash from "../../assets/trash.svg";

export default function Cart({ data, dispatch, state }) {
  // const { price, image, title, id, quantity } = {
  //   id: 2,
  //   title: "Mens Casual Premium Slim Fit T-Shirts ",
  //   price: 22.3,
  //   description:
  //     "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //   category: "men's clothing",
  //   image:
  //     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  // };

  const { price, image, title, id, quantity } = data;

  return (
    <div style={{ display: "flex" }}>
      <div className="shopCartProduct">
        <div className="shopCartImge">
          <img src={image} alt={title} />
        </div>
        <p>{shorten(title, 2)}</p>
        <p>{price} $</p>
        <p>{quantity}</p>
        <div className="shopCardButtons">
          <button
            className="countBtn"
            onClick={() => dispatch({ type: "INCREASE", payload: data })}
          >
            +
          </button>
          {quantityCount(state, id) === 1 ? (
            <button
              className="countBtn"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
            >
              <img src={Trash} alt="trash" />
            </button>
          ) : (
            <button
              className="countBtn"
              onClick={() => dispatch({ type: "DECREASE", payload: data })}
            >
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
