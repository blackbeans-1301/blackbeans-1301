import { BioSection, BioYear } from "@/components/bio";
import Highlighter from "@/components/highlighter";
import Layout from "@/components/layouts/article";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import SkillSetSection from "@/components/skillSet";
import { bioData, skillSet } from "@/data/data";
import { socialMedia } from "@/data/socialData";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const introColor = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  const linkColor = useColorModeValue("glassTeal-dark", "glassTeal");

  return (
    <Layout title="Home">
      <Container>
        <Box textAlign="center" borderRadius="lg" bg={introColor} p={3} mb={6}>
          Hello, I&apos;m a fullstack developer and playable ads developer.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Đỗ Tấn Lập
            </Heading>
            <p className="text-sm">Fullstack Developer | Playable Ads Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
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
        <Section delay="0.4">
          <Heading as="h3" variant="section-title">
            Work 🎯
          </Heading>
          <Paragraph>
            Hello! I&apos;m a software developer with over 4 years of experience, graduated from
            UET-VNU.
            Information technology is not just my profession but also my passion. I specialize in
            developing web applications, cross-platform mobile apps, and interactive playable ads
            for gaming and advertising.
          </Paragraph>

          <Paragraph>
            I have 4+ years of experience as a&nbsp;
            <Highlighter>Fullstack Developer (4+ years)</Highlighter> and&nbsp;
            <Highlighter>Playable Ads Developer (almost 2 years)</Highlighter>. Some of my notable
            projects include the <NextLink target="_blank" href="https://mindboard.space" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>MindBoard</NextLink> AI chat node based
            app, <NextLink href="https://pacepylot.com" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Pacepylot</NextLink> AI assistant app controlled by nature language, and numerous interactive playable ads for
            mobile games. You can explore more of my work in the <NextLink href="/works">Portfolio</NextLink> section below.
          </Paragraph>

          <Box textAlign="center" my={8}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay="0.4">
          <Heading as="h3" variant="section-title">
            Skill Set 💪
          </Heading>
          <Box>
            {skillSet.map((data) => {
              return (
                <SkillSetSection
                  category={data.category}
                  skills={data.skills}
                  key={data.id}
                />
              );
            })}
          </Box>
        </Section>

        <Section delay="0.4">
          <Heading as="h3" variant="section-title">
            Bio 🧬
          </Heading>
          <Box ml={5}>
            {bioData.map((data) => {
              return (
                <BioSection key={data.id}>
                  <BioYear>{data.year}</BioYear>
                  {data.description}
                </BioSection>
              );
            })}
          </Box>
        </Section>

        <Section delay="0.4">
          <Heading as="h3" variant="section-title">
            Favorites 🎨
          </Heading>
          <Paragraph>
            Games, Guitar, Photography, Traveling, Challenge works, Explore new things,...
          </Paragraph>
        </Section>

        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            Social 📱
          </Heading>
          <List>
            {socialMedia.map((item) => (
              <ListItem key={item.id} ml={2} p={2}>
                <Link
                  href={item.link}
                  display="flex"
                  alignItems="center"
                  color={linkColor}
                  target="_blank"
                >
                  {item.icon} <Box mx={2}></Box>{" "}
                  <strong className="font-semibold">{item.title}</strong>
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>
      </Container>
    </Layout>
  );
}
