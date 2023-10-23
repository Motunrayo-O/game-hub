import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import React from "react";
import GameHeading from "../components/GameHeading";
import GameSorter from "../components/GameSorter";
import GamesGrid from "../components/GamesGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading />
          <HStack>
            <PlatformSelector />
            <GameSorter />
          </HStack>
        </Box>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
