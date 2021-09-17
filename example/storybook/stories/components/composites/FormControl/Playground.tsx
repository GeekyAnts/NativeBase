import React from 'react';
import { FormControl, Input, Stack } from 'native-base';
import { boolean } from '@storybook/addon-knobs';

export const Example = () => {
  return (
    <FormControl
      isRequired={boolean('isRequired', true)}
      isDisabled={boolean('isDisabled', false)}
      isInvalid={boolean('isInvalid', false)}
      isReadOnly={boolean('isReadOnly', false)}
      w={{ base: '70%', md: '25%' }}
    >
      <Stack mx="4">
        <FormControl.Label _invalid={{ backgroundColor: '#FED7D7' }}>
          Favorite framework
        </FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.HelperText _disabled={{ backgroundColor: '#eee' }}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};
