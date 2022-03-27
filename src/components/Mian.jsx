import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "../redux/counter/counterActions";

function Mian() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const increament = () => {
    dispatch(increase());
  };
 
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => increament()}>increase</button>
    </div>
  );
}

export default Mian;
