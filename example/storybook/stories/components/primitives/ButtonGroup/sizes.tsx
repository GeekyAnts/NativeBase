import React from 'react';
import { Button, Box, Heading, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading mb="10" size="md">
        Sizes
      </Heading>
      <Button.Group space={3} alignItems="center" direction="column">
        {['xs', 'sm', 'md', 'lg'].map((size) => (
          <Box>
            {/* @ts-ignore */}
            <Button key={size} size={size}>
              BUTTON
            </Button>
          </Box>
        ))}
      </Button.Group>
    </VStack>
  );
};
