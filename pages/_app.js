/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { lightTheme, darkTheme } from '../src/theme/index';
import GlobalStyle from '../src/theme/GlobalStyle';

import Toggle from '../src/theme/Toggle';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <Head>
        <title>Instalura - Projeto Base</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
