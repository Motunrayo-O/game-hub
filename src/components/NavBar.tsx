import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeToggle from "./ThemeToggle";
import GameSearch from "./GameSearch";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <GameSearch onSearch={onSearch} />
      <ThemeToggle />
    </HStack>
  );
};

export default NavBar;
