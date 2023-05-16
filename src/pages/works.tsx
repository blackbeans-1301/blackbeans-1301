import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import thumbnailBlackhole from "../../public/images/jett.jpg";

export default function Works() {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="black-hole"
            title="Blackhole"
            thumbnail={thumbnailBlackhole}
          >
            A music app for mobile
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}
