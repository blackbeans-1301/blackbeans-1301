import {
  Box,
  Image,
  Text,
  Link,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

interface PlayableAd {
  id: string;
  title: string;
  description: string;
  image: string;
  storeUrl: string;
}

interface HorizontalScrollSectionProps {
  items: PlayableAd[];
}

export default function HorizontalScrollSection({ items }: HorizontalScrollSectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");
  const popupBg = useColorModeValue("white", "gray.800");
  const popupShadow = useColorModeValue("xl", "dark-lg");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const hoverBorderColor = useColorModeValue("gray.400", "whiteAlpha.500");
  const gradientLight = useColorModeValue(
    "linear-gradient(to right, white, transparent)",
    "linear-gradient(to right, #202023, transparent)"
  );
  const gradientRight = useColorModeValue(
    "linear-gradient(to left, white, transparent)",
    "linear-gradient(to left, #202023, transparent)"
  );

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <Box
      position="relative"
      overflow="hidden"
      py={4}
      _before={{
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "100px",
        background: gradientLight,
        zIndex: 1,
        pointerEvents: "none",
      }}
      _after={{
        content: '""',
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "100px",
        background: gradientRight,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Box
        display="flex"
        gap={4}
        sx={{
          animation: "scroll 30s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
          "@keyframes scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-1000%)" },
          },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredItem(null);
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            href={item.storeUrl}
            isExternal
            _hover={{ textDecoration: "none" }}
            position="relative"
          >
            <Box
              minW="150px"
              maxW="150px"
              h="150px"
              borderRadius="lg"
              overflow="hidden"
              border="2px solid"
              borderColor={borderColor}
              transition="all 0.3s ease"
              position="relative"
              cursor="pointer"
              onMouseEnter={() => setHoveredItem(`${item.id}-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "xl",
                borderColor: hoverBorderColor,
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                w="100%"
                h="100%"
                objectFit="cover"
              />

              {/* Popup on hover */}
              {hoveredItem === `${item.id}-${index}` && (
                <VStack
                  position="absolute"
                  bottom="110%"
                  left="50%"
                  transform="translateX(-50%)"
                  bg={popupBg}
                  p={3}
                  borderRadius="md"
                  boxShadow={popupShadow}
                  minW="250px"
                  maxW="300px"
                  spacing={2}
                  align="flex-start"
                  zIndex={10}
                  border="1px solid"
                  borderColor={borderColor}
                  _before={{
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: `8px solid`,
                    borderTopColor: popupBg,
                  }}
                >
                  <Heading as="h6" fontSize="md" fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color={textColor}>
                    {item.description}
                  </Text>
                </VStack>
              )}
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
