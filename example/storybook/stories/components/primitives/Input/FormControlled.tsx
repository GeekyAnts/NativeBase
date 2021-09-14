import React from 'react';
import { Input, FormControl, WarningOutlineIcon } from 'native-base';

export const Example = () => {
  return (
    <FormControl isInvalid>
      <FormControl.Label>Password</FormControl.Label>
      <Input placeholder="Enter password" />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        Try different from previous used passwords.
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
