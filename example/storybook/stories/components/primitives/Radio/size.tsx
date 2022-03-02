import React from 'react';
import { Radio, Stack } from 'native-base';

export const Example = () => {
  return (
    <Radio.Group
      name="exampleGroup"
      defaultValue="1"
      accessibilityLabel="pick a size"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        space={4}
      >
        <Radio value="1" colorScheme="red" size="sm" my={1}>
          Small
        </Radio>
        <Radio value="2" colorScheme="green" size="md" my={1}>
          Medium
        </Radio>
        <Radio value="3" colorScheme="yellow" size="lg" my={1}>
          Large
        </Radio>
      </Stack>
    </Radio.Group>
  );
};
