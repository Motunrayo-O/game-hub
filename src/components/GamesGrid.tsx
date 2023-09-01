import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoading from "./GameCardLoading";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  selectedQuery: GameQuery;
}

const GamesGrid = ({ selectedQuery }: Props) => {
  const { error, data, isLoading } = useGames(selectedQuery);
  const loadingCards = ["a", "b", "c", "d", "e", "f", "g"];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={5}
      >
        {isLoading &&
          loadingCards.map((l) => (
            <GameCardContainer key={l}>
              <GameCardLoading />
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
