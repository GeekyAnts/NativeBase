import React from 'react';
import { Checkbox, Heading, HStack, VStack, Text, Box } from 'native-base';

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
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <HStack mb={3} alignItems="baseline">
        <Heading mt={3}>CheckboxGroup </Heading>
      </HStack>
      <Checkbox.Group
        colorScheme="green"
        defaultValue={groupValue}
        onChange={(values) => {
          setGroupValue(values || []);
        }}
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
      <VStack mt={3}>
        <Box>
          <Text fontSize="md">Selected Values: </Text>
          <Text fontSize="md" bold>
            {getSelectedGroupValue()}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
