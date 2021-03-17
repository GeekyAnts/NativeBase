import React from 'react';
import { FormControl, Input, Stack } from 'native-base';

export default function () {
  return (
    <FormControl isRequired isInvalid>
      <Stack mx={4}>
        <FormControl.Label>Favorite framework</FormControl.Label>
        <Input p={2} mt={2} placeholder="Is it react?" />
        <FormControl.HelperText mt={1}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage mt={1}>
          Something is wrong.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
}
