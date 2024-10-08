import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
import { useProductID } from "../../../features/product";

export default function ShoppingCard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const toast = useToast();

  // State untuk jumlah barang yang dibeli
  const [quantity, setQuantity] = useState(1); // Default jumlah 1

  const { data: product, error } = useProductID(id);

  // Pastikan harga adalah angka
  const price = product ? Number(product.price) : 0;
  const totalPrice = price * quantity; // Total harga berdasarkan harga per item dan jumlah

  const handleBuy = () => {
    toast({
      title: "Item added to cart",
      description: `${quantity} ${product.name} has been added to your cart.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Add logic to add the item with quantity to cart here
  };

  const handleBuyNow = () => {
    toast({
      title: "Purchase successful",
      description: `You have successfully bought ${quantity} ${product.name}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Navigasi setelah menunjukkan toast, tunggu 500ms untuk memberi waktu toast muncul
    setTimeout(() => {
      navigate(`/`);
    }, 500);
  };

  // Fungsi untuk menambah jumlah barang
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Fungsi untuk mengurangi jumlah barang
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (error)
    return (
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
            onClick={() => navigate("/")}
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

        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          mb={4}
        >
          <Box
            flex="1"
            mb={{ base: 4, lg: 0 }}
            borderWidth={2}
            borderColor="black"
            borderRadius="md"
          >
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
            <Heading
              size="lg"
              color="black"
              borderBottom="2px solid black"
              pb={2}
            >
              {product.name}
            </Heading>
            <Text color="black" fontWeight="bold">
              Category:
            </Text>
            <Text color="blue.600">{product.category.name}</Text>
            <Divider borderColor="black" />
            <Text color="black" fontWeight="bold">
              Description:
            </Text>
            <Text color="gray.700">{product.description}</Text>
            <Divider borderColor="black" />
            <Flex justify="space-between" width="100%">
              <Text fontWeight="bold" color="black">
                Price (per item)
              </Text>
              <Text fontSize="2xl" color="blue.600">
                ${price}
              </Text>
            </Flex>

            {/* Harga total */}
            <Flex justify="space-between" width="100%">
              <Text fontWeight="bold" color="black">
                Total Price
              </Text>
              <Text fontSize="2xl" color="green.600">
                ${totalPrice}
              </Text>
            </Flex>

            {/* Section untuk menambah atau mengurangi jumlah barang */}
            <Flex align="center" gap={4} mt={4}>
              <Button
                onClick={decrementQuantity}
                bg="red.500"
                color="white"
                borderRadius="0"
                border="2px solid black"
                boxShadow="5px 5px 0px black"
                _hover={{
                  transform: "translate(5px, 5px)",
                  boxShadow: "0px 0px 0px black",
                }}
                _active={{
                  transform: "translate(2px, 2px)",
                  boxShadow: "inset 2px 2px 0px black",
                }}
              >
                −
              </Button>
              <Text fontWeight="bold" fontSize="2xl">
                {quantity}
              </Text>
              <Button
                onClick={incrementQuantity}
                bg="green.500"
                color="white"
                borderRadius="0"
                border="2px solid black"
                boxShadow="5px 5px 0px black"
                _hover={{
                  transform: "translate(5px, 5px)",
                  boxShadow: "0px 0px 0px black",
                }}
                _active={{
                  transform: "translate(2px, 2px)",
                  boxShadow: "inset 2px 2px 0px black",
                }}
              >
                +
              </Button>
            </Flex>

            <Flex spacing={4} mt={4} gap={4}>
              <Button
                flex="1"
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
                onClick={handleBuy}
              >
                Add {quantity} to Cart
              </Button>

              <Button
                flex="1"
                bg={"#FF6347"}
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
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
