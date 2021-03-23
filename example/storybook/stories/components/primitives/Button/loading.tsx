import React from 'react';
import { Button, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Button isLoading>Button</Button>
      <Button isLoading isLoadingText="Submitting">
        Button
      </Button>
      <Button isLoading isLoadingText="Submitting" variant="outline">
        Button
      </Button>
    </HStack>
  );
}
