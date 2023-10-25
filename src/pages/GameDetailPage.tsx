import { useState } from "react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail";
import { Grid, GridItem, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameDetailSection from "../components/GameDetailSection";
import usePlatforms from "../hooks/usePlatforms";
import CriticScore from "../components/CriticScore";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGameDetails(params.slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>

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
    </>
  );
};

export default GameDetailPage;
