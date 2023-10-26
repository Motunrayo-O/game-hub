import React from "react";
import useGameScreenshots from "../hooks/useGameScreenshots";
import { Grid, Show, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenshots(gameId);
  console.log("data: ", data?.results.length);
  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {data?.results.map((d) => (
        <div key={d.id}>
          <img src={d.image} />
        </div>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
