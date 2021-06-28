import React from 'react';
import {
  FormControl,
  Select,
  HStack,
  Text,
  Container,
  CheckIcon,
} from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('1');
  return (
    <Container>
      <FormControl>
        <FormControl.Label>Select Item</FormControl.Label>
        <Select
          selectedValue={value}
          minWidth={200}
          accessibilityLabel="Select an option"
          placeholder="Select an option"
          onValueChange={(itemValue) => {
            setValue(itemValue);
          }}
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size={5} />,
          }}
          mt={1}
        >
          <Select.Item label="Option 1" value="1" />
          <Select.Item label="Option 2" value="2" />
          <Select.Item label="Option 3" value="3" />
          <Select.Item label="Option 4" value="4" />
          <Select.Item label="Option 5" value="5" />
          <Select.Item label="Option 6" value="6" />
          <Select.Item label="Option 7" value="7" />
          <Select.Item label="Option 8" value="8" />
          <Select.Item label="Option 9" value="9" />
          <Select.Item label="Option 10" value="10" />
          <Select.Item label="Option 11" value="11" />
          <Select.Item label="Option 12" value="12" />
          <Select.Item label="Option 13" value="13" />
          <Select.Item label="Option 14" value="14" />
          <Select.Item label="Option 15" value="15" />
          <Select.Item label="Option 16" value="16" />
          <Select.Item label="Option 17" value="17" />
          <Select.Item label="Option 18" value="18" />
          <Select.Item label="Option 19" value="19" />
          <Select.Item label="Option 20" value="20" />
          <Select.Item label="Option 21" value="21" />
        </Select>
      </FormControl>

      <HStack mt={3} alignItems="baseline">
        <Text fontSize="md">Selected Values: </Text>
        <Text fontSize="md" bold>
          {value}
        </Text>
      </HStack>
    </Container>
  );
};
