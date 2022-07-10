import { Box, Text, VStack, Image, useColorModeValue, HStack } from "@chakra-ui/react";

import { NavBar } from "../components";

export const HomePage = () => {
  const theme = useColorModeValue("dark", "light");

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack>
        <NavBar />
        <VStack spacing={8}>
          <HStack spacing={8} mt={20} pl="10" pr="10">
            <VStack maxW={400}>
              <Text fontSize={["md", "xl", "4xl"]} fontWeight="bold">A Tab Manager at Your Service.</Text>
              <Text fontSize={["sm", "md", "xl"]} fontWeight="light">
                The last browser extension you will need to navigate in your browser.
              </Text>
            </VStack>
            <Image
              src={`/static/img/search-modal-${theme}.png`}
              sx={{
                height: "min(29.4vw + 70.78px,447px)",
              }}
            />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
