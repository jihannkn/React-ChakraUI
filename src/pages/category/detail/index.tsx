import { useNavigate, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Alert,
  AlertIcon,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useMutationDeleteCategory, useCategoryID } from "../../../features/category";

export default function DetailCategory() {
  const navigate = useNavigate();
  const { id } = useParams();
  const toast = useToast();

  const { data: category, error } = useCategoryID(id);
  const { mutate } = useMutationDeleteCategory();

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete the category: ${category.name}?`)) {
      try {
        await mutate(category);
        toast({
          title: "Category deleted",
          description: `${category.name} has been successfully deleted.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/dashboard/category");
      } catch (error) {
        toast({
          title: "Delete failed",
          description: error.message || "An error occurred while deleting the category.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  if (error)
    return (
      <Alert status="error" mb={4}>
        <AlertIcon />
        Error: {error.message}
      </Alert>
    );
  if (!category) return <Text>No Category Found</Text>;

  return (
    <Box p={6} height="100vh" bg="gray.100" borderRadius="md" boxShadow="none">
      <Box
        p={8}
        bg="white"
        borderWidth={2}
        borderColor="black"
        borderRadius="md"
        boxShadow="md"
        position="relative"
      >
        <Flex mb={4} alignItems="center">
          <Button
            onClick={() => navigate("/dashboard/category")}
            leftIcon={<IoArrowBack />}
            bg={"#00ccff"}
            color={"#000"}
            borderRadius={"0"}
            border={"2px solid #000"}
            fontWeight={"bold"}
            position="relative"
            boxShadow="5px 5px 0px black"
            transition="transform 0.2s ease, box-shadow 0.2s ease"
            _hover={{
              transform: "translate(5px, 5px)",
              boxShadow: "0px 0px 0px black",
            }}
            _active={{
              transform: "translate(2px, 2px)",
              boxShadow: "inset 2px 2px 0px black",
            }}
          >
            Back
          </Button>
        </Flex>

        <VStack spacing={4} align="start">
          <Heading size="lg" color="black" borderBottom="2px solid black" pb={2}>
            {category.name}
          </Heading>
          <Text color="black" fontWeight="bold">
            Description:
          </Text>
          <Text color="gray.700">{category.description}</Text>
          <Divider borderColor="black" />

          <Flex spacing={4} mt={4} gap={4}>
            <Button
              flex="1"
              rightIcon={<TbEdit />}
              bg={"#4CAF50"}
              color={"#000"}
              borderRadius={"0"}
              border={"2px solid #000"}
              fontWeight={"bold"}
              position="relative"
              boxShadow="5px 5px 0px black"
              transition="transform 0.2s ease, box-shadow 0.2s ease"
              _hover={{
                transform: "translate(5px, 5px)",
                boxShadow: "0px 0px 0px black",
              }}
              _active={{
                transform: "translate(2px, 2px)",
                boxShadow: "inset 2px 2px 0px black",
              }}
              onClick={() => navigate(`/dashboard/category/update/${id}`)}
            >
              Update
            </Button>

            <Button
              flex="1"
              rightIcon={<FaTrashAlt />}
              bg={"#f44336"}
              color={"#000"}
              borderRadius={"0"}
              border={"2px solid #000"}
              fontWeight={"bold"}
              position="relative"
              boxShadow="5px 5px 0px black"
              transition="transform 0.2s ease, box-shadow 0.2s ease"
              _hover={{
                transform: "translate(5px, 5px)",
                boxShadow: "0px 0px 0px black",
              }}
              _active={{
                transform: "translate(2px, 2px)",
                boxShadow: "inset 2px 2px 0px black",
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}
