import React, { useContext } from "react";
import { context } from "../App";

export default function Main() {
  const value = useContext(context);
  return <div>{value}</div>;
}
