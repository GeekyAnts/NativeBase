import React from 'react';
import { Box, Text, Heading } from 'native-base';

export function Example() {
  return (
    <Box>
      <Heading size="xl" mb="4">
        Heading
      </Heading>
      <Text fontSize="xl">
        Headings are used for rendering headlines. Heading composes Text so you
        can use all the style props.
      </Text>
    </Box>
  );
}
