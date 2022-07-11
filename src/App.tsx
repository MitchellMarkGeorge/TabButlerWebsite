import React from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

import { HomePage } from './Pages';

function App() {
  return (
    <ChakraProvider theme={extendTheme({
      fonts: {
        body: `'Open Sans', sans-serif`,
      },
    })}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
