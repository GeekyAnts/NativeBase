import React from 'react';
import { Checkbox, Heading, HStack, VStack, Text, Box } from 'native-base';

export const Example = () => {
  const [groupValue, setGroupValue] = React.useState([
    'Photography',
    'Gardening',
  ]);

  return (
    <Box alignItems="center">
      <VStack space={2}>
        <HStack alignItems="baseline">
          <Heading fontSize="lg">Hobbies</Heading>
        </HStack>
        <VStack>
          <Box>
            <Text>Selected: ({groupValue.length})</Text>
          </Box>
        </VStack>
        <Checkbox.Group
          colorScheme="green"
          defaultValue={groupValue}
          accessibilityLabel="pick an item"
          onChange={(values) => {
            setGroupValue(values || []);
          }}
        >
          <Checkbox value="Photography" my="1">
            Photography
          </Checkbox>
          <Checkbox value="Writing" my="1">
            Writing
          </Checkbox>
          <Checkbox value="Gardening" my="1">
            Gardening
          </Checkbox>
          <Checkbox value="Cooking" my="1">
            Cooking
          </Checkbox>
        </Checkbox.Group>
      </VStack>
    </Box>
  );
};
