import {
  HStack,
  Image,
  Text,
  IconButton,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react';
import { AiOutlineMenu,  } from "react-icons/ai"

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Container } from '../Container';
import { BuyMeACoffeButton, DiscordButton, GitHubButton, TwitterButton } from './Buttons';

const DropdownMenu = () => (
  <Menu>
  <MenuButton as={IconButton} icon={<AiOutlineMenu />} variant="outline"/>
  <MenuList>
    
    <MenuItem as={GitHubButton}/>
    <MenuItem as={DiscordButton}/>
    <MenuItem as={GitHubButton}/>
    <MenuItem as={TwitterButton}/>
    <MenuItem as={BuyMeACoffeButton}/>
    <MenuItem as={ColorModeSwitcher}/>
  </MenuList>
</Menu>
)

export const NavBar: React.FC = () => {
  const color: string = useColorModeValue(
    'rgb(255, 255, 255, 0.6)',
    'rgb(26, 32, 44, 0.6)'
  );

  const [isLg] = useMediaQuery("(min-width: 62em)")

  // use grop down menu

  return (
    <HStack
      paddingTop="20px"
      paddingBottom="20px"
      width="100%"
      position={{base: "sticky", lg: "fixed"}}
      top={0}
      backgroundColor={color}
      backdropFilter={'blur(10px)'}
      zIndex={1}
    >
      <Container>
        <HStack>
          <Image height={42} src="/static/img/logo.png" />
          <Text fontSize={['sm', 'md', 'lg']} fontWeight="semibold">
            Tab Butler
          </Text>
        </HStack>
       {!isLg ? <DropdownMenu/> : (

        <HStack
          spacing="20px"
          justifySelf="flex-end"
          alignItems="center"
          justifyContent="center"
        >
        <GitHubButton/>
        <DiscordButton/>
        <TwitterButton/>
        <BuyMeACoffeButton/>
          <ColorModeSwitcher />
        </HStack>
       )} 
      </Container>
    </HStack>
  );
};
