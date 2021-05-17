import React from 'react';
import { Button, HStack } from 'native-base';

export const Example = () => {
  return (
    <HStack space={2}>
      <Button isLoading>Button</Button>
      <Button isLoading isLoadingText="Submitting">
        BUTTON
      </Button>
      <Button isLoading isLoadingText="Submitting" variant="outline">
        BUTTON
      </Button>
    </HStack>
  );
};
