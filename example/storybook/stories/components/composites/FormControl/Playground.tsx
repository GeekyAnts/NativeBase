import React from 'react';
import { FormControl, Input } from 'native-base';
import { boolean } from '@storybook/addon-knobs';

export default function () {
  return (
    <FormControl
      isRequired={boolean('isRequired', true)}
      isDisabled={boolean('isDisabled', false)}
      isInvalid={boolean('isInvalid', false)}
      isReadOnly={boolean('isReadOnly', false)}
    >
      <FormControl.Label _invalid={{ backgroundColor: '#FED7D7' }}>
        Favorite framework
      </FormControl.Label>
      <Input p={2} placeholder="Is it react?" />
      <FormControl.HelperText _disabled={{ backgroundColor: '#eee' }}>
        We'll keep this between us.
      </FormControl.HelperText>
      <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
    </FormControl>
  );
}
