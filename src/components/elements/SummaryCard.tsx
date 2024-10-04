import { Box, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const SummaryCard = ({ title, amount, percentage, bgColor, iconColor, textColor = "black" }) => {
  return (
    <Box position="relative" width="100%" textAlign="center">
      {/* Main card */}
      <Box
        bg={bgColor}  /* Keep the original background color for the main card */
        border="2px solid black"
        p={5}
        borderRadius="8px"
        position="relative"
        zIndex="10"
      >
        <Text fontSize="md" fontWeight="bold" color={textColor}>
          {title}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>
          {amount}
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Icon as={FaArrowUp} color={iconColor} />
          <Text ml={2} fontSize="sm" color={textColor}>
            {percentage}
          </Text>
        </Box>
      </Box>

      {/* Bottom layer 1 (white background, more spacing) */}
      <Box
        position="absolute"
        top="15px"  /* Increased spacing from the main card */
        left="10px"
        right="10px"
        height="95%"
        border="2px solid black"
        borderRadius="8px"
        bg="white"  /* White background for the layer */
        zIndex="5"
      />

      {/* Bottom layer 2 (white background, more spacing) */}
      <Box
        position="absolute"
        top="30px"  /* Increased spacing from the first layer */
        left="20px"
        right="20px"
        height="90%"
        border="2px solid black"
        borderRadius="8px"
        bg="white"  /* White background for the second layer */
        zIndex="0"
      />
    </Box>
  );
};

// Modified SummarySection to accept children
const SummarySection = ({ children }) => {
  return (
    <SimpleGrid columns={[1, 3]} spacing={5}>
      {children}
    </SimpleGrid>
  );
};

export { SummarySection, SummaryCard };
