import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  selectedQuery: GameQuery;
}

const GameHeading = ({ selectedQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const heading = `${
    platforms?.results.find((p) => p.id == selectedQuery.platformId)?.name || ""
  } ${
    genres?.results.find((g) => g.id === selectedQuery.genreId)?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
