import React from 'react';
import { Button, Box, Heading, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading mb="10">Sizes</Heading>
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Box>
          {/* @ts-ignore */}
          <Button key={size} size={size}>
            BUTTON
          </Button>
        </Box>
      ))}
    </VStack>
  );
};
