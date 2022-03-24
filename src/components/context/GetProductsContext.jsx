import React, { useEffect, useState, createContext } from "react";
import { getProducs } from "../../services/api";

export const ProductsContext = createContext();

export default function GetProductsContext({ children }) {
  const [products, setProducs] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducs(await getProducs());
    };
    fetchApi();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
