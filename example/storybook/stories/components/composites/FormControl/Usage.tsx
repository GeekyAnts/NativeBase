import React from 'react';
import { FormControl, Input, Stack } from 'native-base';

export const Example = () => {
  return (
    <FormControl isRequired isInvalid>
      <Stack mx={4}>
        <FormControl.Label>Favorite framework</FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};
