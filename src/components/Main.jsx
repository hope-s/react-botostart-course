import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREASE, DECREASE, SET_DATA } from "../redux/constans";
import { getApi } from "../services/api";

function Mian() {
  const { counter } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const increament = () => {
    dispatch({ type: INCREASE });
  };

  const decreament = () => {
    dispatch({ type: DECREASE });
  };

  useEffect(() => {
    const setStore = async () => {
      dispatch({ type: SET_DATA, payload: await getApi() });
    };
    setStore();
  }, []);

  const { data } = useSelector((state) => state.reducerData);
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={increament}>increase</button>
      <button onClick={decreament}>decrease</button>
      <p>{data?.title}</p>
    </div>
  );
}

export default Mian;
