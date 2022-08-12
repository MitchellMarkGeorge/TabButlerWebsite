import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { WelcomePage, HomePage } from './Pages';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider
      theme={extendTheme({
        styles: {
         global: {
          "html, body": {
            height: "100%",
            width: "100%",
          },

         } 
        }, 
        fonts: {
          body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;`,
        },
      })}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="welcome" element={<WelcomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
