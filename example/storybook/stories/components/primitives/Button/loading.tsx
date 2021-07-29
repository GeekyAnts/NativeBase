import React from 'react';
import { Button, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      space={2}
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      <Button
        isLoading
        spinnerPlacement="end"
        _loading={{ bg: 'red.100', _text: { color: 'green.500' }, opacity: 1 }}
        _spinner={{ color: 'blue.900', size: 'lg' }}
      >
        Button
      </Button>
      <Button
        isLoading
        spinnerPlacement="start"
        isLoadingText="Submitting"
        _text={{ color: 'green.500' }}
        _loading={{ _text: { color: 'red.500' } }}
      >
        BUTTON
      </Button>
      <Button isLoading isLoadingText="Submitting" variant="outline">
        BUTTON
      </Button>
    </Stack>
  );
};
