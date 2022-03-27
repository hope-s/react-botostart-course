import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREASE_NUMBER, DECREASE_NUMBER } from "../redux/constans";

export default function Number() { 
  const [value, setValue] = useState(1);
  const { number } = useSelector((state) => state.reducerNumber);
  const dispatch = useDispatch();
  
  return (
    <div>
      <br />
      <h1>number: {number}</h1>
      <input value={value} onChange={(e)=> setValue(e.target.value)}/>
      <br/>
      <button onClick={() => dispatch({ type: INCREASE_NUMBER, payload: +value })}> + number </button>
      <button onClick={() => dispatch({ type: DECREASE_NUMBER })}> - number </button>
      <br />
      <br />
    </div>
  );
}
