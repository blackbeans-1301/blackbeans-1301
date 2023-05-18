import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import { webDevelopment, mobileDevelopment, otherProjects } from "@/data/data";
import Layout from "@/components/layouts/article";
import styled from "@emotion/styled";

export default function Works() {
  return (
    <Layout title="Projects">
      <Container px={0} py={6}>
        <Box>
          Với vai trò là một Web Developer, Mobile Developer. Dưới đây là một số
          dự án tôi đã và đang làm. Enjoy🎈
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
