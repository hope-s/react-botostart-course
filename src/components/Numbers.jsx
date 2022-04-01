import React, { useDeferredValue } from "react";

function Numbers({ numbers }) {
  const deferred = useDeferredValue(numbers);
  return (
    <div>
      {deferred.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
    </div>
  );
}

export default Numbers;
