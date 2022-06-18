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
  Button,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { FaRobot } from "react-icons/fa";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Link
            color="teal.500"
            href="https://twitter.com/JoshCStein"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            gm, I'm just having fun 👋
          </Link>
          <Text>
            it's time for the <Code fontSize="lg">build market lol</Code>
          </Text>
          <br />
          <Text fontSize="2xl">
            no minting here, but you should check out this AI-powered image
            generator powered by DALL-E 😄
          </Text>
          <Button
            leftIcon={<FaRobot />}
            onClick={() => (window.location.href = `https://dallemini.com/`)}
          >
            DALL-E Mini
          </Button>
          <br />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
