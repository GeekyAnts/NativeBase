import React from 'react';
import { Box, Text, Image, Link } from 'native-base';
export default () => {
  return (
    <Box flexDir={{ base: 'column', sm: 'column', md: 'row' }}>
      <Box flexShrink={0}>
        <Image
          rounded={10}
          width={40}
          height={40}
          source={{ uri: 'https://bit.ly/2jYM25F' }}
          alt="Woman paying for a purchase"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 2 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          Marketing
        </Text>
        <Link mt={1} fontSize="lg" fontWeight="semibold" href="#">
          Finding customers for your new business
        </Link>
        <Text mt={2} color="gray.500">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </Text>
      </Box>
    </Box>
  );
};
