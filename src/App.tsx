import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            it's time for the <Code fontSize="xl">build market lol</Code>
          </Text>
          <Link
            color="teal.500"
            href="https://twitter.com/JoshCStein"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            gm, I'm just having fun 👋
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
