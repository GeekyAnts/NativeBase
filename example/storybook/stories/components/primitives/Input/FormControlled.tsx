import React from 'react';
import { Input, FormControl, WarningOutlineIcon } from 'native-base';

export const Example = () => {
  return (
    <FormControl isInvalid w={{ base: '75%', md: '25%' }}>
      <FormControl.Label>Password</FormControl.Label>
      <Input placeholder="Enter password" />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        Try different from previous passwords.
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
