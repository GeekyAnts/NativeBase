import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from 'native-base';
import { boolean } from '@storybook/addon-knobs';

export default function () {
  return (
    <FormControl
      isRequired={boolean('isRequired', true)}
      isDisabled={boolean('isDisabled', false)}
      isInvalid={boolean('isInvalid', false)}
      isReadOnly={boolean('isReadOnly', false)}
    >
      <FormLabel _invalid={{ backgroundColor: '#FED7D7' }}>
        Favorite framework
      </FormLabel>
      <Input p={2} placeholder="Is it react?" />
      <FormHelperText _disabled={{ backgroundColor: '#eee' }}>
        We'll keep this between us.
      </FormHelperText>
      <FormErrorMessage>Something is wrong.</FormErrorMessage>
    </FormControl>
  );
}
