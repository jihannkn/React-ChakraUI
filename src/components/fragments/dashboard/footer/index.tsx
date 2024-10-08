import React from 'react';
import { Box, Flex, Text, VStack, Link, HStack, Image, IconButton } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="#AB47BC" color="white" py={10} px={5}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        alignItems={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        {/* About Us Section */}
        <VStack spacing={4} maxW="300px" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            About Us —
          </Text>
          <Text>
            Ghost is a powerful app for professional publishers to create, share, and grow a
            business around their content. It comes with modern tools to build a website, publish
            content, send newsletters & offer paid subscriptions to members.
          </Text>
          {/* Social Media Icons */}
          <HStack spacing={4}>
            <IconButton
              as={Link}
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="whiteAlpha"
              bg="black"
              borderRadius="full"
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
              colorScheme="whiteAlpha"
              bg="black"
              borderRadius="full"
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="whiteAlpha"
              bg="black"
              borderRadius="full"
            />
            <IconButton
              as={Link}
              href="#"
              aria-label="Discord"
              icon={<FaDiscord />}
              colorScheme="whiteAlpha"
              bg="black"
              borderRadius="full"
            />
          </HStack>
        </VStack>

        {/* Quick Links Section */}
        <VStack spacing={2} align="start" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Quick Links —
          </Text>
          {['Demos', 'Style Guide', 'Web Picks', 'Meet Authors', 'Our Plans', 'Contact'].map(
            (link) => (
              <Link key={link} href="#" fontSize="md" _hover={{ color: '#ff4081' }}>
                {link}
              </Link>
            )
          )}
        </VStack>

        {/* Recent Posts Section */}
        <VStack spacing={4} align="start">
          <Text fontSize="lg" fontWeight="bold">
            Recent Posts —
          </Text>
          {/* Post Example */}
          {[
            { title: 'What We Think, We Become', author: 'Perry Scope', imgSrc: 'https://via.placeholder.com/50' },
            { title: 'Good Things Come in Good Time', author: 'Perry Scope', imgSrc: 'https://via.placeholder.com/50' },
          ].map((post, index) => (
            <HStack key={index} align="center">
              <Image
                boxSize="50px"
                borderRadius="full"
                src={post.imgSrc}
                alt="Post thumbnail"
                border="2px solid black"
              />
              <VStack align="start" spacing={0}>
                <Link fontWeight="bold" href="#" fontSize="md" _hover={{ color: '#ff4081' }}>
                  {post.title}
                </Link>
                <Text fontSize="sm">by {post.author}</Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </Flex>
      <Text mt={10} textAlign="center" fontWeight="bold">
        Vozzy © 2024. Powered & Published by{' '}
        <Link href="#" color="black" textDecoration="underline">
          Ghost
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
