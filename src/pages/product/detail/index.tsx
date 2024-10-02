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
  Divider,
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
            onClick={() => navigate("/dashboard/product")}
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

        <Flex direction={{ base: "column", lg: "row" }} justify="space-between" mb={4}>
          <Box flex="1" mb={{ base: 4, lg: 0 }} borderWidth={2} borderColor="black" borderRadius="md">
            <Image
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.name}
              borderRadius="md"
              objectFit="cover"
              height="28rem"
              width="full"
              borderWidth={2}
              borderColor="black"
            />
          </Box>

          <VStack flex="1" spacing={4} align="start" ml={{ lg: 8 }}>
            <Heading size="lg" color="black" borderBottom="2px solid black" pb={2}>{product.name}</Heading>
            <Text color="black" fontWeight="bold">Category:</Text>
            <Text color="blue.600">{product.category.name}</Text>
            <Divider borderColor="black" />
            <Text color="black" fontWeight="bold">Description:</Text>
            <Text color="gray.700">{product.description}</Text>
            <Divider borderColor="black" />
            <Text fontWeight="bold" color="black">Price</Text>
            <Text fontSize="2xl" color="blue.600">
              ${product.price}
            </Text>

            <Flex spacing={4} mt={4} gap={4}>
              <Button
                flex="1"
                rightIcon={<TbEdit />}
                bg={"#4CAF50"} // Warna tombol Edit (Hijau)
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
                onClick={() => navigate(`/dashboard/update/${id}`)}
              >
                Update
              </Button>

              <Button
                flex="1"
                rightIcon={<FaTrashAlt />}
                bg={"#f44336"} // Warna tombol Delete (Merah)
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
