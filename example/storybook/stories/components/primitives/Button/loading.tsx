import React from 'react';
import { Button, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      space={2}
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      <Button isLoading>Button</Button>
      <Button isLoading isLoadingText="Submitting">
        BUTTON
      </Button>
      <Button isLoading isLoadingText="Submitting" variant="outline">
        BUTTON
      </Button>
    </Stack>
  );
};
