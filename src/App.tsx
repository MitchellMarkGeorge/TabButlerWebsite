import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { HomePage } from './Pages';

const App: React.FC = () => {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;`,
        },
      })}
    >
      <HomePage />
    </ChakraProvider>
  );
};

export default App;
