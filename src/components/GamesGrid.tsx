import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoading from "./GameCardLoading";
import GameCardContainer from "./GameCardContainer";

const GamesGrid = () => {
  const { error, data, isLoading } = useGames();
  const loadingCards = ["a", "b", "c", "d", "e", "f", "g"];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          loadingCards.map((l) => (
            <GameCardContainer>
              <GameCardLoading key={l} />
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer>
            <GameCard key={g.id} game={g}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
