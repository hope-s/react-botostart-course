import React from "react";
import Main from "./Main";
import { v1 } from "uuid";

function App() {
  const [open, setOpen] = React.useState(true);

  const send = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    console.log(open);
  }, [open]);

  const usd = "600 $ ; l s s s s s  w e 4 iouri4rui4ru4iu 9r9i";
  const array = [
    {
      name: "omid",
      age: 18,
    },
    {
      name: "omid2",
      age: 19,
    },
    {
      name: "omid3",
      age: 20,
    },
    {
      name: "omid4",
      age: 21,
    },

  ];

  return (
    <div className="Main">
      <Main set={send} open={open} />
      <button>{open ? <>open</> : <>close</>}</button>
      {array.map((i) => (
        <div key={v1()}>
          <h2>{i.age}</h2>
          <p>{v1()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
