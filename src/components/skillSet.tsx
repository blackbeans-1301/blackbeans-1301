import {
  Box,
  ListItem,
  List,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

export default function SkillSetSection({
  category,
  skills,
}: {
  category: string;
  skills: any;
}) {
  const [hoverColor, setHoverColor] = useState("hover-gray");
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode == "dark") {
      setHoverColor("hover-gray-dark");
    } else {
      setHoverColor("hover-gray-light");
    }
  }, [colorMode]);

  return (
    <Box
      className={`grid grid-cols-12 hover:bg-${hoverColor}
      cursor-default`}
      pl={5}
      py={4}
      textIndent=""
    >
      <SkillCategory className="col-start-1 col-span-4">
        {category}
      </SkillCategory>
      <Box className="col-start-5 col-span-11">
        <List styleType="disc">
          {skills.map((skill: string) => (
            <ListItem as="li" key={skill} textAlign="justify" mb={1}>
              {skill}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export const SkillCategory = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;
