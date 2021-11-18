import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// import Episode from './modules/Episode';
// import Episodes from './modules/Episodes';
// import styles from './index.scss';

import client from 'root/client';
import theme from 'root/theme';
import Frame from 'root/Frame';

// const client = new ApolloClient({
//   uri: 'https://rickandmortyapi.com/graphql',
//   cache: new InMemoryCache()
// });

// export const theme = createTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#ff6300'
//     },
//     secondary: {
//       main: '#009dff'
//     },
//     background: {
//       default: '#121212',
//       paper: '#1F1B24'
//     },
//     text: {
//       primary: '#ffffff'
//     }
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         a {
//           text-decoration: none;
//         }
//         p {
//           margin-block-start: 0;
//         }
//       `
//     }
//   }
// });

// render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline enableColorScheme />
//     <ApolloProvider client={client}>
//       <div className={styles.app}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Episodes />} />
//             <Route path="episode/:episodeId" element={<Episode />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </ApolloProvider>
//   </ThemeProvider>,
//   document.getElementById('root')
// );
render(<Frame theme={theme} client={client} />, document.getElementById('root'));
