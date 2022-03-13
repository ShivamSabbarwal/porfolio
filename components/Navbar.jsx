import React from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { chakra, Box, Flex, useColorMode, HStack, Button, useDisclosure, VStack, IconButton, CloseButton, Text } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

import DarkModeSwitch from "./DarkModeSwitch";

export default function Navbar() {
  const { colorMode } = useColorMode();
  const mobileNav = useDisclosure();

  const color = { light: "black", dark: "white" };

  const bgColor = { light: "white", dark: "brand.dark" };

  const navHoverBg = { light: "gray.600", dark: "gray.300" };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(6px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <StickyNav as="nav" bg="transparent" w="full" align="center" justify="space-between" px={[2, 6, 6]} py={2} mt={2} mb={[0, 0, 4]} shadow="md" mx="auto">
      <NextLink href="/" passHref>
        <chakra.a title="Home Page" display="flex" alignItems="center">
          <Text color={color[colorMode]}>LOGO</Text>
        </chakra.a>
      </NextLink>
      <HStack display="flex" alignItems="center" spacing={1}>
        <HStack spacing={1} mr={1} color="brand.500" display={{ base: "none", md: "inline-flex" }}>
          <NextLink href="#about" shallow passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              About Me
            </Button>
          </NextLink>
          <NextLink href="#porfolio" shallow passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              Portfolio
            </Button>
          </NextLink>
          <NextLink href="#contact" shallow passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
              Contact
            </Button>
          </NextLink>
          <Button as="a" href="./resume.pdf" color={color[colorMode]} download>
            Resume
          </Button>
        </HStack>
        <DarkModeSwitch />
        <Box display={{ base: "inline-flex", md: "none" }}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            color={color[colorMode]}
            variant="ghost"
            icon={<AiOutlineMenu color={color[colorMode]} />}
            onClick={mobileNav.onOpen}
          />

          <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg={bgColor[colorMode]}
            spacing={3}
            rounded="sm"
            shadow="sm"
          >
            <CloseButton aria-label="Close menu" color={color[colorMode]} onClick={mobileNav.onClose} />
            <NextLink href="#about" shallow passHref>
              <Button as="a" w="full" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                About Me
              </Button>
            </NextLink>
            <NextLink href="#porfolio" shallow passHref>
              <Button as="a" w="full" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                Portfolio
              </Button>
            </NextLink>
            <NextLink href="#contact" shallow passHref>
              <Button as="a" w="full" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                Contact
              </Button>
            </NextLink>
            <Button color={color[colorMode]}>Resume</Button>
          </VStack>
        </Box>
      </HStack>
    </StickyNav>
  );
}
