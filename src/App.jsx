import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/shared/ShopCart";
import { getProducts } from "./stateManager/productActions";

function App({ fetchData }) {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="products" element={<Store />} />
          <Route path="cart" element={<ShopCart />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getProducts()),
  };
};

export default connect(null, mapDispatchToProps)(App);
