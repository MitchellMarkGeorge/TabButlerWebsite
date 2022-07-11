import React from 'react';
import {
  Box,
  Text,
  VStack,
  Image,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react';

import { NavBar } from '../components';
import { FaArrowRight } from 'react-icons/fa';

export const HomePage: React.FC = () => {
  const theme = useColorModeValue('dark', 'light');

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack position="relative">
        <NavBar />
        <VStack spacing={8} paddingTop={32} height="100vh">
          <Stack
            spacing={8}
            paddingLeft={10}
            paddingRight={10}
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
          >
            <VStack maxW={400} spacing={5}>
              <Text fontSize={['md', 'xl', '4xl']} fontWeight="bold">
                A Tab Manager at Your Service.
              </Text>
              <Text fontSize={['sm', 'md', 'xl']} fontWeight="light">
                The last browser extension you will need to navigate in your
                browser.
              </Text>

              <Button rightIcon={<FaArrowRight />} colorScheme="telegram">
                Join the Beta
              </Button>
            </VStack>
            <Image
              src={`/static/img/search-modal-${theme}.png`}
              sx={{
                height: 'min(29.4vw + 70.78px,447px)',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Stack>
        </VStack>

        <VStack spacing={8} height="100vh">
          <Stack
            spacing={8}
            paddingLeft={10}
            paddingRight={10}
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
          >
            <VStack maxW={400} spacing={5}>
              <Text fontSize={['md', 'xl', '4xl']} fontWeight="bold">
                Execute powerful actions from any tab.
              </Text>
              <Text fontSize={['sm', 'md', 'xl']} fontWeight="light">
                Do common actions like creating new tabs, muting the current
                tab, and much more - all from your fingertips.
              </Text>
            </VStack>
            <Image
              src={`/static/img/actions-modal-dark.png`}
              sx={{
                height: 'min(29.4vw + 70.78px,447px)',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Stack>
        </VStack>
      </VStack>
    </Box>
  );
};
