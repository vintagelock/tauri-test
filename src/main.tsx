import React from 'react';
import ReactDOM from 'react-dom/client';

import ErrorBoundary from './components/ErrorBoundary';

import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import { HashRouter } from 'react-router-dom';

// import { attachConsole } from "tauri-plugin-log-api";

// core styles are required for all packages
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

import App from './App';

// Tauri logging integration
//if (import.meta.env.DEV) {
//  attachConsole();
//}

const Main = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider theme={theme} forceColorScheme="dark">
        <Notifications />
        <HashRouter>
          <Main />
        </HashRouter>
      </MantineProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
