import React from "react";
import { useColorModeValue, Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Container = ({ children }) => {
  const container = {
    bg: useColorModeValue("white", "brand.dark"),
    color: useColorModeValue("black", "white"),
  };

  return (
    <>
      <Navbar />
      <Flex as="main" justify="center" flexDirection="column" bg={container.bg} color={container.color} px={[0, 4, 4]} mt={[4, 6, 6]}>
        {children}
      </Flex>
    </>
  );
};

export default Container;
