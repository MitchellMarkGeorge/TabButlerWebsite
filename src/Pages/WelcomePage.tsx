import { useState } from 'react';
import { Box, Text, VStack, ScaleFade, Kbd } from '@chakra-ui/react';
import { NavBar } from '../components';

export const WelcomePage: React.FC = () => {
  const isMac: boolean = window.navigator.userAgent.includes('Mac');
  const [animationIn, setAnimationIn] = useState(false);

  setTimeout(() => {
    setAnimationIn(true);
  }, 500);

  return (
    <Box textAlign="center" fontSize="xl">
      <ScaleFade in={true}>
        <VStack position="relative" spacing={12} paddingBottom={12}>
          <NavBar />
          <ScaleFade in={animationIn} initialScale={0.8}>
            <VStack spacing={8} justifyContent="center" paddingTop={16}>
              <Text fontSize="6xl" fontWeight="thin">
                Thanks for installing Tab Butler 🥳🤗!
              </Text>
              <Text fontSize="4xl" fontWeight="thin">
                Let's get you started!
              </Text>
              <Box maxWidth="60%">
                <Text fontSize="2xl" opacity={0.9} fontWeight="light">
                  Once the extension is fully activated, you can search your
                  tabs from any tab by pressing:{' '}
                  <Kbd>{isMac ? 'Command' : 'Ctrl'} + Shift + Space</Kbd>
                </Text>
                <Text fontSize="2xl" opacity={0.9} fontWeight="light">
                  and you can execute actions from any tab using:{' '}
                  <Kbd>{isMac ? 'Option' : 'Alt'} + Shift + Space</Kbd>
                </Text>
              </Box>
            </VStack>
          </ScaleFade>
        </VStack>
      </ScaleFade>
    </Box>
  );
};
