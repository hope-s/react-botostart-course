import React, { Suspense } from "react";
import Demo from "./components/Demo";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Demo />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
