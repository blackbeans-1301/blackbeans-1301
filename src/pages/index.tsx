import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Inter } from "next/font/google";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import Highlighter from "@/components/highlighter";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioYear, BioSection } from "@/components/bio";
import { bioData } from "@/data/data";
import Layout from "@/components/layouts/article";

export default function Home() {
  const introColor = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");

  return (
    <Layout title="Home">
      <Container>
        <Box textAlign="center" borderRadius="lg" bg={introColor} p={3} mb={6}>
          Hello, I&apos;m fullstack developer.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Đỗ Tấn Lập
            </Heading>
            <p className="text-sm">Fullstack/Mobile Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              src="/images/avatar.jpg"
              borderColor="whiteAlpha.900"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              alt="avatar"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Xin chào, tôi là một sinh viên <Highlighter>năm 4</Highlighter> hiện
            đang theo học tại trường Đại học Công nghệ - ĐHQGHN. Với niềm đam mê
            trong lĩnh vực công nghệ thông tin và đặc biệt quan tâm đến phát
            triển ứng dụng web, mobile và game. Tôi hướng đến{" "}
            <Highlighter>fullstack developer</Highlighter> và{" "}
            <Highlighter>DevOps - SysAdmin</Highlighter> trong tương lai.
          </Paragraph>

          <Box align="center" my={8}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Porfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          {bioData.map((data) => {
            return (
              <BioSection key={data.id}>
                <BioYear>{data.year}</BioYear>
                {data.description}
              </BioSection>
            );
          })}
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Favorites ❤️
          </Heading>
          <Paragraph>
            Games, Graphics Design, Pixel Art, Game development.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
}
