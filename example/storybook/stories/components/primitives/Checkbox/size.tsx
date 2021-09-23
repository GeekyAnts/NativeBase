import React from 'react';
import { Checkbox, VStack, Center, Heading } from 'native-base';

export const Example = () => {
  return (
    <Center>
      <Heading textAlign="center" mb="10">
        Sizes
      </Heading>
      <VStack space={3}>
        <Checkbox value="red" colorScheme="red" size="sm" defaultIsChecked>
          UX Research
        </Checkbox>
        <Checkbox colorScheme="green" size="md" defaultIsChecked value="green">
          Development
        </Checkbox>
        <Checkbox
          colorScheme="purple"
          value="yellow"
          size="lg"
          defaultIsChecked
        >
          Devops
        </Checkbox>
      </VStack>
    </Center>
  );
};
