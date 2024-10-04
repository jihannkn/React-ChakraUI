import { Box, Checkbox, Text, HStack, Table, Thead, Tbody, Tr, Th, Td, Button, Input } from "@chakra-ui/react";
import { FaSearch, FaTimes, FaCalendarAlt } from "react-icons/fa";

const TransactionTable = () => {
  return (
    <Box mt={10} p={5} border="2px solid black" boxShadow="10px 10px 0px black" borderRadius="8px">
      {/* Search, Filter, and Date Selection */}
      <HStack spacing={8} mb={10} justifyContent="center" alignItems="center">
        {/* Search Input */}
        <HStack
          border="2px solid black"
          borderRadius="md"
          p={2}
          spacing={3}
          bg="white"
          boxShadow="3px 3px 0px black"
          width="280px"
          justifyContent="space-between"
        >
          <FaSearch />
          <Input placeholder="Search" variant="unstyled" width="150px" />
          <FaTimes />
        </HStack>

        {/* Filter Buttons */}
        <HStack
          border="2px solid black"
          borderRadius="md"
          boxShadow="3px 3px 0px black"
          p={1}
          spacing={0}
          divider={<Box borderRight="2px solid #333" />}
        >
          <Button
            borderRadius="none"
            bg="yellow.300"
            _hover={{ bg: "yellow.400" }}
            border="none"
            boxShadow="2px 2px 0px black"
            px={4}
          >
            All
          </Button>
          <Button
            borderRadius="none"
            bg="white"
            _hover={{ bg: "gray.100" }}
            border="none"
            boxShadow="2px 2px 0px black"
            px={4}
          >
            Income
          </Button>
          <Button
            borderRadius="none"
            bg="white"
            _hover={{ bg: "gray.100" }}
            border="none"
            boxShadow="2px 2px 0px black"
            px={4}
          >
            Outcome
          </Button>
        </HStack>

        {/* Date Range Picker */}
        <HStack
          border="2px solid black"
          borderRadius="md"
          p={2}
          spacing={3}
          bg="white"
          boxShadow="3px 3px 0px black"
          width="280px"
          justifyContent="space-between"
        >
          <FaCalendarAlt />
          <Text>Oct 24 - 30, 2022</Text>
        </HStack>
      </HStack>

      {/* Transaction Table */}
      <Table variant="simple" size="lg">
        <Thead>
          <Tr borderBottom="2px solid black">
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Transaction ID</Th>
            <Th>Status</Th>
            <Th>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr borderBottom="1px dotted black">
            <Td>
              <Checkbox defaultIsChecked borderColor="black" />
            </Td>
            <Td>
              <HStack spacing={3}>
                <Box as="span" bg="orange.100" borderRadius="full" boxSize="30px"></Box>
                <Text>Annette Black</Text>
              </HStack>
            </Td>
            <Td>15ac...aPd2</Td>
            <Td>
              <Button size="sm" bg="yellow.100" border="2px solid black">
                Pending
              </Button>
            </Td>
            <Td color="green.500">+ $1,200.00</Td>
          </Tr>
          <Tr borderBottom="1px dotted black">
            <Td>
              <Checkbox defaultIsChecked borderColor="black" />
            </Td>
            <Td>
              <HStack spacing={3}>
                <Box as="span" bg="yellow.100" borderRadius="full" boxSize="30px"></Box>
                <Text>Dianne Russell</Text>
              </HStack>
            </Td>
            <Td>l2LP...hSd3</Td>
            <Td>
              <Button size="sm" bg="pink.100" border="2px solid black">
                Rejected
              </Button>
            </Td>
            <Td color="red.500">- $800.00</Td>
          </Tr>
          <Tr borderBottom="1px dotted black">
            <Td>
              <Checkbox borderColor="black" />
            </Td>
            <Td>
              <HStack spacing={3}>
                <Box as="span" bg="blue.100" borderRadius="full" boxSize="30px"></Box>
                <Text>Courtney Henry</Text>
              </HStack>
            </Td>
            <Td>gL23...Mth3</Td>
            <Td>
              <Button size="sm" bg="yellow.100" border="2px solid black">
                Pending
              </Button>
            </Td>
            <Td color="green.500">+ $3,250.50</Td>
          </Tr>
          <Tr borderBottom="1px dotted black">
            <Td>
              <Checkbox borderColor="black" />
            </Td>
            <Td>
              <HStack spacing={3}>
                <Box as="span" bg="purple.100" borderRadius="full" boxSize="30px"></Box>
                <Text>Wade Warren</Text>
              </HStack>
            </Td>
            <Td>k4A2...hD3f</Td>
            <Td>
              <Button size="sm" bg="green.100" border="2px solid black">
                Completed
              </Button>
            </Td>
            <Td color="red.500">- $250.00</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default TransactionTable;
