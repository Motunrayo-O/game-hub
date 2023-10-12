import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useFindPlatformById from "../hooks/useFindPlatformById";
import useFindGenreById from "../hooks/useFindGenreById";

interface Props {
  selectedQuery: GameQuery;
}

const GameHeading = ({ selectedQuery }: Props) => {
  const genre = useFindGenreById(selectedQuery.genreId);
  const platform = useFindPlatformById(selectedQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
