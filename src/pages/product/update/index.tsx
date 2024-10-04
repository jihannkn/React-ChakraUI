import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Text,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useMutationUpdateProduct, useProductID } from '../../../features/product';
import { Category } from '../../../types';
import { useCategories } from '../../../features/category';

const ProductSchema = z.object({
  name: z.string()
    .min(3, "Minimal 3 characters")
    .max(16, "Maximum 16 characters"),
  price: z.number()
    .min(0, "Price must be greater than or equal to 0"),
  category_id: z.string().nonempty("Category is required"),
  description: z.string()
    .min(3, "Minimal 3 characters")
    .max(35, "Maximum 35 characters"),
  image: z.string().url("Invalid URL"),
});

type ProductSchemaType = z.infer<typeof ProductSchema>;

export default function UpdateProduct() {
  const { id } = useParams();
  const { mutate, pending, error } = useMutationUpdateProduct();
  const { data: product, pending: isLoading } = useProductID(id);
  const { data: categories } = useCategories(10, 1);
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      price: 0,
      category_id: "",
      description: "",
      image: "",
    },
  });

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        price: product.price,
        category_id: product.category_id,
        description: product.description,
        image: product.image,
      });
    }
  }, [product, reset]);

  const onSubmit = async (values: ProductSchemaType) => {
    try {
      await mutate({ id, ...values });
      toast({
        title: "Product updated",
        description: "Product successfully updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard/product");
    } catch (err) {
      toast({
        title: "Error",
        description: error?.message || "An error occurred while updating the product",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

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
          <Heading size="lg">Update Product</Heading>
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Product Name</FormLabel>
              <Input
                {...register("name")}
                placeholder="Type product name"
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              />
              {errors.name && (
                <Text color="red.500">{errors.name.message}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.price}>
              <FormLabel>Price</FormLabel>
              <Input
                {...register("price", { valueAsNumber: true })}
                placeholder="Price"
                type="number"
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              />
              {errors.price && (
                <Text color="red.500">{errors.price.message}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.category_id}>
              <FormLabel>Category</FormLabel>
              <Select
                {...register("category_id")}
                placeholder="Select category"
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              >
                {categories?.data?.categories.map((category: Category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
              {errors.category_id && (
                <Text color="red.500">{errors.category_id.message}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.description}>
              <FormLabel>Description</FormLabel>
              <Input
                {...register("description")}
                placeholder="Write description here"
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              />
              {errors.description && (
                <Text color="red.500">{errors.description.message}</Text>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.image}>
              <FormLabel>Product Image</FormLabel>
              <Input
                {...register("image")}
                placeholder="Image URL"
                bg="gray.50"
                borderColor="black"
                borderWidth="2px"
                borderRadius="0"
                _focus={{ borderColor: 'blue.500', boxShadow: 'none' }}
              />
              {errors.image && (
                <Text color="red.500">{errors.image.message}</Text>
              )}
            </FormControl>

            <Button
              type="submit"
              leftIcon={<FaSave />}
              bg="blue.500"
              color="#000"
              border="2px solid black"
              borderRadius="0"
              boxShadow="5px 5px 0px black"
              _hover={{
                transform: "translate(5px, 5px)",
                boxShadow: "0px 0px 0px black",
              }}
              _active={{
                transform: "translate(2px, 2px)",
                boxShadow: "inset 2px 2px 0px black",
              }}
              width="full"
              mt={4}
              isLoading={pending}
            >
              Update Product
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}