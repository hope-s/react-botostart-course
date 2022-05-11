import { useMemo, useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState(1);

  const slow = useMemo(() => {
    for (let index = 0; index < 1000000000; index++) {}
    return show;
  }, [show]);

  function setShowFunc() {
    setShow(!show);
  }

  function setFuncNumber() {
    setNumber(number + 1);
  }

  return (
    <div className="App">
      <h1>{slow ? "true" : "false"}</h1>
      <p>{number}</p>
      <button onClick={setFuncNumber}>set number</button>
      <button onClick={setShowFunc}>set show</button>
    </div>
  );
}
