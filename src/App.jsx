import React from "react";
import {
  useStateDispatch,
  useDispatchState,
} from "./components/store/Provider";

export default function App() {
  const dispatch = useStateDispatch();
  const { data, age } = useDispatchState();
  return (
    <div>
      <button onClick={() => dispatch({ type: "SET_DATA", payload: {name: "horaaaaaaa"} })}>
        set name
      </button>
      <button onClick={() => dispatch({ type: "SET_AGE", payload: 19 })}>
        set age
      </button>
      <h1>{data.name}</h1>
      <h1>{age}</h1>
    </div>
  );
}
