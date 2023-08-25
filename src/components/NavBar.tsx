import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ThemeToggle />
    </HStack>
  );
};

export default NavBar;
