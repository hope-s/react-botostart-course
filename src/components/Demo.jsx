import React from "react";
import { useState, useTransition } from "react";
import { numberCreator } from "../number";
import Numbers from "./Numbers";
export default function Demo() {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState(numberCreator());
  const [isPending, startTrasition] = useTransition();
  console.log(isPending);

  const chnageHandler = ({ target: { value } }) => {
    setValue(value);
    setNumbers(numberCreator(value));
  };
  return (
    <div>
      <input value={value} type="text" onChange={chnageHandler} />
      <Numbers numbers={numbers} />
    </div>
  );
}
