import React, { useContext, createContext, useReducer } from "react";
import { reducer, initState } from "./reducer";

const Context = createContext();
const MyState = createContext();

export const useStateDispatch = () => {
  const getContext = useContext(Context);
  if (!getContext) {
    return new Error("no context");
  }
  return getContext;
};

export const useDispatchState = () => {
  const iState = useContext(MyState);
  if (!iState) {
    return new Error("no state");
  }
  return iState;
};

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state)
  return (
    <MyState.Provider value={state}>
      <Context.Provider value={dispatch}>{children}</Context.Provider>;
    </MyState.Provider>
  );
}
