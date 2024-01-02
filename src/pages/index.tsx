import Head from "next/head";
import { Box, Container, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starter App</title>
        <meta name="description" content="A Project Starter App" />
      </Head>
      <Container as="main">
        <Box>
          <Text>Starter App</Text>
        </Box>
      </Container>
    </>
  );
}
