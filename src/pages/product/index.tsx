import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Checkbox,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 
import { useMutationDeleteProduct } from '../../features/product/useMutationDeleteProduct'; // Import hook delete
import { useProducts } from '../../features/product';

export default function Product() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1); 
  const { data, isLoading, error, totalPages } = useProducts(limit, page);

  // Memanggil custom hook untuk delete product
  const { mutate, pending, message, error: deleteError } = useMutationDeleteProduct();

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  // Fungsi untuk menghapus produk
  const handleDelete = (product) => {
    if (window.confirm(`Are you sure you want to delete the product: ${product.name}?`)) {
      mutate(product);
    }
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text color="red.500">An error occurred: {error}</Text>;
  }

  return (
    <Box p={5} bg="#f5f5f5" border="8px solid black">
      <TableContainer border="4px solid black">
        <Table variant="unstyled">
          <Thead bg="black">
            <Tr>
              <Th border="4px solid black" color="white" fontWeight="extrabold" fontSize="lg" textTransform="uppercase">
                <Checkbox colorScheme="black" />
              </Th>
              <Th border="4px solid black" color="white" fontWeight="extrabold" fontSize="lg" textTransform="uppercase">Name</Th>
              <Th border="4px solid black" color="white" fontWeight="extrabold" fontSize="lg" textTransform="uppercase">Category</Th>
              <Th border="4px solid black" color="white" fontWeight="extrabold" fontSize="lg" textTransform="uppercase">Description</Th>
              <Th border="4px solid black" color="white" fontWeight="extrabold" fontSize="lg" textTransform="uppercase" isNumeric>Price</Th>
              <Th border="4px solid black" color="white" fontWeight="extrabold" fontSize="lg" textTransform="uppercase">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((product) => (
              <Tr key={product.id} bg="white" border="4px solid black">
                <Td border="4px solid black">
                  <Checkbox />
                </Td>
                <Td border="4px solid black">{product.name}</Td>
                <Td border="4px solid black">{product.category.name}</Td>
                <Td border="4px solid black">{product.description}</Td>
                <Td border="4px solid black" isNumeric fontWeight="bold" color="green.600">
                  ${product.price.toFixed(2)}
                </Td>
                <Td border="4px solid black">
                  {/* Link ke halaman detail */}
                  <Link to={`/dashboard/product/detail/${product.id}`}>
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      border="4px solid black"
                      mr={2} 
                    >
                      Detail
                    </Button>
                  </Link>
                  {/* Tombol Delete */}
                  <Button
                    colorScheme="red"
                    variant="outline"
                    border="4px solid black"
                    onClick={() => handleDelete(product)}
                    isLoading={pending} // Tambahkan feedback loading saat proses delete
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </Button>
        <Text>Page {page} of {totalPages}</Text>
        <Button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </Button>
      </Box>

      {/* Menampilkan pesan jika ada */}
      {message && <Text mt={4} color="green.500">{message}</Text>}
      {deleteError && <Text mt={4} color="red.500">Error: {deleteError.message}</Text>}
    </Box>
  );
}