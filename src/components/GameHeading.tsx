import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  selectedQuery: GameQuery;
}

const GameHeading = ({ selectedQuery }: Props) => {
  const heading = `${selectedQuery.platform?.name || ""} ${
    selectedQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
