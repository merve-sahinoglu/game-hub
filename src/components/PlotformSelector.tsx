import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatform";

export interface Props {
  setSelectedPlatform(platform: Platform | null): void;
  selectedPlatform: Platform | null;
}

const PlotformSelector = ({ setSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform && selectedPlatform !== null
          ? selectedPlatform.name
          : "Platform"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSelectedPlatform(null)} key={null}>
          Platform
        </MenuItem>
        {data.map((x) => (
          <MenuItem onClick={() => setSelectedPlatform(x)} key={x.id}>
            {x.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlotformSelector;
