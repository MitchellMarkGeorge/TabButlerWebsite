import { Box } from '@chakra-ui/react';

interface Props {
  children?: React.ReactNode;
}
export const Container = (props: Props) => {
  return (
    <Box
      maxWidth="1100px"
      margin="auto"
      overflow="hidden"
      paddingX="1.5rem"
      width={"100%"}
      height="100%"
      display="grid"
      gridTemplateColumns={{ base: "1fr 50px", lg: "repeat(2, 1fr)"}}
      gap="2rem"
    >
      {props.children}
    </Box>
  );
};

export const SectionContainer = (props: Props) => {
  return (
    <Box
      maxWidth="1100px"
      margin="auto"
      overflow="hidden"
      paddingX="1.5rem"
      width={"100%"}
      height="100%"
      display="grid"
      gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)"}}
      alignItems="center"
      justifyContent="center"
      gap="2rem"
    >
      {props.children}
    </Box>
  );
};
