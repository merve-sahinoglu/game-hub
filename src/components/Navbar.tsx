import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  setSearchText(text: string): void;
}

const Navbar = ({ setSearchText }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput setSearchText={(text) => setSearchText(text)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
