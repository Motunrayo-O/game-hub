import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ThemeToggle from "./ThemeToggle";
import GameSearch from "./GameSearch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px"></Image>
      </Link>
      <GameSearch />
      <ThemeToggle />
    </HStack>
  );
};

export default NavBar;
