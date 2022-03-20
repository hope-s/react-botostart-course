import React, { useReducer } from "react";
import axios from "axios";

const initState = {
  data: {one : []},
  error: "",
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { data: action.payload, loading: false };
    case "FAILD":
      return { loading: false, error: "not loaded data" };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { data : one, loading } = state;
  // console.log([one].map(i=> i.id))
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/20")
      .then((response) => {
        dispatch({ type: "SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FAILD" });
      });
  }, []);

  return (
    <div>
      {!loading ? (
        [one]?.map((i, index) => <h1 key={i.id}>{i.id}</h1>)
      ) : (
        <h1>loading....</h1>
      )}
    </div>
  );
}
