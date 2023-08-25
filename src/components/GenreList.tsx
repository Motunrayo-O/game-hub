import React from "react";
import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((g) => (
        <Text key={g.id}>{g.name}</Text>
      ))}
    </ul>
  );
};

export default GenreList;
