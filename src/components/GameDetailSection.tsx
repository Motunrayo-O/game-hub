import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
}

const GameDetailSection = ({ heading, children }: Props) => {
  return (
    <>
      <Heading color="grey" fontSize="md">{heading}</Heading>
      <div>{children}</div>
    </>
  );
};

export default GameDetailSection;
