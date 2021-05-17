import React from 'react';
import { FormControl, Select, VStack, Text, Container } from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('js');

  return (
    <Container>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Select Item</FormControl.Label>
        <Select
          selectedValue={value}
          minWidth={200}
          accessibilityLabel="Select your favorite programming language"
          placeholder="Select your favorite programming language"
          onValueChange={(itemValue: string) => {
            setValue(itemValue);
          }}
          mt={1}
        >
          <Select.Item label="JavaScript" value="js" />
          <Select.Item label="TypeScript" value="ts" />
          <Select.Item label="C" value="c" />
          <Select.Item label="Python" value="py" />
          <Select.Item label="Java" value="java" />
        </Select>
        <FormControl.HelperText mt={1}>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </FormControl>

      <VStack mt={3} alignItems="baseline">
        <Text fontSize="md">Selected Values: </Text>
        <Text fontSize="md" bold>
          {value}
        </Text>
      </VStack>
    </Container>
  );
};
