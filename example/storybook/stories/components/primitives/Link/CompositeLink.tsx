import React from 'react';
import { Link, Text, Box, Flex, HStack, Spacer, Badge } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Link href="https://nativebase.io" isExternal>
        <Box
          maxW="96"
          borderWidth="1"
          borderColor="coolGray.300"
          shadow="3"
          bg="coolGray.100"
          p="5"
          rounded="8"
        >
          <HStack alignItems="center">
            <Badge
              colorScheme="darkBlue"
              _text={{ color: 'white' }}
              variant="solid"
              rounded="4"
            >
              Open Source
            </Badge>
            <Spacer />
            <Text fontSize={10} color="coolGray.800">
              2020
            </Text>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            NativeBase v3
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            NativeBase is a component library that enables devs to build
            universal design systems.
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Read More
            </Text>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};
