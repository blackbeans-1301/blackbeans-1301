import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import thumbnailBlackhole from "../../public/images/jett.jpg";
import { works } from "@/data/data";
import Layout from "@/components/layouts/article";

export default function Works() {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          {works.map((item) => (
            <Section delay="0.2" key={item.id}>
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
