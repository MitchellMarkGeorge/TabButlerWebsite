import { Box, Text, VStack } from "@chakra-ui/react";

import { NavBar } from "../components";
import { Logo } from "../Logo";

export const HomePage = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <VStack>
        <NavBar />
        <VStack spacing={8}>
          <Logo  pointerEvents="none" />
          <Text>Tab Butler</Text>
        </VStack>
      </VStack>
    </Box>
  );
}
