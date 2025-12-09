import React from 'react';
import { Checkbox } from '@bilwifi/native-base';

export const Example = () => {
  return (
    <Checkbox.Group accessibilityLabel="choose values">
      <Checkbox value="one" my={2}>
        UX Research
      </Checkbox>
      <Checkbox value="two">Software Development</Checkbox>
    </Checkbox.Group>
  );
};
