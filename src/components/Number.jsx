import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREASE_NUMBER, DECREASE_NUMBER } from "../redux/constans";

export default function Number() {
  const { number } = useSelector((state) => state.reducerNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <br />
      <h1>number: {number}</h1>
      <button onClick={() => dispatch({ type: INCREASE_NUMBER })}> + number </button>
      <button onClick={() => dispatch({ type: DECREASE_NUMBER })}> - number </button>
    </div>
  );
}
