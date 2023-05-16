import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }: { children: any }) => {
  return (
    <Box>
      <NextLink href="/projects">Projects</NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        $nbsp;
      </span>

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export const WorkImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image borderRadius="lg" alt={alt} src={src} mb={4} w="full" />;
};

export const Meta = ({ children }: { children: any }) => {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  );
};
