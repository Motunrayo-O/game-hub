import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeToggle from "./ThemeToggle";
import GameSearch from "./GameSearch";
import useGameQueryStore, { GameQueryStore } from "../store";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <GameSearch />
      <ThemeToggle />
    </HStack>
  );
};

export default NavBar;
