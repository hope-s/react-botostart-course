import React from "react";
import { shorten } from "../../helper/functions";
import { quantityCount } from "../../helper/functions";
import Trash from "../../assets/trash.svg";

export default function Cart({ data, dispatch, state }) {
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
