import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export function GridItem({
  children,
  href,
  title,
  thumbnail,
}: {
  children: any;
  href: string;
  title: string;
  thumbnail: string;
}) {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          alt="thubnail"
          src={thumbnail}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
}

export function WorkGridItem({
  children,
  id,
  title,
  thumbnail,
}: {
  children: any;
  id: string;
  title: string;
  thumbnail: any;
}) {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/works/${id}`}>
        <LinkBox as="span" cursor="pointer">
          <Image
            alt="thumbnail"
            src={thumbnail}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
          />
          <LinkOverlay as="span" href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
}

export function GridItemStyle() {
  return (
    <Global
      styles={`.grid-item-thumbnail {
    border-radius: 12px;
  }`}
    />
  );
}
