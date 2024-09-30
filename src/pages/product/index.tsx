import React from 'react';
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
  Avatar,
  Text,
} from '@chakra-ui/react';

export default function Product() {
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
            <Tr bg="white" border="4px solid black">
              <Td border="4px solid black">
                <Checkbox />
              </Td>
              <Td border="4px solid black">
                <Box display="flex" alignItems="center">
                  <Avatar name="Annette Black" src="https://bit.ly/ryan-florence" size="sm" mr={3} border="3px solid black" />
                  <Text fontWeight="bold" color="black">Annette Black</Text>
                </Box>
              </Td>
              <Td border="4px solid black">Electronics</Td>
              <Td border="4px solid black">Smartphone with 64GB storage</Td>
              <Td border="4px solid black" isNumeric fontWeight="bold" color="green.600">$1,200.00</Td>
              <Td border="4px solid black">
                <Button colorScheme="black" variant="outline" border="4px solid black">View</Button>
              </Td>
            </Tr>
            <Tr bg="white" border="4px solid black">
              <Td border="4px solid black">
                <Checkbox />
              </Td>
              <Td border="4px solid black">
                <Box display="flex" alignItems="center">
                  <Avatar name="Dianne Russell" src="https://bit.ly/kent-c-dodds" size="sm" mr={3} border="3px solid black" />
                  <Text fontWeight="bold" color="black">Dianne Russell</Text>
                </Box>
              </Td>
              <Td border="4px solid black">Clothing</Td>
              <Td border="4px solid black">Winter jacket</Td>
              <Td border="4px solid black" isNumeric fontWeight="bold" color="red.600">$800.00</Td>
              <Td border="4px solid black">
                <Button colorScheme="black" variant="outline" border="4px solid black">View</Button>
              </Td>
            </Tr>
            <Tr bg="yellow.200" border="4px solid black">
              <Td border="4px solid black">
                <Checkbox defaultChecked />
              </Td>
              <Td border="4px solid black">
                <Box display="flex" alignItems="center">
                  <Avatar name="Courtney Henry" src="https://bit.ly/prosper-baba" size="sm" mr={3} border="3px solid black" />
                  <Text fontWeight="bold" color="black">Courtney Henry</Text>
                </Box>
              </Td>
              <Td border="4px solid black">Home Appliances</Td>
              <Td border="4px solid black">Washing Machine</Td>
              <Td border="4px solid black" isNumeric fontWeight="bold" color="green.600">$3,250.50</Td>
              <Td border="4px solid black">
                <Button colorScheme="black" variant="outline" border="4px solid black">View</Button>
              </Td>
            </Tr>
            <Tr bg="white" border="4px solid black">
              <Td border="4px solid black">
                <Checkbox />
              </Td>
              <Td border="4px solid black">
                <Box display="flex" alignItems="center">
                  <Avatar name="Wade Warren" src="https://bit.ly/sage-adebayo" size="sm" mr={3} border="3px solid black" />
                  <Text fontWeight="bold" color="black">Wade Warren</Text>
                </Box>
              </Td>
              <Td border="4px solid black">Furniture</Td>
              <Td border="4px solid black">Modern chair</Td>
              <Td border="4px solid black" isNumeric fontWeight="bold" color="red.600">$250.00</Td>
              <Td border="4px solid black">
                <Button colorScheme="black" variant="outline" border="4px solid black">View</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
