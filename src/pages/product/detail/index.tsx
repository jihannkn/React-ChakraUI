import { useNavigate, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { IoArrowBack } from "react-icons/io5";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useMutationDeleteProduct, useProductID } from "../../../features/product";

export default function DetailProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: product, error } = useProductID(id);
  const { mutate } = useMutationDeleteProduct();

  if (error) return (
    <Alert status="error" mb={4}>
      <AlertIcon />
      Error: {error.message}
    </Alert>
  );
  if (!product) return <Text>No Product Found</Text>;

  return (
    <Box p={6} height="100vh" bg="gray.50" borderRadius="md" boxShadow="md">
      <Box
        p={8}
        bg="white"
        borderWidth={1}
        borderColor="gray.300"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Flex mb={6} alignItems="center">
          <Button
            onClick={() => navigate("/dashboard/product")}
            variant="link"
            color="blue.600"
            leftIcon={<IoArrowBack />}
          >
            Back
          </Button>
        </Flex>

        <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
          <Box flex="1" mb={{ base: 4, lg: 0 }}>
            <Image
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.name}
              borderRadius="lg"
              objectFit="cover"
              height="28rem"
              width="full"
            />
          </Box>

          <VStack flex="1" spacing={4} align="start" ml={{ lg: 8 }}>
            <Heading size="lg">{product.name}</Heading>
            <Text color="blue.600">{product.category.name}</Text>
            <Text color="gray.600">{product.description}</Text>
            <Text fontWeight="bold">Price</Text>
            <Text fontSize="2xl" color="blue.600">
              ${product.price}
            </Text>

            <Flex spacing={4}>
              <Button
                colorScheme="blue"
                flex="1"
                rightIcon={<TbEdit />}
                onClick={() => navigate(`/dashboard/update/${id}`)}
              >
                Update
              </Button>

              <Button
                colorScheme="red"
                flex="1"
                rightIcon={<FaTrashAlt />}
                onClick={() => mutate(id)}
              >
                Delete
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
