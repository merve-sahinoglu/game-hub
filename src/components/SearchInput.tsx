import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  setSearchText(text: string): void;
}

const SearchInput = ({ setSearchText }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        onChange={(text) => setSearchText(text.target.value)}
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
