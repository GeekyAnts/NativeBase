import React from 'react';
import { Radio } from 'native-base';

export const Example = () => {
  return (
    <Radio.Group
      defaultValue="1"
      name="exampleGroup"
      accessibilityLabel="favorite colorscheme"
    >
      <Radio colorScheme="emerald" value="1" my={1}>
        emerald
      </Radio>
      <Radio colorScheme="secondary" value="2" my={1}>
        secondary
      </Radio>
      <Radio colorScheme="warning" value="3" my={1}>
        warning
      </Radio>
    </Radio.Group>
  );
};
