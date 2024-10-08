import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Grid,
  GridItem,
  Image,
  ChakraProvider,
  Spinner,
  Alert,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "../../components/elements/ProductCard";
import { useState } from "react";
import { useProducts } from "../../features/product";
import Pagination from "../../components/elements/Pagination";
import Footer from "../../components/fragments/dashboard/footer";

export default function Home() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Set your limit per page
  const [refreshTrigger] = useState(0);

  // Use the useProducts hook to fetch data
  const { data, isLoading, error } = useProducts(limit, page, refreshTrigger);

  const totalPages = data?.totalPages || 1;

  // Render loading state
  if (isLoading) {
    return (
      <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Spinner size="xl" />
      </Flex>
    );
  }

  // Render error state
  if (error) {
    return (
      <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Alert status="error">{error.message || "Unknown error"}</Alert>
      </Flex>
    );
  }

  return (
    <ChakraProvider>
      <Box bg="#f3f4f6" minHeight="100vh" display="flex" alignItems="center" position="relative" px={8} py={12}>
        {/* Grid Container */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={8}
          maxW="1200px"
          mx="auto"
          px={4}
          alignItems="center"
        >
          {/* Left Section */}
          <GridItem>
            <Flex direction="column" align="flex-start" justify="center" h="100%">
              <Text
                fontSize="sm"
                fontWeight="bold"
                bg="#D4FFAC"
                color="black"
                px={3}
                py={1}
                mb={4}
                borderRadius="sm"
                textTransform="uppercase"
              >
                Innovate. Create. Inspire.
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                mb={6}
                fontWeight="bold"
                lineHeight="shorter"
                color="#333333"
                style={{
                  textShadow: '2px 2px #E6E6E6',
                }}
              >
                Innovative Design, Lasting Impact.
              </Heading>
              <Text
                fontSize="lg"
                mb={6}
                color="#666666"
                maxW="500px"
                lineHeight="tall"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                <Button
                  bg="#695DE9"
                  color="white"
                  _hover={{ bg: "#5444C5" }}
                  px={6}
                  py={4}
                  shadow="md"
                  borderRadius="md"
                  textTransform="uppercase"
                  boxShadow="5px 5px 0px #000"
                  fontWeight="bold"
                >
                  GET FREE CONSULTATIONS
                </Button>
                <Button
                  variant="outline"
                  color="black"
                  borderColor="black"
                  px={6}
                  py={4}
                  borderRadius="md"
                  _hover={{ bg: "#000", color: "white" }}
                  boxShadow="5px 5px 0px #000"
                  textTransform="uppercase"
                  fontWeight="bold"
                  rightIcon={<FiArrowRight />}
                >
                  LEARN MORE
                </Button>
              </Stack>
            </Flex>
          </GridItem>

          {/* Right Section (Image Only) */}
          <GridItem>
            <Flex align="center" justify="center" h="100%">
              <Image
                src="/path/to/your-image.png" // Ganti path ini dengan path gambar Anda
                alt="Illustration"
                width={{ base: "300px", md: "450px" }} // Lebar tetap
                height={{ base: "300px", md: "450px" }} // Tinggi tetap
                boxShadow="10px 10px 0px #000"
                border="2px solid black"
                objectFit="cover"
                borderRadius="md"
              />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      
      <Box pt={14} px={4} bg="#f3f4f6">
        {/* Heading */}
        <Heading 
          as="h1" 
          fontSize="2.3rem" 
          fontWeight="bold" 
          mb={4} 
          textAlign="center"
        >
          Our Products
        </Heading>

        {/* Product Grid */}
        <Grid 
          templateColumns={{
            base: "repeat(1, 1fr)",  // For small screens (mobile)
            sm: "repeat(2, 1fr)",    // For small devices
            md: "repeat(3, 1fr)",    // For medium devices
            lg: "repeat(4, 1fr)",    // For large devices
            xl: "repeat(5, 1fr)",    // For extra-large devices
          }} 
          gap={3}
        >
          {data?.data?.products.length > 0 ? (
            data.data.products.map((product) => (
              <GridItem key={product.id}>
                <ProductCard product={product} />
              </GridItem>
            ))
          ) : (
            <Text fontSize="xl" color="red.500">
              No Products Available
            </Text>
          )}
        </Grid>
      </Box>

      {/* Pagination Component */}
      <Box my={8} px={4}>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </Box>

      {/* Footer Component */}
      <Box mt={16} bg="#f3f4f6" px={4} py={8}>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
