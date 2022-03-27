import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";
import { shorten } from "../helper/functions";
import { getProducts } from "../stateManager/productActions";
import { useSelector, useDispatch } from "react-redux";

export default function ProductDetails() {
  const state = useSelector((state) => state.products.allItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const params = useParams();
  const productDetails = state.filter((item) => item.id === Number(params.id));

  return (
    <div className="cardDetails">
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <div className="cardDetailsImage">
          <img
            src={productDetails[0]?.image}
            alt={shorten(productDetails[0]?.title, 2)}
          />
        </div>
        <div className="cardDetailsChild">
          <h3 className="cardDetailsText">
            {shorten(productDetails[0]?.title, 4)}
          </h3>
          <p className="cardDetailsText">{productDetails[0]?.description}</p>
          <p className="cardDetailsText">
            <span>Category: </span>
            {productDetails[0]?.category}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <button className="cardBtn">{productDetails[0]?.price} $</button>
            <Link className="cardLink" to="/products">
              shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
