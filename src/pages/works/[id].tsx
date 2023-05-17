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
import { getPostData } from "@/utils/helper";
import { useEffect, useState } from "react";

export default function Post({}) {
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

  return (
    <Container>
      {data && loading == false && (
        <Box>
          <Heading as="h3">Hello</Heading>
        </Box>
      )}
    </Container>
  );
}
