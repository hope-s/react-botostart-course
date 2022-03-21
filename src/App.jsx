import React, { useCallback, useState } from "react";
import A from "./components/a";
import B from "./components/b";

function App() {
  const [one, setOne] = useState("a");
  const [two, setTwo] = useState("b");

  console.log("<App/>");

  const setName1 = useCallback(() => {
    setOne("aa");
  }, [one]);

  const setName2 = useCallback(() => {
    setTwo("bb");
  }, [two]);

  return (
    <div>
      <A value={one} func={setName1} />
      <B value={two} func={setName2} />
    </div>
  );
}
export default App;
