import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import { client } from './graphql/config';
import theme from './theme/theme';

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
