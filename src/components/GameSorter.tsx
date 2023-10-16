import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const GameSorter = () => {
  const defaultSortOrder = { value: "", displayName: "Relevance" };
  const { gameQuery, setSort } = useGameQueryStore();
  const sortOrders = [
    defaultSortOrder,
    { value: "-added", displayName: "Date Added" },
    { value: "name", displayName: "Name" },
    { value: "-released", displayName: "Release Date" },
    { value: "-metacritic", displayName: "Popularity" },
    { value: "-rating", displayName: "Average Rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
        {sortOrders.find((s) => s.value == gameQuery.sortOrder)?.displayName ||
          defaultSortOrder.displayName}
      </MenuButton>
      <MenuList>
        {sortOrders.map((s) => (
          <MenuItem
            key={s.value}
            value={s.value}
            onClick={() => setSort(s.value)}
          >
            {s.displayName}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GameSorter;
