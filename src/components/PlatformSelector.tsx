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
import { Platform } from "../entities/Platform";
import useFindPlatformById from "../hooks/useFindPlatformById";
import useGameQueryStore from "../store";

interface Props {
  onPlatformSelected: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const selectedPlatform = useFindPlatformById(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((d) => (
          <MenuItem key={d.id} onClick={() => setPlatform(d.id)}>
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
