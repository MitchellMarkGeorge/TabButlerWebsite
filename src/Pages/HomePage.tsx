import React from 'react';
import {
  Box,
  Text,
  VStack,
  Image,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { NavBar } from '../components';

export const HomePage: React.FC = () => {
  const theme = useColorModeValue('dark', 'light');

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack>
        <NavBar />
        <VStack spacing={8}>
          <Stack
            spacing={8}
            marginTop={20}
            paddingLeft="10"
            paddingRight="10"
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
          >
            <VStack maxW={400}>
              <Text fontSize={['md', 'xl', '4xl']} fontWeight="bold">
                A Tab Manager at Your Service.
              </Text>
              <Text fontSize={['sm', 'md', 'xl']} fontWeight="light">
                The last browser extension you will need to navigate in your
                browser.
              </Text>
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
      </VStack>
    </Box>
  );
};
