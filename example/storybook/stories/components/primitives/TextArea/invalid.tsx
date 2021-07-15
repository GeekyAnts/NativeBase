import React from 'react';
import { TextArea, Center, Text, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack space={4} w="90%">
      <Center>
        <Text>Invalid TextArea</Text>
      </Center>
      <TextArea
        aria-label="t1"
        numberOfLines={4}
        placeholder="Invalid TextArea"
        isInvalid
        _dark={{ placeholderTextColor: 'gray.300' }}
      />
      <Center>
        <Text>Disabled TextArea</Text>
      </Center>
      <TextArea
        aria-label="t1Disabled"
        placeholder="Disabled TextArea"
        isDisabled
      />
    </Stack>
  );
};
