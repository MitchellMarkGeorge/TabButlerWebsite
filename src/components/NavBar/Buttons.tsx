import { IconButton, Link } from '@chakra-ui/react';
import { FaGithub, FaDiscord, FaTwitter, FaCoffee } from 'react-icons/fa';

export const GitHubButton = () => (
  <IconButton
    as={Link}
    href="https://github.com/MitchellMarkGeorge/TabButler"
    aria-label="GitHub link"
    icon={<FaGithub fontSize="24px" />}
    variant="ghost"
  />
);

export const DiscordButton = () => (
  <IconButton
    as={Link}
    href="https://discord.gg/vf8mfTTNN3"
    aria-label="Discord Server link"
    icon={<FaDiscord fontSize="24px" />}
    variant="ghost"
  />
);

export const TwitterButton = () => (
  <IconButton
    as={Link}
    href="https://twitter.com/TabButlerExt"
    aria-label="Twitter link"
    icon={<FaTwitter fontSize="24px" />}
    variant="ghost"
  />
);

export const BuyMeACoffeButton = () => (
  <IconButton
    as={Link}
    href="https://buymeacoffee.com/mitchellmmg79"
    aria-label="Buy me a coffee link"
    icon={<FaCoffee />}
  />
);
