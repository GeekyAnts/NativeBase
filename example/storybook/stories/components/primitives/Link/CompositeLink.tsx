import React from 'react';
import { Link, Box, Text } from 'native-base';

export const Example = () => {
  return (
    <Link
      href="https://nativebase.io"
      _hover={{ bg: 'primary.100' }}
      justifyContent="center"
      alignItems="center"
      isExternal
      mt={4}
      mx={4}
      flexWrap="wrap"
    >
      <Box p={4} bg="seagreen">
        <Text color="white" fontSize={16}>
          Box
        </Text>
      </Box>
      <Text
        px={2}
        my={1}
        _light={{ color: 'blue.700' }}
        _dark={{ color: 'blue.500' }}
      >
        Clicking anywhere will trigger the link
      </Text>
      <Box p={4} bg="emerald.700">
        <Text color="white" fontSize={16}>
          Box
        </Text>
      </Box>
    </Link>
  );
};
