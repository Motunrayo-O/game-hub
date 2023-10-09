import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoading from "./GameCardLoading";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  selectedQuery: GameQuery;
}

const GamesGrid = ({ selectedQuery }: Props) => {
  const {
    error,
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(selectedQuery);
  const loadingCards = ["a", "b", "c", "d", "e", "f", "g"];
  return (
    <Box padding={10}>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
        {isLoading &&
          loadingCards.map((l) => (
            <GameCardContainer key={l}>
              <GameCardLoading />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((g) => (
              <GameCardContainer key={g.id}>
                <GameCard game={g}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}

        {/* {data?.pages.results.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g}></GameCard>
          </GameCardContainer>
        ))} */}
      </SimpleGrid>

      {hasNextPage && (
        <Button
          marginY={5}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading" : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GamesGrid;
