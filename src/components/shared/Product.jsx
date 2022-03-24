import React, { useContext } from "react";
import { shorten } from "../../helper/functions";
import "../style.scss";
import { Link } from "react-router-dom";
import { isInCart, quantityCount } from "../../helper/functions";
import { CardContext } from "../context/CardContextProvider";
import Trash from "../../assets/trash.svg";

export default function Product({ product }) {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className="cardProduct">
      <img className="cardImage" src={product.image} alt={product.title} />
      <p className="cardText">{shorten(product.title, 2)}</p>
      <p className="cardText textPrice">
        {product.price}${" "}
        {quantityCount(state, product.id) >= 1 && (
          <span>
            - Count:{" "}
            {quantityCount(state, product.id)}
          </span>
        )}
      </p>

      <div className="cardButtons">
        {isInCart(state, product.id) ? (
          <>
            <button
              className="countBtn"
              onClick={() => dispatch({ type: "INCREASE", payload: product })}
            >
              +
            </button>
            {quantityCount(state, product.id) === 1 ? (
              <button
                className="countBtn"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: product })
                }
              >
                <img src={Trash} alt="trash" />
              </button>
            ) : (
              <button
                className="countBtn"
                onClick={() => dispatch({ type: "DECREASE", payload: product })}
              >
                -
              </button>
            )}
          </>
        ) : (
          <button
            className="cardBtn"
            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
          >
            ADD
          </button>
        )}
        <Link className="cardLink" to={`${product.id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
