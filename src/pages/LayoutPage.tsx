import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const LayoutPage = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default LayoutPage;
