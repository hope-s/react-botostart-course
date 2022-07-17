import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.scss";
import App from "./App";
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql";

const rootElemet = document.getElementById("root");
const root = createRoot(rootElemet);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);