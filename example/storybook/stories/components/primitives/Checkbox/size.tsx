import React from 'react';
import { Checkbox, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={3}>
      <Checkbox value="red" colorScheme="red" size="sm" defaultIsChecked>
        Checkbox
      </Checkbox>
      <Checkbox colorScheme="green" size="md" defaultIsChecked value="green">
        Checkbox
      </Checkbox>
      <Checkbox colorScheme="yellow" value="yellow" size="lg" defaultIsChecked>
        Checkbox
      </Checkbox>
    </VStack>
  );
};
