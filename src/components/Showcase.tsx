
import { Box } from '@chakra-ui/react';

interface Props {
  children?: React.ReactNode;
}
export const Showcase = (props: Props) => {
  return (
    <Box
    paddingX="2rem"
    height="100vh"
    scrollSnapAlign="start"
    scrollSnapStop="always"
    >
      {props.children}
    </Box>
  );
};