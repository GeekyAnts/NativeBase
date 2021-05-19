import React from 'react';
import { Checkbox } from 'native-base';

export const Example = () => {
  return (
    <Checkbox.Group>
      <Checkbox value="one" my={2}>
        Hello world
      </Checkbox>
      <Checkbox value="two">Hello world</Checkbox>
    </Checkbox.Group>
  );
};
