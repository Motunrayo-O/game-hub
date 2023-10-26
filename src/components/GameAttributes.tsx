import { Grid, GridItem, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import GameDetailSection from "./GameDetailSection";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <Grid
      marginTop={10}
      templateRows="repeatt(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={5}
    >
      <GridItem>
        <GameDetailSection heading="Platforms">
          <ul>
            {game.parent_platforms?.map((p) => (
              <Text key={p.platform.id}>{p.platform.name}</Text>
            ))}
          </ul>
        </GameDetailSection>
      </GridItem>

      <GridItem>
        <GameDetailSection heading="Metascore">
          <CriticScore score={game.metacritic}></CriticScore>
        </GameDetailSection>
      </GridItem>

      <GridItem>
        <GameDetailSection heading="Genres">
          {game.genres.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </GameDetailSection>
      </GridItem>

      <GridItem>
        <GameDetailSection heading="Publishers">
          {game.publishers.map((p) => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </GameDetailSection>
      </GridItem>
    </Grid>
  );
};

export default GameAttributes;
