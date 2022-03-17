import React from 'react';
import { Button, VStack, HStack, AddIcon } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <HStack space="4">
          <Button size={size}>BUTTON</Button>
          <Button size={size} leftIcon={<AddIcon />}>
            BUTTON
          </Button>
          <Button size={size} rightIcon={<AddIcon />}>
            BUTTON
          </Button>
          <Button size={size} isLoading>
            BUTTON
          </Button>
        </HStack>
      ))}
    </VStack>
  );
};
