import React from 'react';
import { Link, Text, Box, Flex, HStack, Spacer, Heading } from 'native-base';

export const Example = () => {
  return (
    <Link
      href="https://nativebase.io"
      _hover={{ bg: 'primary.100' }}
      isExternal
    >
      <Box bg="cyan.700" p="5" rounded="8" flexShrink="1">
        <HStack alignItems="flex-start">
          <Text fontSize="xs" color="cyan.50" fontWeight="medium">
            Open Source
          </Text>
          <Spacer />
          <Text fontSize="2xs" color="cyan.100">
            1 month ago
          </Text>
        </HStack>
        <Heading color="cyan.50" mt="2" fontWeight="medium" fontSize="lg">
          NativeBase
        </Heading>
        <Text mt="1" fontSize="sm" color="white">
          NativeBase is a component library that enables devs to build universal
          design systems.
        </Text>
        <Flex>
          <Text mt="2" fontSize="xs" fontWeight="medium" color="cyan.400">
            Read More
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};
