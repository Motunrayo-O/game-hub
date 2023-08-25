import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY={1.5}>
          <HStack>
            <Image
              src={getCroppedImageUrl(g.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize={"lg"}>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
