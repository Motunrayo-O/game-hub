import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import GameSorter from "./components/GameSorter";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [selectedQuery, setSelectedQuery] = useState<GameQuery>(
    {} as GameQuery
  );

  const handleGenreSelect = (genre: Genre) => {
    setSelectedQuery({ ...selectedQuery, genre });
  };

  const handlePlatformSelected = (platform: Platform) => {
    setSelectedQuery({ ...selectedQuery, platform });
  };

  const handleSortOrderSelected = (sortOrder: string) => {
    setSelectedQuery({ ...selectedQuery, sortOrder });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"  "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={handleGenreSelect}
            selectedGenre={selectedQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={10}>
          <PlatformSelector
            selectedPlatform={selectedQuery.platform}
            onPlatformSelected={handlePlatformSelected}
          ></PlatformSelector>
          <GameSorter
            selectedSortOrder={selectedQuery.sortOrder}
            onSortOrderSelected={handleSortOrderSelected}
          ></GameSorter>
        </HStack>

        <GamesGrid selectedQuery={selectedQuery}></GamesGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
