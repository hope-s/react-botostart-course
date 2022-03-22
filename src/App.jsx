import React from "react";
import SignUp from "./components/SignUp";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <SignUp />
      <ToastContainer />
    </div>
  );
}
