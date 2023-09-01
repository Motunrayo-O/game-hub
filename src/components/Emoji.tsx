import React from "react";
import great from "../assets/bulls-eye.webp";
import good from "../assets/thumbs-up.webp";
import bad from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const map: { [key: number]: ImageProps } = {
    3: { src: bad, alt: "bad", boxSize: "20px" },
    4: { src: good, alt: "good", boxSize: "20px" },
    5: { src: great, alt: "great", boxSize: "25px" },
  };
  return <Image {...map[rating]} marginTop={-5} />;
};

export default Emoji;
