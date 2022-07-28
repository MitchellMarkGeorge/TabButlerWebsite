import { useState } from 'react';
import { Box, Text, VStack, ScaleFade, Kbd, Link } from '@chakra-ui/react';
import { NavBar } from '../components';
import { isFirefox, isMac } from '../utils';

export const WelcomePage: React.FC = () => {

  const [animationIn, setAnimationIn] = useState(false);

  setTimeout(() => {
    setAnimationIn(true);
  }, 300); // think about this

  const getShortcutsUrl = () => {
    if (isFirefox) {
      return 'about:addons';
    } else {
      return 'chrome://extensions/shorcuts';
    }
  };

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
              <Text fontSize="4xl" fontWeight="light">
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
                  <Kbd>
                    {isMac ? 'Option' : 'Alt'} + Shift + {isMac ? 'Space' : 'K'}
                  </Kbd>
                </Text>
              </Box>
              <Text fontSize="2xl" fontWeight="light">
                If those shortcuts don't work for you, feel free to change them
                at {getShortcutsUrl()}.
              </Text>
              <Text fontSize="2xl" fontWeight="light">
                To report any bugs or feeback for us, please submit them with <Link href='https://forms.gle/3JyYNs48999h7GKB8' color="blue.500">this</Link> form.
              </Text>
            </VStack>
          </ScaleFade>
        </VStack>
      </ScaleFade>
    </Box>
  );
};
