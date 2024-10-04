import { Box, Image, Text, Button, HStack, Grid, GridItem } from '@chakra-ui/react';

const ProductCard = () => {
    

  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      p={5}
      bg="#F7FAFC"// Background untuk seluruh wrapper
      height="100vh"
    >
      {/* Card Produk */}
      <Box
        maxW="350px"
        bg="purple.300" // Warna latar belakang ungu muda
        color="#000"
        fontWeight="bold"
        position="relative"
        borderRadius="0"
        border="2px solid black"
        boxShadow="8px 8px 0px black" // Shadow lebih tebal dan dinamis
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{
          transform: "translate(5px, 5px)", // Pergerakan saat hover
          boxShadow: "0px 0px 0px black",
        }}
        _active={{
          transform: "translate(2px, 2px)", // Pergerakan saat aktif
          boxShadow: "inset 2px 2px 0px black",
        }}
        mx="auto"
        textAlign="left" // Mengubah teks jadi rata kiri untuk tampilan lebih modern
      >
        {/* Gambar Produk */}
        <Image
          src="https://via.placeholder.com/350x200"
          alt="Product Image"
          objectFit="cover"
          borderBottom="2px solid black"
        />

        {/* Layout Informasi Produk */}
        <Grid templateColumns="repeat(2, 1fr)" gap={2} p={4}>
          {/* Nama Produk */}
          <GridItem colSpan={2}>
            <Text fontSize="2xl" textTransform="uppercase" border="2px solid black" p={2}>
              Awesome Product
            </Text>
          </GridItem>

          {/* Kategori */}
          <GridItem>
            <Text fontSize="md" color="black" bg="yellow.300" p={2} border="2px solid black">
              Category: Electronics
            </Text>
          </GridItem>

          {/* Harga */}
          <GridItem>
            <Text fontSize="lg" fontWeight="bold" color="black" bg="pink.300" p={2} border="2px solid black">
              $49.99
            </Text>
          </GridItem>

          {/* Deskripsi */}
          <GridItem colSpan={2}>
            <Text fontSize="sm" color="black" border="2px solid black" p={2} bg="white">
              This is a brief description of the product. It offers amazing features and great value.
            </Text>
          </GridItem>
        </Grid>

        {/* Tombol Aksi */}
        <HStack spacing={4} p={4} justify="space-between">
          <Button
            bg="#87CEEB" // Warna latar biru muda untuk tombol
            color="black"
            border="2px solid black"
            borderRadius="0"
            boxShadow="5px 5px 0px black" // Shadow hitam tebal
            transition="transform 0.2s ease, box-shadow 0.2s ease"
            _hover={{
              transform: "translate(5px, 5px)", // Tombol bergerak saat hover
              boxShadow: "0px 0px 0px black", // Menghilangkan shadow saat hover
            }}
            _active={{
              transform: "translate(2px, 2px)", // Tombol bergerak sedikit saat ditekan
              boxShadow: "inset 2px 2px 0px black", // Shadow masuk ke dalam saat ditekan
            }}
          >
            Detail
          </Button>
          <Button
            bg="#FF6347" // Warna tombol merah oranye untuk Delete
            color="black"
            border="2px solid black"
            borderRadius="0"
            boxShadow="5px 5px 0px black" // Shadow hitam tebal
            transition="transform 0.2s ease, box-shadow 0.2s ease"
            _hover={{
              transform: "translate(5px, 5px)", // Tombol bergerak saat hover
              boxShadow: "0px 0px 0px black", // Menghilangkan shadow saat hover
            }}
            _active={{
              transform: "translate(2px, 2px)", // Tombol bergerak sedikit saat ditekan
              boxShadow: "inset 2px 2px 0px black", // Shadow masuk ke dalam saat ditekan
            }}
          >
            Delete
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
