import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import { webDevelopment, mobileDevelopment, otherProjects, playableAdsDevelopment } from "@/data/data";
import Layout from "@/components/layouts/article";
import HorizontalScrollSection from "@/components/horizontal-scroll-section";

export default function Works() {
  return (
    <Layout title="Projects">
      <Container px={0} py={6}>
        <Box>
          As a Fullstack Developer and Playable Ads Developer, here are some of
          the projects I&apos;ve worked on throughout my career. Enjoy exploring! 🎈
        </Box>
      </Container>
      <Container px={0} pb={4}>
        <Heading as="h3" fontSize={20} mb={6} variant="section-title">
          Web Development
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {webDevelopment.map((item) => (
            <Section delay="0.3" key={item.id}>
              <WorkGridItem
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
              >
                {item.shortDescription}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>

        {/* Playable Ads Horizontal Scroll Section */}
        <Box mt={12} mb={6}>
          <Heading as="h3" fontSize={20} mb={6} variant="section-title">
            Playable Ads Development
          </Heading>
          <HorizontalScrollSection items={playableAdsDevelopment} />
        </Box>
      </Container>
      <Container
        pt={8}
        px={0}
        borderTop="1px"
        borderTopColor={useColorModeValue("blackAlpha.400", "whiteAlpha.200")}
      >
        <Heading as="h3" fontSize={20} mb={6} variant="section-title">
          Mobile Development
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {mobileDevelopment.map((item) => (
            <Section delay="0.3" key={item.id}>
              <WorkGridItem
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
              >
                {item.shortDescription}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>

      <Container
        pt={8}
        px={0}
        borderTop="1px"
        borderTopColor={useColorModeValue("blackAlpha.400", "whiteAlpha.200")}
      >
        <Heading as="h3" fontSize={20} mb={6} variant="section-title">
          Other Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {otherProjects.map((item) => (
            <Section delay="0.3" key={item.id}>
              <WorkGridItem
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
              >
                {item.shortDescription}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
