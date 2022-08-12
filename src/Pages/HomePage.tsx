import React from 'react';
import {
  Box,
  Text,
  VStack,
  Image,
  useColorModeValue,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react';

import { NavBar, SectionContainer, Showcase } from '../components';
import { MdChangeHistory, MdMail } from 'react-icons/md';
import { FaClipboard } from 'react-icons/fa';
import { CHROME_URL, FIREFOX_URL, isFirefox } from '../utils';

export const HomePage: React.FC = () => {
  const theme = useColorModeValue('dark', 'light');

  return (
    <Box
      textAlign="center"
      fontSize="xl"
      height="100%"
      width="100%"
      overflowY="auto"
    >
      <VStack
        spacing={{ base: 16, lg: 0 }}
        height="100%"
        width="100%"
        overflowY="auto"
        scrollSnapType="y"
      >
      <NavBar />
        <Showcase>
          <SectionContainer>
            <VStack
              maxWidth={400}
              width="100%"
              spacing={5}
              margin="auto"
            >
              <Text fontSize="5xl" fontWeight="bold">
                A tab manager at your service.
              </Text>
              <Text fontSize="2xl" fontWeight="light">
                Switch to your wanted tab with incredible ease. Go where you
                want, when you want.
              </Text>
              <Button
                as={Link}
                colorScheme="telegram"
                href={isFirefox ? FIREFOX_URL : CHROME_URL}
              >
                Join the Beta
              </Button>
            </VStack>

            <Image
              src={`/static/img/search-modal-${theme}.png`}
              fit="contain"
            />
          </SectionContainer>
        </Showcase>

        <Showcase>
          {' '}
          <SectionContainer>
            <VStack maxWidth={400} spacing={5}               margin="auto">
              <Text fontSize="5xl" fontWeight="bold">
                Execute powerful actions from any tab.
              </Text>
              <Text fontSize="2xl" fontWeight="light">
                Do common actions like creating new tabs, muting the current
                tab, and much more - all from one shortcut.
              </Text>
            </VStack>
            <Image src={`/static/img/actions-modal-dark.png`} fit="contain" />
          </SectionContainer>
        </Showcase>

        <Showcase>
          <VStack
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
            paddingBottom={24}
          >
            <Text fontSize="5xl" fontWeight="bold">
              Join the Beta Now!
            </Text>
            <Text fontSize="xl" fontWeight="light" fontStyle="italic">
              Change the way you use your browser forever.
            </Text>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={8}
              paddingTop={8}
              width="100%"
              maxWidth="100%"
            >
              <Button
                as={Link}
                leftIcon={<MdMail />}
                colorScheme="teal"
                variant="solid"
                href="mailto:tabbutlerextension@gmail.com"
              >
                Contact Us
              </Button>
              <Button
                as={Link}
                leftIcon={<MdChangeHistory />}
                colorScheme="purple"
                variant="solid"
                href="https://tab-butler.canny.io/changelog"
              >
                Changelog
              </Button>
              <Button
                as={Link}
                leftIcon={<FaClipboard />}
                colorScheme="green"
                variant="solid"
                href="https://forms.gle/zfSvtCPqE9TQR98h8"
              >
                Feedback Form
              </Button>
            </Stack>
          </VStack>
        </Showcase>
      </VStack>
    </Box>
  );
};
