import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  Text,
  Select,
} from "@chakra-ui/react";
import { useMutationCreateProduct } from '../../../features/product';

export default function DashboardProductCreate() {
  const { mutate } = useMutationCreateProduct();
  const navigate = useNavigate();

  const ProductSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimal 3 characters")
      .max(16, "Maximum 16 characters")
      .required("Required"),
    price: Yup.number()
      .min(0, "Price must be greater than or equal to 0")
      .required("Required"),
    category: Yup.string().required("Required"), // Category sebagai wajib diisi
    description: Yup.string()
      .min(3, "Minimal 3 characters")
      .max(35, "Maximum 35 characters")
      .required("Required"),
    image: Yup.string().url("Invalid URL").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    },
    validationSchema: ProductSchema,
    onSubmit: (values, { resetForm }) => {
      mutate({ ...values, price: Number(values.price) });
      resetForm();
      navigate("/dashboard/product");
    },
  });

  return (
    <Box p={6} bg="gray.100" minHeight="100vh">
      <Box
        p={8}
        bg="white"
        borderWidth={2}
        borderColor="black"
        borderRadius="md"
        boxShadow="5px 5px 0px black"
        maxWidth="80%"
        mx="auto"
      >
        <Flex justify="center" mb={6}>
          <Heading size="lg">Create Product</Heading>
        </Flex>

        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={formik.touched.name && Boolean(formik.errors.name)}>
              <FormLabel>Your Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Type product name"
                onChange={formik.handleChange}
                value={formik.values.name}
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              />
              {formik.errors.name && formik.touched.name && (
                <Text color="red.500">{formik.errors.name}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={formik.touched.price && Boolean(formik.errors.price)}>
              <FormLabel>Your Price</FormLabel>
              <Input
                type="text"
                name="price"
                placeholder="Price"
                onChange={formik.handleChange}
                value={formik.values.price}
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              />
              {formik.errors.price && formik.touched.price && (
                <Text color="red.500">{formik.errors.price}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={formik.touched.category && Boolean(formik.errors.category)}>
              <FormLabel>Category</FormLabel>
              <Select
                name="category"
                placeholder="Select category"
                onChange={formik.handleChange}
                value={formik.values.category}
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              >
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </Select>
              {formik.errors.category && formik.touched.category && (
                <Text color="red.500">{formik.errors.category}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={formik.touched.description && Boolean(formik.errors.description)}>
              <FormLabel>Your Message</FormLabel>
              <Textarea
                placeholder="Write description here"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              />
              {formik.errors.description && formik.touched.description && (
                <Text color="red.500">{formik.errors.description}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={formik.touched.image && Boolean(formik.errors.image)}>
              <FormLabel>Product Image</FormLabel>
              <Input
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={formik.handleChange}
                value={formik.values.image}
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              />
              {formik.errors.image && formik.touched.image && (
                <Text color="red.500">{formik.errors.image}</Text>
              )}
            </FormControl>

            <Button
              type="submit"
              bg="red.500" // Warna latar belakang biru
              color="#000" // Warna teks hitam
              border="2px solid black" // Garis tegas hitam
              borderRadius="0" // Sudut kotak yang tajam
              boxShadow="5px 5px 0px black" // Bayangan hitam menjorok
              _hover={{
                transform: "translate(5px, 5px)", // Tombol bergerak saat hover
                boxShadow: "0px 0px 0px black", // Menghapus bayangan saat hover
              }}
              _active={{
                transform: "translate(2px, 2px)", // Tombol bergerak sedikit saat ditekan
                boxShadow: "inset 2px 2px 0px black", // Bayangan masuk ke dalam
              }}
              width="full"
              mt={4}
            >
              <FaPlus className="mr-2" /> Create Product
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
