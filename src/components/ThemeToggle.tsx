import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        colorScheme="blue"
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ThemeToggle;
