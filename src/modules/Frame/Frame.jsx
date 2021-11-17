import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ApolloProvider } from '@apollo/client';

import Episode from '../Episode';
import Episodes from '../Episodes';

import styles from './Frame.scss';

export function Frame({ client, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ApolloProvider client={client}>
        <div className={styles.app}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Episodes />} />
              <Route path="episode/:episodeId" element={<Episode />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}
