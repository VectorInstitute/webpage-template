'use client';

import React, { memo } from 'react';
import { Box, Container, Flex, Heading, Text, Image, VStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Header from '../components/header';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const About: React.FC = () => {
  return (
    <Box minHeight="100vh">
      <Header />
      <Box
        bgGradient="linear(to-r, brand.pink, brand.purple)"
        position="relative"
        overflow="hidden"
        minHeight="calc(100vh - 80px)"
        pt={{ base: "80px", md: "100px" }}
      >
        <Container maxW="1200px" position="relative" zIndex={1}>
          <VStack spacing={8} alignItems="center" color="white" textAlign="center">
            <Heading as="h1" size="2xl">About the template</Heading>
            <Text fontSize="xl" maxW="800px">
              This template is a starting point for building a website with Next.js and Chakra UI.
            </Text>
            <Flex gap={8} alignItems="center" flexWrap="wrap" justifyContent="center">
              <Link as={NextLink} href="https://vectorinstitute.ai" isExternal>
                <Image
                  src={`${basePath}/images/vector-logo.png`}
                  alt="Vector Institute"
                  width={150}
                  height={40}
                  objectFit="contain"
                />
              </Link>
            </Flex>
          </VStack>
        </Container>
        <Box
          position="absolute"
          top={{ base: "60%", md: "40%" }}
          right={{ base: "-20%", md: "-5%" }}
          width={{ base: "120%", md: "70%" }}
          height={{ base: "100%", md: "140%" }}
          bg="white"
          borderTopLeftRadius={{ base: "30%", md: "50%" }}
          transform={{ base: "rotate(-5deg)", md: "rotate(-10deg)" }}
          boxShadow="0 -4px 30px rgba(0, 0, 0, 0.1)"
        />
      </Box>
    </Box>
  );
}

export default memo(About);
