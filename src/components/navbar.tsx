import Logo from "./logo";
import NextLink from "next/link";
import Image from "next/image";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Nunito } from "next/font/google";
import ThemeToggleButton from "@/components/theme-toggle-button";
import { navbarItems } from "@/data/data";

const nunito = Nunito({ subsets: ["latin"] });

export default function Navbar(props: any) {
  const { path } = props;
  const inactiveColor = useColorModeValue("black", "whiteAlpha.900");

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      backdropFilter="blur(10px)"
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tight">
            <Logo></Logo>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          {navbarItems.map((item) => {
            return (
              <LinkItem
                href={item.href}
                path={path}
                key={item.id}
                icon={item.iconUrl}
              >
                {item.name}
              </LinkItem>
            );
          })}
        </Stack>

        <Box alignSelf="right">
          <ThemeToggleButton />
          <Box display={{ base: "inline-block", md: "none" }} pl={3}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {navbarItems.map((item) => {
                  return (
                    <NextLink href={item.href} passHref key={item.id}>
                      <MenuItem as="span" p={2} color={inactiveColor}>
                        {item.name}
                      </MenuItem>
                    </NextLink>
                  );
                })}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const LinkItem = ({
  href,
  path,
  icon,
  children,
}: {
  href: string;
  path: string;
  icon: string | undefined;
  children: any;
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("black", "whiteAlpha.900");
  return (
    <NextLink className={nunito.className} href={href} passHref>
      <Link
        as="span"
        p={2}
        color={active ? "glassTeal" : inactiveColor}
        bg={active ? "#202023" : undefined}
      >
        {children}
      </Link>
    </NextLink>
  );
};
