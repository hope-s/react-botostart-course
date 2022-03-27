import React from "react";
import Product from "./shared/Product";
import { useSelector } from "react-redux";

export default function Store() {
  const products = useSelector((state) => state.products);
  console.log(products.error);
  return (
    <div className="cardContainer">
      {products.loading ? (
        <div style={{ display: "flex" }}>
          <h2>Loading...</h2>
        </div>
      ) : products.error ? (
        <div style={{ display: "flex" }}>
          <h2>{products.error}</h2>
        </div>
      ) : (
        <>
          {products.allItems.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </>
      )}
    </div>
  );
}
