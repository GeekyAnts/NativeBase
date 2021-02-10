import React from 'react';
import { FormControl, Input } from 'native-base';

export default function () {
  return (
    <FormControl isRequired isInvalid>
      <FormControl.Label>Favorite framework</FormControl.Label>
      <Input p={2} placeholder="Is it react?" />
      <FormControl.HelperText>
        We'll keep this between us.
      </FormControl.HelperText>
      <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
    </FormControl>
  );
}
