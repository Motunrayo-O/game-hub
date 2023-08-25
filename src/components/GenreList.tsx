import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((g) => (
        <Text key={g.id}>{g.name}</Text>
      ))}
    </ul>
  );
};

export default GenreList;
