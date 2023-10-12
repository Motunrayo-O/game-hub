import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onPlatformSelected: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({onPlatformSelected, selectedPlatformId}: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(p => p.id == selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((d) => (
          <MenuItem key={d.id} onClick={() => onPlatformSelected(d)}>
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
