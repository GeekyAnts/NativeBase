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
        Button
      </Button>
      <Button isLoading spinnerPlacement="end" isLoadingText="Submitting">
        Button
      </Button>
      <Button
        isLoading
        _loading={{
          bg: 'amber.400:alpha.70',
          _text: { color: 'coolGray.700' },
        }}
        _spinner={{ color: 'white' }}
        isLoadingText="Submitting"
      >
        Button
      </Button>
      <Button isLoading isLoadingText="Submitting" variant="outline">
        Button
      </Button>
    </Stack>
  );
};
