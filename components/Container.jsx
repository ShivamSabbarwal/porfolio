import React from "react";
import { useColorMode, Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };

  const bgColor = { light: "white", dark: "brand.dark" };

  return (
    <>
      <Navbar />
      <Flex as="main" justify="center" flexDirection="column" bg={bgColor[colorMode]} color={color[colorMode]} px={[0, 4, 4]} mt={[4, 6, 6]}>
        {children}
      </Flex>
    </>
  );
};

export default Container;
