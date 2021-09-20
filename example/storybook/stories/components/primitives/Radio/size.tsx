import React from 'react';
import { Center, Heading, Radio } from 'native-base';

export const Example = () => {
  return (
    <Center>
      <Heading mb="10" size="md">
        Sizes
      </Heading>
      <Radio.Group
        name="exampleGroup"
        defaultValue="1"
        accessibilityLabel="pick a size"
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
      </Radio.Group>
    </Center>
  );
};
