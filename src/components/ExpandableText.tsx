import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const char_limit = 300;

  if (!children) return null;

  if (children.length <= char_limit) return <Text>{children}</Text>;

  const displayText = isExpanded
    ? children
    : `${children.substring(0, char_limit)}...`;

  return (
    <Text>
      {displayText}
      <Button
        marginLeft={2}
        size="xs"
        fontWeight="bold"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
