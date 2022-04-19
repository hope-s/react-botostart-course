import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.scss";
import App from "./App";

const rootElemet = document.getElementById("root");
const root = createRoot(rootElemet);

root.render(
  // <StrictMode>
    <App />
  // </StrictMode>
);