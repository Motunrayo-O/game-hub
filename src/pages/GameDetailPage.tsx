import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail";
import { Heading, Show, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameTrailers from "../hooks/useGameTrailers";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGameDetails(params.slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameTrailer gameId={game.id} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
