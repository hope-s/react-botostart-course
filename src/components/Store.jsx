import React, { useContext } from "react";
import { ProductsContext } from "./context/GetProductsContext";
import Product from "./shared/Product";

export default function Store() {
  const products = useContext(ProductsContext);

  return (
    <div className="cardContainer">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
}
