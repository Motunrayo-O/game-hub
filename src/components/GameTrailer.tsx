import React from "react";
import useGameTrailers from "../hooks/useGameTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const trailer = data?.results[0];
  if (!trailer) {
    console.log("no trialer");
    return null;
  }

  return (
    <video src={trailer.data[480]} poster={trailer.preview} controls></video>
  );
};

export default GameTrailer;
