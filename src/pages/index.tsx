import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Link,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GridItem } from "@/components/grid-item";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import Highlighter from "@/components/highlighter";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioYear, BioSection } from "@/components/bio";
import { bioData } from "@/data/data";
import Layout from "@/components/layouts/article";
import { socialMedia } from "@/data/socialData";

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
            Work
          </Heading>
          <Paragraph>
            Xin chào! Tôi là sinh viên năm 4 hiện đang theo học tại trường Đại
            học Công nghệ - ĐHQGHN (UET). Công nghệ thông tin là ngành học cũng
            như sở thích của tôi. Tôi hướng đến việc phát triển ứng dụng web,
            ứng dụng đa nền tảng, indie game và trở thành Devops Engineer trong
            tương lai.
          </Paragraph>

          <Paragraph>
            Tôi có hơn 1 năm kinh nghiệm với vị trí&nbsp;
            <Highlighter>Fullstack</Highlighter> và&nbsp;
            <Highlighter>Mobile</Highlighter> developer. Một số project có thể
            kể đến của tôi như ứng dụng nghe nhạc BlackHole, hệ thống đặt phòng
            khách sạn BookingHub, ứng dụng quản lý công việc,... Và một số ứng
            dụng khác bạn có thể xem ở phần Portfolio dưới đây.
          </Paragraph>

          <Box textAlign="center" my={8}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Porfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay="0.4">
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

        <Section delay="0.4">
          <Heading as="h3" variant="section-title">
            Favorites ❤️
          </Heading>
          <Paragraph>
            Games, Graphics Design, Pixel Art, Game development.
          </Paragraph>
        </Section>

        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            Social
          </Heading>
          <List>
            {socialMedia.map((item) => (
              <ListItem key={item.id} ml={2} p={2}>
                <Link
                  href={item.link}
                  display="flex"
                  alignItems="center"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("glassTeal-dark", "glassTeal")}
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
