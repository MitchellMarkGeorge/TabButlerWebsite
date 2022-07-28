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
  Divider,
  HStack,
} from '@chakra-ui/react';

import { NavBar } from '../components';
import { MdChangeHistory, MdMail } from 'react-icons/md';
import { FaClipboard, FaDiscord, FaTwitter } from 'react-icons/fa';
import { isFirefox } from '../utils';

export const HomePage: React.FC = () => {
  const theme = useColorModeValue('dark', 'light');
  const CHROME_URL = "https://chrome.google.com/webstore/detail/tab-butler/iiamdlbonhenkdcalhfpkbhgffdmkign"
  const FIREFOX_URL = "https://addons.mozilla.org/en-US/firefox/addon/tab-butler";

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack position="relative" spacing={24}>
        <NavBar />
        <VStack spacing={8} justifyContent="center" paddingTop={12}>
          <Stack
            spacing={8}
            paddingLeft={10}
            paddingRight={10}
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
          >
            <VStack maxWidth={400} spacing={5}>
              <Text fontSize={['md', 'xl', '4xl']} fontWeight="bold">
                A tab manager at your service.
              </Text>
              <Text fontSize={['sm', 'md', 'xl']} fontWeight="light">
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
              sx={{
                height: 'min(29.4vw + 70.78px, 447px)',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Stack>
        </VStack>

        <VStack
          spacing={8}
          justifyContent="center"
          paddingTop={28}
          paddingBottom={24}
        >
          <Stack
            spacing={8}
            paddingLeft={10}
            paddingRight={10}
            direction={{ base: 'column', lg: 'row-reverse' }}
            alignItems="center"
          >
            <VStack maxWidth={400} spacing={5}>
              <Text fontSize={['md', 'xl', '4xl']} fontWeight="bold">
                Execute powerful actions from any tab.
              </Text>
              <Text fontSize={['sm', 'md', 'xl']} fontWeight="light">
                Do common actions like creating new tabs, muting the current
                tab, and much more - all from one shortcut.
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

        <Divider />

        <VStack justifyContent="center" paddingBottom={24}>
          <Text fontSize="2xl" fontWeight="bold">
            Join the Beta Now!
          </Text>
          <Text fontSize="xl" fontWeight="light" fontStyle="italic">
            Change the way you use your browser forever.
          </Text>
          <HStack spacing={8} paddingTop={8}>
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
            <Button
              as={Link}
              leftIcon={<FaDiscord />}
              colorScheme="facebook"
              variant="solid"
              href="https://discord.gg/vf8mfTTNN3"
            >
              Join Discord
            </Button>
            <Button
              as={Link}
              leftIcon={<FaTwitter />}
              colorScheme="twitter"
              variant="solid"
              href="https://twitter.com/TabButlerExt"
            >
              Twitter
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
