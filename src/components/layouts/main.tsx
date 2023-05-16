import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import NoSsr from "../no-ssr";
import Navbar from "../navbar";
import VoxelDog from "../voxel-dog";

export default function Main({
  children,
  router,
}: {
  children: any;
  router: any;
}) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width;initial-scale=1" />
        <title>Blackbeans - Homepage</title>
      </Head>
      <Navbar router={router.asPath}></Navbar>
      <Container pt={14} maxW="container.md">
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
}
