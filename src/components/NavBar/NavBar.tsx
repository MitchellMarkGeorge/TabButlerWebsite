import { HStack, Image, Text, IconButton, Link } from '@chakra-ui/react';
import { FaCoffee, FaDiscord, FaGithub } from 'react-icons/fa';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export const NavBar: React.FC = () => {
  return (
    <HStack
      maxW={1080}
      justifyContent="space-between"
      pr={['5px', '30px']}
      pl={['5px', '30px']}
      pt={['10px', '30px']}
      w="100%"
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
          href="https://github.com/MitchellMarkGeorge/TabButler"
          aria-label="Discord Server link"
          icon={<FaDiscord fontSize="24px" />}
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
