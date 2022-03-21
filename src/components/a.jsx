import React from "react";

const A = ({ value, func })=> {
  console.log("<A/>");
  return (
    <div>
      {value}
      <button onClick={func}>setName A</button>
    </div>
  );
};
export default React.memo(A);
