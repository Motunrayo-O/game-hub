import { Heading } from "@chakra-ui/react";
import useFindPlatformById from "../hooks/useFindPlatformById";
import useFindGenreById from "../hooks/useFindGenreById";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();
  const genre = useFindGenreById(gameQuery.genreId);
  const platform = useFindPlatformById(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
