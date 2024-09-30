// import { Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react';
// import { z } from 'zod'
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod'

// export default function Login() {

//     const validEmailProviders = [
//         'gmail.com',
//         'yahoo.com',
//         'outlook.com',
//         'icloud.com',h  
//         'hotmail.com',
//     ]


//     const loginschema = z.object({

//         email:z.string()
//         .refine(
//             (email) => {
//                 const [, domain] = email.split('@');
//                 return validEmailProviders.includes(domain.toLowerCase());
//             },
//             {
//                 message: 'Please use a valid email provider',
//             }
//         ),
//         password:z.string()
//         .min(3, 'Minimal 3 characters')
//         .max(10, 'Maximal 10 characters')

//     })

//     type loginType = z.infer<typeof loginschema>

//     const {register, handleSubmit, formState: {errors}} = useForm<loginType>({
//         resolver: zodResolver(loginschema),
//     })

//     const onSubmit : SubmitHandler<loginType> = (data) => console.log(data)

//     return (
//         <Flex>
//             <Heading>Login duluuu</Heading>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <Flex>
//                     {/*Email Input*/}
//                     <FormControl isInvalid={!!errors.email}>
//                         <FormLabel>Email Adress</FormLabel>
//                         <Input type='email' {...register('email')} placeholder='Email'/>
//                         {! errors.email ? (
//                             <FormHelperText>
//                                 enter your email
//                             </FormHelperText>
//                         ):(
//                             <FormHelperText color='red'>
//                                 {errors.email.message}
//                             </FormHelperText>
//                         )}
//                     </FormControl>
//                     {/*password Input*/}
//                     <FormControl isInvalid={!!errors.password}>
//                         <FormLabel>Password</FormLabel>
//                         <Input type='email' {...register('password')} placeholder='Password'/>
//                         {! errors.password ? (
//                             <FormHelperText>
//                                 enter your password
//                             </FormHelperText>
//                         ):(
//                             <FormHelperText color='red'>
//                                 {errors.password.message}
//                             </FormHelperText>
//                         )}
//                     </FormControl>
//                         <Flex>
//                             <Button type='submit'>Login</Button>
//                         </Flex>
//                 </Flex>
//             </form>
//         </Flex>
//     )
// }




import { Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Box, Text, Link as ChakraLink } from '@chakra-ui/react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const validEmailProviders = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'icloud.com',
    'hotmail.com',
  ];

  const loginschema = z.object({
    email: z
      .string()
      .refine(
        (email) => {
          const [, domain] = email.split('@');
          return validEmailProviders.includes(domain.toLowerCase());
        },
        {
          message: 'Please use a valid email provider',
        }
      ),
    password: z
      .string()
      .min(3, 'Minimal 3 characters')
      .max(10, 'Maximal 10 characters'),
  });

  type loginType = z.infer<typeof loginschema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginschema),
  });

  const onSubmit: SubmitHandler<loginType> = (data) => {
    console.log(data);
    navigate('/product'); // Navigate to the products page after login
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Heading mb={6}>Login duluuu</Heading>
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
            {/* Email Input */}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                {...register('email')}
                placeholder="Email"
                bg="white"
                border="2px solid black"
                borderRadius="0" // Flat corners for brutalism
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
                borderRadius="0" // Flat corners for brutalism
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
              Login
            </Button>
          </Flex>
        </form>
        <Text mt={4} textAlign="center">
          Belum punya akun?{' '}
          <ChakraLink as={RouterLink} to="/auth/register" color="blue.500">
            Daftar di sini
          </ChakraLink>
        </Text>
      </Box>
    </Flex>
  );
}
