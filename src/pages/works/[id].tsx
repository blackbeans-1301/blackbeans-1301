import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Spinner,
  Badge,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { getPostData } from "@/utils/helper";
import { Title, WorkImage, Meta } from "../../components/work-page/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

export default function Work({}) {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id !== undefined) {
      setData(getPostData(id?.toString()));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (data && !loading) {
    return (
      <Layout title={data.title}>
        <Container>
          <Title>
            {data.title} <Badge>{data.createdAt}</Badge>
          </Title>

          <P>{data.description}</P>
          <List ml={4} mr={4} mt={4} mb={8}>
            <ListItem>
              <Meta>Platform</Meta>
              <span>{data.platform}</span>
            </ListItem>

            <ListItem>
              <Meta>Stack</Meta>
              <span>{data.stack}</span>
            </ListItem>

            <ListItem>
              <Meta>Position</Meta>
              <span>{data.position}</span>
            </ListItem>

            <ListItem>
              <Meta>Repository</Meta>
              <Link as="span" href={data.githubUrl}>
                {data.githubUrl}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>

          {data.images.map((image: string) => (
            <WorkImage src={image} key={image} alt={data.title} />
          ))}
        </Container>
      </Layout>
    );
  }
}
