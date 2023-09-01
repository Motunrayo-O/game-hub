import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
  selectedSortOrder: string;
  onSortOrderSelected: (sortOrder: string) => void;
}

const GameSorter = ({ selectedSortOrder, onSortOrderSelected }: Props) => {
  const defaultSortOrder = { value: "", displayName: "Relevance" };
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
        {sortOrders.find((s) => s.value == selectedSortOrder)?.displayName ||
          defaultSortOrder.displayName}
      </MenuButton>
      <MenuList>
        {sortOrders.map((s) => (
          <MenuItem
            key={s.value}
            value={s.value}
            onClick={() => onSortOrderSelected(s.value)}
          >
            {s.displayName}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GameSorter;
