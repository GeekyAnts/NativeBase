import React from 'react';
import { Button, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Button colorScheme="primary" isLoading>
        Button
      </Button>
      <Button colorScheme="primary" isLoading isLoadingText="Submitting">
        Button
      </Button>
      <Button
        colorScheme="primary"
        isLoading
        isLoadingText="Submitting"
        variant="outline"
      >
        Button
      </Button>
    </HStack>
  );
}
