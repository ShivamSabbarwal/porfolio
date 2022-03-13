import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

import Container from "../components/Container";

export default function Home() {
  const { colorMode } = useColorMode();

  const colorSecondary = { light: "grey.700", dark: "grey.400" };

  return (
    <Container>
      <Head>
        <title>Home - Shivam Sabbarwal</title>
      </Head>
      <Stack as="main" spacing={8} justify="center" alignItems="flex-start" m="0 auto 4rem auto" maxW="60em" px={2}>
        <Flex flexDir="column" justify="flex-start" align="flex-start" maxW="60em">
          <Heading mb={2}> Hi, I am Shivam Sabbarwal</Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris erat, finibus vitae suscipit sed, aliquam rhoncus sapien. Phasellus sit amet odio ut quam commodo gravida.
            Pellentesque volutpat ipsum mauris, eget iaculis ex ultricies eget. Nunc neque libero, vestibulum vel est vitae, rutrum porttitor risus. Fusce quam nisl, placerat nec consectetur sed,
            rutrum vel nulla. Suspendisse sed est at lacus ultrices auctor. Vestibulum commodo maximus nibh, sed imperdiet quam venenatis id. In mollis consectetur dui et faucibus. Nulla bibendum orci
            arcu, vitae euismod ipsum sollicitudin quis. Nulla elementum venenatis pulvinar. Proin rutrum tristique ligula vitae maximus.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
