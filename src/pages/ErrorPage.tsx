import { Heading, Text, Box } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oh No!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Where do you think you're going? That's not a real URL!"
            : "Nothing to see here... * laughs nervously * "}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
