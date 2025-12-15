import {
  Box,
  Image,
  Text,
  Link,
  VStack,
  Heading,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  SimpleGrid,
  AspectRatio,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface PlayableAd {
  id: string;
  title: string;
  description: string;
  image: string;
  storeUrl: string;
  demo?: string[];
}

interface HorizontalScrollSectionProps {
  items: PlayableAd[];
}

export default function HorizontalScrollSection({ items }: HorizontalScrollSectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PlayableAd | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");
  const popupBg = useColorModeValue("white", "gray.800");
  const popupShadow = useColorModeValue("xl", "dark-lg");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const hoverBorderColor = useColorModeValue("gray.400", "whiteAlpha.500");
  const noDemoBg = useColorModeValue("gray.50", "whiteAlpha.50");
  const modalBg = useColorModeValue("#f0e7db", "#202023");
  const gradientLight = useColorModeValue(
    "linear-gradient(to right, #ffffff0, transparent)",
    "linear-gradient(to right, #202023, transparent)"
  );
  const gradientRight = useColorModeValue(
    "linear-gradient(to left, #ffffff0, transparent)",
    "linear-gradient(to left, #202023, transparent)"
  );

  const handleItemClick = (e: React.MouseEvent, item: PlayableAd) => {
    e.preventDefault();
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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
          animation: "scroll 50s linear infinite",
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
          <Box
            key={`${item.id}-${index}`}
            position="relative"
            onClick={(e) => handleItemClick(e, item)}
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
          </Box>
        ))}
      </Box>

      {/* Modal for game details */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="5xl" isCentered>
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
        <ModalContent
          maxH="90vh"
          borderRadius="2xl"
          overflow="hidden"
          bg={modalBg}
        >
          <ModalCloseButton
            size="lg"
            _hover={{ bg: useColorModeValue("gray.100", "whiteAlpha.200") }}
            borderRadius="full"
          />

          <ModalBody p={0} overflowY="auto" maxH="90vh">
            <Box>
              {/* Header Section with Icon */}
              <HStack
                p={8}
                spacing={6}
                align="flex-start"
                borderBottom="1px solid"
                borderColor={borderColor}
              >
                <Image
                  src={selectedItem?.image}
                  alt={selectedItem?.title}
                  boxSize="100px"
                  borderRadius="xl"
                  objectFit="cover"
                  flexShrink={0}
                  border="2px solid"
                  borderColor={borderColor}
                  shadow="md"
                />
                <VStack align="flex-start" spacing={3} flex={1}>
                  <Heading size="xl" fontWeight="bold">
                    {selectedItem?.title}
                  </Heading>
                  <Text fontSize="md" color={textColor} lineHeight="tall">
                    {selectedItem?.description}
                  </Text>
                  {selectedItem?.storeUrl && (
                    <Link href={selectedItem.storeUrl} isExternal>
                      <Button
                        size="sm"
                        colorScheme="teal"
                        rightIcon={<ExternalLinkIcon />}
                        borderRadius="full"
                      >
                        View on Store
                      </Button>
                    </Link>
                  )}
                </VStack>
              </HStack>

              {/* Demo Section */}
              <Box p={8}>
                {selectedItem?.demo && selectedItem.demo.length > 0 ? (
                  <VStack spacing={6} align="stretch">
                    <SimpleGrid columns={[1, 1, 2]} spacing={6}>
                      {selectedItem.demo.map((demoUrl, idx) => {
                        const isLocalDemo = demoUrl.startsWith('/');
                        const isLunaPlayground = demoUrl.includes('playground.lunalabs.io');

                        return (
                          <Box key={idx}>
                            <HStack justify="space-between" mb={3}>
                              <Text fontSize="sm" fontWeight="semibold" color={textColor}>
                                Demo {idx + 1}
                              </Text>
                              <Link href={demoUrl} isExternal>
                                <Button
                                  size="xs"
                                  variant="ghost"
                                  rightIcon={<ExternalLinkIcon />}
                                  colorScheme="teal"
                                >
                                  Open in new tab
                                </Button>
                              </Link>
                            </HStack>

                            {isLocalDemo ? (
                              <AspectRatio ratio={9 / 16} maxW="300px" mx="auto">
                                <Box
                                  as="iframe"
                                  src={demoUrl}
                                  title={`${selectedItem.title} - Demo ${idx + 1}`}
                                  border="1px solid"
                                  borderColor={borderColor}
                                  borderRadius="xl"
                                  overflow="hidden"
                                  bg={noDemoBg}
                                />
                              </AspectRatio>
                            ) : (
                              <Link href={demoUrl} isExternal>
                                <Box
                                  position="relative"
                                  w="300px"
                                  h="533px"
                                  mx="auto"
                                  border="1px solid"
                                  borderColor={borderColor}
                                  borderRadius="xl"
                                  overflow="hidden"
                                  bg={noDemoBg}
                                  cursor="pointer"
                                  transition="all 0.2s"
                                  _hover={{
                                    transform: "scale(1.02)",
                                    borderColor: hoverBorderColor,
                                  }}
                                >
                                  <VStack
                                    position="absolute"
                                    top="50%"
                                    left="50%"
                                    transform="translate(-50%, -50%)"
                                    spacing={4}
                                    textAlign="center"
                                    p={6}
                                  >
                                    <ExternalLinkIcon boxSize={12} color={textColor} />
                                    <VStack spacing={2}>
                                      <Text fontWeight="semibold" fontSize="md">
                                        {isLunaPlayground ? 'Luna Playground Demo' : 'External Demo'}
                                      </Text>
                                      <Text fontSize="sm" color={textColor}>
                                        Click to open in new window
                                      </Text>
                                    </VStack>
                                    <Button
                                      size="sm"
                                      colorScheme="teal"
                                      rightIcon={<ExternalLinkIcon />}
                                      borderRadius="full"
                                    >
                                      Play Demo
                                    </Button>
                                  </VStack>
                                </Box>
                              </Link>
                            )}
                          </Box>
                        );
                      })}
                    </SimpleGrid>
                  </VStack>
                ) : (
                  <Box
                    p={12}
                    textAlign="center"
                    borderRadius="xl"
                    bg={noDemoBg}
                  >
                    <Text color={textColor} fontSize="sm">
                      No playable demos available for this game.
                    </Text>
                  </Box>
                )}
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
