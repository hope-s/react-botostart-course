import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/config';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { HelmetProvider } from 'react-helmet-async';

const rootElemet = document.getElementById('root');
const root = createRoot(rootElemet);

root.render(
  <HelmetProvider>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
    </ApolloProvider>
  </HelmetProvider>
);
