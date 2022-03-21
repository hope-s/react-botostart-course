import React from "react";

const B = ({ value, func }) => {
  console.log("<B/>");
  return (
    <div>
      {value}
      <button onClick={func}>setName B</button>
    </div>
  );
};
export default React.memo(B);