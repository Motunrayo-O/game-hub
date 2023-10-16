import { Heading } from "@chakra-ui/react";
import useFindPlatformById from "../hooks/useFindPlatformById";
import useFindGenreById from "../hooks/useFindGenreById";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = useFindGenreById(genreId);
  const platform = useFindPlatformById(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
