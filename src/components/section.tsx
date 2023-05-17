import { Transition, motion } from "framer-motion";
import { ResponsiveValue, chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop: any) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

export default function Section({
  children,
  delay = "0",
}: {
  children: any;
  delay: string;
}) {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "0.2", delay: delay }}
      mb={{ base: 8 }}
    >
      {children}
    </StyledDiv>
  );
}
