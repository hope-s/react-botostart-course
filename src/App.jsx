import React from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SingIn";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/signIn" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
