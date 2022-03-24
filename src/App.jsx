import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GetProductsContext from "./components/context/GetProductsContext";
import ProductDetails from "./components/ProductDetails";
import CardContextProvider from "./components/context/CardContextProvider";
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/shared/ShopCart";

export default function App() {
  return (
    <GetProductsContext>
      <CardContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="products" element={<Store />} />
            <Route path="cart" element={<ShopCart />} />
            <Route path="/" element={<Navigate to="/products" />} />
          </Routes>
        </BrowserRouter>
      </CardContextProvider>
    </GetProductsContext>
  );
}
