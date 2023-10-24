import React from "react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGameDetails(params.slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return <>
  <Heading>{game.name}</Heading>
  <Text>{game.description_raw}</Text>
  </>
};

export default GameDetailPage;
