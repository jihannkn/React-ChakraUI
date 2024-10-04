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
  useToast,
} from "@chakra-ui/react";
import { useMutationUpdateCategory, useCategoryID } from "../../../features/category";

const CategorySchema = z.object({
  name: z.string()
    .min(3, "Minimal 3 characters")
    .max(50, "Maximum 50 characters"),
  description: z.string()
    .min(3, "Minimal 3 characters")
    .max(100, "Maximum 100 characters")
    .optional(),
});

type CategorySchemaType = z.infer<typeof CategorySchema>;

export default function UpdateCategory() {
  const { id } = useParams();
  const { mutate, pending, error } = useMutationUpdateCategory();
  const { data: category, pending: isLoading } = useCategoryID(id);
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (category) {
      reset({
        name: category.name,
        description: category.description,
      });
    }
  }, [category, reset]);

  const onSubmit = async (values: CategorySchemaType) => {
    try {
      await mutate({ id, ...values });
      toast({
        title: "Category updated",
        description: "Category successfully updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard/category");
    } catch (err) {
      toast({
        title: "Error",
        description: error?.message || "An error occurred while updating the category",
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
          <Heading size="lg">Update Category</Heading>
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Category Name</FormLabel>
              <Input
                {...register("name")}
                placeholder="Enter category name"
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

            <FormControl isInvalid={!!errors.description}>
              <FormLabel>Description</FormLabel>
              <Input
                {...register("description")}
                placeholder="Enter description"
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
              Update Category
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}