import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colour = score > 75 ? "green" : score > 60 ? "amber" : "red";
  return (
    <Badge fontSize="14px" paddingX={1} borderRadius="4px" colorScheme={colour}>
      {score}
    </Badge>
  );
};

export default CriticScore;
