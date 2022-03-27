import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREASE, DECREASE } from "../redux/constans";

function Mian() {
  const { counter } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const increament = () => {
    dispatch({ type: INCREASE });
  };

  const decreament = () => {
    dispatch({ type: DECREASE });
  };

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => increament()}>increase</button>
      <button onClick={() => decreament()}>decrease</button>
    </div>
  );
}

export default Mian;
