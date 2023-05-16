import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: rotate(20deg);
  }
`;

export default function Logo() {
  const theme = "dark";

  return (
    <Link href="/">
      <LogoBox>
        <Image src="/logo-dark.png" width={20} height={20} alt="logo"></Image>
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontWeight="bold"
          fontSize="18px"
          ml={3}
          className={nunito.className}
        >
          Blackbeans
        </Text>
      </LogoBox>
    </Link>
  );
}
