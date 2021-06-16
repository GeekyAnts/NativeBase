import React from 'react';
import { Box, Text, Button, Heading } from 'native-base';

export function Example() {
  return (
    <Box alignSelf={{ base: 'center', md: 'flex-start' }}>
      <Heading mb={4}>
        Mobile first accessible components for React Native & Web.
      </Heading>
      <Text fontSize="xl">
        An accessible & utility-first component library to build your design
        system for all the platforms (web in beta).
      </Text>
      <Button size="md" colorScheme="green" mt="24px">
        Let's get started
      </Button>
    </Box>
  );
}
