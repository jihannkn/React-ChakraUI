import { Box, Button, Flex, Heading, Stack, Text, Grid, GridItem, Image, ChakraProvider } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "../../components/elements/ProductCard";

export default function Home() {
  return (
    <ChakraProvider>
      <Box bg="##F7FAFC" height="100vh" display="flex" alignItems="center" position="relative" px={8}>
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
      {/* ProductCard Section (Bisa Diganti dengan Content Lain) */}
      <Box py={8} bg="#F7FAFC">
        <ProductCard />
      </Box>
    </ChakraProvider>
  );
}
