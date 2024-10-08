import { Box, Image, Text, Button, HStack, Grid, GridItem } from '@chakra-ui/react';
import { Product } from '../../types';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      p={5}
      bg="#f3f4f6"
      height="100vh"
    >
      {/* Card Produk */}
      <Box
        maxW="350px"
        minH="500px"
        bg="purple.300"
        color="#000"
        fontWeight="bold"
        position="relative"
        borderRadius="0"
        border="2px solid black"
        boxShadow="8px 8px 0px black"
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{
          transform: "translate(5px, 5px)",
          boxShadow: "0px 0px 0px black",
        }}
        _active={{
          transform: "translate(2px, 2px)",
          boxShadow: "inset 2px 2px 0px black",
        }}
        mx="auto"
        textAlign="left"
        overflow="hidden"
      >
        {/* Gambar Produk */}
        <Image
          src={product.image}
          alt="Product Image"
          objectFit="cover"
          maxH="200px"
          w="100%"
          borderBottom="2px solid black"
        />

        {/* Layout Informasi Produk */}
        <Grid templateColumns="repeat(2, 1fr)" gap={2} p={4}>
          {/* Nama Produk */}
          <GridItem colSpan={2}>
            <Text
              fontSize="2xl"
              textTransform="uppercase"
              border="2px solid black"
              p={2}
              noOfLines={1}
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {product.name}
            </Text>
          </GridItem>

          {/* Kategori */}
          <GridItem>
            <Text
              fontSize="md"
              color="black"
              bg="yellow.300"
              p={2}
              border="2px solid black"
              textAlign="center"
              minH="40px"
            >
              {product.category?.name}
            </Text>
          </GridItem>

          {/* Harga */}
          <GridItem>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="black"
              bg="pink.300"
              p={2}
              border="2px solid black"
              textAlign="center"
              minH="40px"
            >
              {product.price}
            </Text>
          </GridItem>

          {/* Deskripsi */}
          <GridItem colSpan={2}>
            <Text
              fontSize="sm"
              color="black"
              border="2px solid black"
              p={2}
              bg="white"
              maxH="60px"
              overflow="hidden"
              textOverflow="ellipsis"
              noOfLines={3}
            >
              {product.description}
            </Text>
          </GridItem>
        </Grid>

        {/* Tombol Aksi */}
        <HStack spacing={4} p={4} justify="space-between" alignItems="center"> {/* Menjaga tombol tetap sejajar */}
          <Link to={`/shoping-cart/${product.id}`}>
          <Button
            bg="#87CEEB"
            color="black"
            border="2px solid black"
            borderRadius="0"
            boxShadow="5px 5px 0px black"
            transition="transform 0.2s ease, box-shadow 0.2s ease"
            minH="40px" // Pastikan tinggi tombol konsisten
            _hover={{
              transform: "translate(5px, 5px)",
              boxShadow: "0px 0px 0px black",
            }}
            _active={{
              transform: "translate(2px, 2px)",
              boxShadow: "inset 2px 2px 0px black",
            }}
          >
            More
          </Button>
          </Link>
          <Button
  bg="#FF6347"
  color="black"
  border="2px solid black"
  borderRadius="0"
  boxShadow="5px 5px 0px black"
  transition="transform 0.2s ease, box-shadow 0.2s ease"
  minH="40px" // Ensures the button height is consistent
  _hover={{
    transform: "translate(5px, 5px)",
    boxShadow: "0px 0px 0px black",
  }}
  _active={{
    transform: "translate(2px, 2px)",
    boxShadow: "inset 2px 2px 0px black",
  }}
>
  <FaShoppingCart /> {/* Displaying the shopping cart icon */}
</Button>

        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
