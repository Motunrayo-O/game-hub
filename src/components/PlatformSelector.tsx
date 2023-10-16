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
import useFindPlatformById from "../hooks/useFindPlatformById";
import useGameQueryStore from "../store";

interface Props {
  onPlatformSelected: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const { gameQuery, setPlatform, setGenre, setSearch, setSort } =
    useGameQueryStore();

  const selectedPlatform = useFindPlatformById(gameQuery.platformId);

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
