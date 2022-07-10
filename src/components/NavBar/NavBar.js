import { HStack, Image, Text, IconButton, Button, Link } from "@chakra-ui/react"
import { FaCoffee, FaDiscord, FaGithub } from "react-icons/fa"

import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const NavBar = () => {
  return (
    <HStack maxW={1080} justifyContent="space-between" pr={10} pl={10} pt={8} w="100%">
      <HStack>
        <Image height={30} src="/static/img/logo.png" />
        <Text fontSize="lg" fontWeight="semibold">Tab Butler</Text>
      </HStack>
      <HStack spacing="20px">
        <IconButton
          as={Link}
          href="https://github.com/MitchellMarkGeorge/TabButler"
          aria-label='GitHub link'
          icon={<FaGithub fontSize="28px" />}
          variant="ghost"
        />
        <IconButton
          as={Link}
          href="https://github.com/MitchellMarkGeorge/TabButler"
          aria-label='Discord Server link'
          icon={<FaDiscord fontSize="28px" />}
          variant="ghost"
        />
        <Button
          leftIcon={<FaCoffee />}
          as={Link}
          href="https://buymeacoffee.com/mitchellmmg79"
        >Buy me a coffee</Button>
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  )
}
