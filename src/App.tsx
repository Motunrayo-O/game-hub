import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import GameSorter from "./components/GameSorter";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchTerm: string;
}

function App() {
  const [selectedQuery, setSelectedQuery] = useState<GameQuery>(
    {} as GameQuery
  );

  const handleGenreSelect = (genre: Genre) => {
    setSelectedQuery({ ...selectedQuery, genreId: genre.id });
  };

  const handlePlatformSelected = (platform: Platform) => {
    setSelectedQuery({ ...selectedQuery, platformId: platform.id });
  };

  const handleSortOrderSelected = (sortOrder: string) => {
    setSelectedQuery({ ...selectedQuery, sortOrder });
  };

  const handleGameSearch = (searchTerm: string) => {
    setSelectedQuery({ ...selectedQuery, searchTerm });
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
        <NavBar onSearch={handleGameSearch}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={handleGenreSelect}
            selectedGenreId={selectedQuery.genreId}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading selectedQuery={selectedQuery} />
          <HStack>
            <PlatformSelector
              selectedPlatformId={selectedQuery.platformId}
              onPlatformSelected={handlePlatformSelected}
            ></PlatformSelector>
            <GameSorter
              selectedSortOrder={selectedQuery.sortOrder}
              onSortOrderSelected={handleSortOrderSelected}
            ></GameSorter>
          </HStack>
        </Box>

        <GamesGrid selectedQuery={selectedQuery}></GamesGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
