import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoading from "./GameCardLoading";

const GamesGrid = () => {
  const { error, games, isLoading } = useGames();
  const loadingCards = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading && loadingCards.map((l) => <GameCardLoading key={l} />)}
        {games.map((g) => (
          <GameCard key={g.id} game={g}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
