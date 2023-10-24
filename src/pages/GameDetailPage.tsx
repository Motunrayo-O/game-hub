import { useState } from "react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGameDetails(params.slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
