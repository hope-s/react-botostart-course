import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

const rootElemet = document.getElementById('root');
const root = createRoot(rootElemet);

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
