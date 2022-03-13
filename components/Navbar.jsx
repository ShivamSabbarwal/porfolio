import React from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { chakra, Box, Flex, useColorModeValue, HStack, Button, useDisclosure, VStack, IconButton, CloseButton, Text } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

import DarkModeSwitch from "./DarkModeSwitch";

export default function Navbar() {
  const mobileNav = useDisclosure();

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(6px);
    transition: height 0.5s, line-height 0.5s;
  `;

  const link = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200"),
    hover: useColorModeValue("gray.200", "gray.700"),
  };

  const routes = [
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const NavLinks = ({ routes, mobile }) => {
    return (
      <>
        {routes.map(({ name, path }, index) => (
          <NextLink key={index} href={path} shallow passHref>
            <Button as="a" w={mobile && "full"} color={link.color} variant="ghost" p={[1, 2, 4]} _hover={{ bg: link.hover }}>
              {name}
            </Button>
          </NextLink>
        ))}
        <Button as="a" href="./resume.pdf" color={link.color} download>
          Resume
        </Button>
      </>
    );
  };

  return (
    <StickyNav as="nav" bg="transparent" w="full" align="center" justify="space-between" px={[2, 6, 6]} py={2} mt={2} mb={[0, 0, 4]} shadow="md" mx="auto">
      <NextLink href="/" passHref>
        <chakra.a title="Home Page" display="flex" alignItems="center">
          <Text color={link.color}>LOGO</Text>
        </chakra.a>
      </NextLink>
      <HStack display="flex" alignItems="center" spacing={1}>
        <HStack spacing={1} mr={1} color="brand.500" display={{ base: "none", md: "inline-flex" }}>
          <NavLinks routes={routes} />
        </HStack>
        <DarkModeSwitch />
        <Box display={{ base: "inline-flex", md: "none" }}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            color={link.color}
            variant="ghost"
            icon={<AiOutlineMenu color={link.color} />}
            onClick={mobileNav.onOpen}
          />

          <VStack pos="absolute" top={0} left={0} right={0} display={mobileNav.isOpen ? "flex" : "none"} flexDirection="column" p={2} pb={4} m={2} bg={link.bg} spacing={3} rounded="sm" shadow="sm">
            <CloseButton aria-label="Close menu" color={link.color} onClick={mobileNav.onClose} />
            <NavLinks routes={routes} mobile />
          </VStack>
        </Box>
      </HStack>
    </StickyNav>
  );
}
