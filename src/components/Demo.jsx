import React from "react";
import { useState, useTransition, useId } from "react";
import { numberCreator } from "../number";

export default function Demo() {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState(numberCreator());
  const [isPending, startTrasition] = useTransition();
  console.log(isPending);
  const id = useId();
  console.log(id);

  const chnageHandler = ({ target: { value } }) => {
    setValue(value);
    startTrasition(() => {
      setNumbers(numberCreator(value));
    });
  };
  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      <input value={value} type="text" onChange={chnageHandler} />
      {numbers.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
    </div>
  );
}
