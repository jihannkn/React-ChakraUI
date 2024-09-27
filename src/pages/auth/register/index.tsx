import { Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Box, Text, Link as ChakraLink } from '@chakra-ui/react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const registerSchema = z.object({
    name: z
      .string()
      .min(2, 'Name must be at least 2 characters long')
      .max(50, 'Name must be 50 characters or less'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .max(20, 'Password must be 20 characters or less'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .max(20, 'Password must be 20 characters or less'),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
  });

  type RegisterType = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    console.log(data);
    // Setelah registrasi berhasil, arahkan ke halaman login
    navigate('/login');
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Heading mb={6}>Register</Heading>
      <Box
        border="2px solid black" // Border tegas untuk kotak form
        p="6"
        boxShadow="5px 5px 0px black" // Shadow untuk kotak form
        maxWidth="400px"
        width="100%"
        borderRadius="0"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap={6}>
            {/* Name Input */}
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                {...register('name')}
                placeholder="Your Name"
                bg="white"
                border="2px solid black"
                borderRadius="0" // Flat corners
                px="4"
                py="2"
                boxShadow="5px 5px 0px black" // Shadow for brutalism effect
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{
                  transform: 'translate(5px, 5px)',
                  boxShadow: '0px 0px 0px black',
                }}
                _focus={{
                  borderColor: 'black',
                  boxShadow: 'none',
                }}
              />
              {!errors.name ? (
                <FormHelperText>Enter your name</FormHelperText>
              ) : (
                <FormHelperText color="red">
                  {errors.name?.message}
                </FormHelperText>
              )}
            </FormControl>

            {/* Email Input */}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                {...register('email')}
                placeholder="Email"
                bg="white"
                border="2px solid black"
                borderRadius="0" // Flat corners
                px="4"
                py="2"
                boxShadow="5px 5px 0px black" // Shadow for brutalism effect
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{
                  transform: 'translate(5px, 5px)',
                  boxShadow: '0px 0px 0px black',
                }}
                _focus={{
                  borderColor: 'black',
                  boxShadow: 'none',
                }}
              />
              {!errors.email ? (
                <FormHelperText>Enter your email</FormHelperText>
              ) : (
                <FormHelperText color="red">
                  {errors.email?.message}
                </FormHelperText>
              )}
            </FormControl>

            {/* Password Input */}
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register('password')}
                placeholder="Password"
                bg="white"
                border="2px solid black"
                borderRadius="0" // Flat corners
                px="4"
                py="2"
                boxShadow="5px 5px 0px black" // Shadow for brutalism effect
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{
                  transform: 'translate(5px, 5px)',
                  boxShadow: '0px 0px 0px black',
                }}
                _focus={{
                  borderColor: 'black',
                  boxShadow: 'none',
                }}
              />
              {!errors.password ? (
                <FormHelperText>Enter your password</FormHelperText>
              ) : (
                <FormHelperText color="red">
                  {errors.password?.message}
                </FormHelperText>
              )}
            </FormControl>

            {/* Confirm Password Input */}
            <FormControl isInvalid={!!errors.confirmPassword}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                {...register('confirmPassword')}
                placeholder="Confirm Password"
                bg="white"
                border="2px solid black"
                borderRadius="0" // Flat corners
                px="4"
                py="2"
                boxShadow="5px 5px 0px black" // Shadow for brutalism effect
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{
                  transform: 'translate(5px, 5px)',
                  boxShadow: '0px 0px 0px black',
                }}
                _focus={{
                  borderColor: 'black',
                  boxShadow: 'none',
                }}
              />
              {!errors.confirmPassword ? (
                <FormHelperText>Confirm your password</FormHelperText>
              ) : (
                <FormHelperText color="red">
                  {errors.confirmPassword?.message}
                </FormHelperText>
              )}
            </FormControl>

            {/* Submit Button */}
            <Button
              type="submit"
              bg="blue.300" // Warna tombol
              color="black"
              border="2px solid black"
              borderRadius="0"
              fontWeight="bold"
              boxShadow="5px 5px 0px black" // Shadow brutalism
              transition="transform 0.2s ease, box-shadow 0.2s ease"
              _hover={{
                transform: 'translate(5px, 5px)',
                boxShadow: '0px 0px 0px black',
              }}
              _active={{
                transform: 'translate(2px, 2px)',
                boxShadow: 'inset 2px 2px 0px black',
              }}
            >
              Register
            </Button>
          </Flex>
        </form>
        <Text mt={4} textAlign="center">
          Sudah punya akun?{' '}
          <ChakraLink as={RouterLink} to="/auth/login" color="blue.500">
            Login di sini
          </ChakraLink>
        </Text>
      </Box>
    </Flex>
  );
}
