import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoading from "./GameCardLoading";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../store";

const GamesGrid = () => {
  const { gameQuery } = useGameQueryStore();
  const { error, data, isLoading, fetchNextPage, hasNextPage } =
    useGames();
  const loadingCards = ["a", "b", "c", "d", "e", "f", "g"];

  const totalNumGamesFetched =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <Box padding={10}>
      {error && <Text>{error.message}</Text>}

      <InfiniteScroll
        dataLength={totalNumGamesFetched}
        next={fetchNextPage}
        hasMore={hasNextPage ? true : false}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
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
        </SimpleGrid>
      </InfiniteScroll>

      {/* {hasNextPage && (
        <Button
          marginY={5}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading" : "Load More"}
        </Button>
      )} */}
    </Box>
  );
};

export default GamesGrid;
