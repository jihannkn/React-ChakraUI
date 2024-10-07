import { Link, useLocation } from "react-router-dom";
import { Button, Flex, Box, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function Pagination({ page, totalPages, setPage }) {
  const { pathname } = useLocation();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Flex justify="center" align="center" pt={8} gap={4} role="navigation" aria-label="Pagination" bg="#f3f4f6">
      {/* Previous Button */}
      <Link to={`${pathname}?page=${page - 1}`} onClick={() => handlePageChange(page - 1)}>
        <Button
          size="sm"
          bg="#ffcc00"
          color="black"
          border="2px solid black"
          fontWeight="bold"
          borderRadius="0"
          boxShadow="5px 5px 0px black"
          _hover={{
            transform: "translate(5px, 5px)",
            boxShadow: "none",
            bg: "#ffcc00",
          }}
          _active={{
            transform: "translate(2px, 2px)",
            boxShadow: "inset 2px 2px 0px black",
          }}
          _disabled={{
            bg: "#ffcc00", // Keep the background color even when disabled
            border: "2px solid black", // Keep the black border when disabled
            color: "black",
            boxShadow: "5px 5px 0px black", // Keep the shadow when disabled
            opacity: 0.6, // Make it appear disabled but retain style
            cursor: "not-allowed",
          }}
          isDisabled={page === 1}
          leftIcon={<ArrowLeftIcon />}
        >
          Previous
        </Button>
      </Link>

      {/* Page Info */}
      <Box
        fontSize="md"
        fontWeight="bold"
        color="black"
        bg="white"
        border="2px solid black"
        borderRadius="0"
        px={4}
        py={2}
        boxShadow="5px 5px 0px black"
      >
        <Text>
          Page {page} of {totalPages}
        </Text>
      </Box>

      {/* Next Button */}
      <Link to={`${pathname}?page=${page + 1}`} onClick={() => handlePageChange(page + 1)}>
        <Button
          size="sm"
          bg="#00ccff"
          color="black"
          border="2px solid black"
          fontWeight="bold"
          borderRadius="0"
          boxShadow="5px 5px 0px black"
          _hover={{
            transform: "translate(5px, 5px)",
            boxShadow: "none",
            bg: "#00ccff",
          }}
          _active={{
            transform: "translate(2px, 2px)",
            boxShadow: "inset 2px 2px 0px black",
          }}
          _disabled={{
            bg: "#00ccff", // Keep the background color even when disabled
            border: "2px solid black", // Keep the black border when disabled
            color: "black",
            boxShadow: "5px 5px 0px black", // Keep the shadow when disabled
            opacity: 0.6, // Make it appear disabled but retain style
            cursor: "not-allowed",
          }}
          isDisabled={page === totalPages}
          rightIcon={<ArrowRightIcon />}
        >
          Next
        </Button>
      </Link>
    </Flex>
  );
}
