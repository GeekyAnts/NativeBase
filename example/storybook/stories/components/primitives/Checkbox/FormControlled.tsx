import React from 'react';
import { FormControl, Checkbox, VStack, Text, Container } from 'native-base';

export const Example = () => {
  const [groupValue, setGroupValue] = React.useState(['Item 1', 'Item 3']);

  const getSelectedGroupValue = () => {
    if (groupValue.length === 0) return '[]';

    let arrayString = groupValue.reduce(
      (accumulator, currentValue) => accumulator + ', ' + currentValue
    );
    return '[' + arrayString + ']';
  };

  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Select Item</FormControl.Label>
        <Checkbox.Group
          colorScheme="green"
          defaultValue={groupValue}
          onChange={(values) => {
            setGroupValue(values || []);
          }}
          alignItems="flex-start"
        >
          <Checkbox value="Item 1" my={1}>
            Item 1
          </Checkbox>
          <Checkbox value="Item 2" my={1}>
            Item 2
          </Checkbox>
          <Checkbox value="Item 3" my={1}>
            Item 3
          </Checkbox>
          <Checkbox
            colorScheme="orange"
            isIndeterminate
            value="Indeterminate Item"
            my={1}
          >
            Indeterminate Item
          </Checkbox>
        </Checkbox.Group>
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>

      <VStack mt={4} alignItems="baseline">
        <Text fontSize="md">Selected Values: </Text>
        <Text fontSize="md" bold>
          {getSelectedGroupValue()}
        </Text>
      </VStack>
    </Container>
  );
};
