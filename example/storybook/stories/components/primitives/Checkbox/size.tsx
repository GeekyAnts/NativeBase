import React from 'react';
import { Checkbox, VStack, Center } from 'native-base';

export const Example = () => {
  return (
    <Center>
      <VStack space={3}>
        <Checkbox value="red" size="sm" defaultIsChecked>
          UX Research
        </Checkbox>
        <Checkbox size="md" defaultIsChecked value="green">
          UX Research
        </Checkbox>
        <Checkbox value="yellow" size="lg" defaultIsChecked>
          UX Research
        </Checkbox>
      </VStack>
    </Center>
  );
};
