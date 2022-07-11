import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { HomePage } from './Pages';

const App: React.FC = () => {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          body: `'Open Sans', sans-serif`,
        },
      })}
    >
      <HomePage />
    </ChakraProvider>
  );
};

export default App;
