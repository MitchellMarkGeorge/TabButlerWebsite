import {
  HStack,
  Image,
  Text,
  IconButton,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCoffee, FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export const NavBar: React.FC = () => {
  const color: string = useColorModeValue(
    'rgb(255, 255, 255, 0.6)',
    'rgb(26, 32, 44, 0.6)'
  );

  return (
    <HStack
      maxWidth={1080}
      justifyContent="space-between"
      paddingRight={['5px', '30px']}
      paddingLeft={['5px', '30px']}
      paddingTop={['10px', '30px']}
      paddingBottom="10px"
      width="100%"
      top={0}
      position="sticky"
      backgroundColor={color}
      backdropFilter={'blur(10px)'}
      zIndex={1}
    >
      <HStack>
        <Image height={30} src="/static/img/logo.png" />
        <Text fontSize={['sm', 'md', 'lg']} fontWeight="semibold">
          Tab Butler
        </Text>
      </HStack>
      <HStack spacing="20px">
        <IconButton
          as={Link}
          href="https://github.com/MitchellMarkGeorge/TabButler"
          aria-label="GitHub link"
          icon={<FaGithub fontSize="24px" />}
          variant="ghost"
        />
        <IconButton
          as={Link}
          href="https://discord.gg/vf8mfTTNN3"
          aria-label="Discord Server link"
          icon={<FaDiscord fontSize="24px" />}
          variant="ghost"
        />
        <IconButton
          as={Link}
          href="https://twitter.com/TabButlerExt"
          aria-label="Twitter link"
          icon={<FaTwitter fontSize="24px" />}
          variant="ghost"
        />
        <IconButton
          as={Link}
          href="https://buymeacoffee.com/mitchellmmg79"
          aria-label="Buy me a coffee link"
          icon={<FaCoffee />}
        />
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
};
