import React, { useContext } from "react";
import { CardContext } from "../context/CardContextProvider";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function ShopCart() {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div>
      {state.checkout && (
        <div className="shopCartMessage colorPrimary">
          <h1>checkout Successfully</h1>
          <Link to="/">Back to home</Link>
        </div>
      )}
      {!state.checkout && !state.itemsCounter && (
        <div className="shopCartMessage">
          <h1>Cleared</h1>
          <Link to="/">Back to home</Link>
        </div>
      )}

      <div
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >
        {state.selectedItems.map((i, key) => (
          <Cart key={key} data={i} dispatch={dispatch} state={state} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className="cardCheckout">
          <p>
            <span>Total Items:</span> {state.itemsCounter}
          </p>
          <p>
            <span>Total payments:</span> {state.total} $
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              className="cardBtn"
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              checkout
            </button>
            <button
              className="cardBtn"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              CLAER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
