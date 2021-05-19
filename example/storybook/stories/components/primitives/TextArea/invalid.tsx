import React from 'react';
import { TextArea, Center, Text, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack space={4} w="90%">
      <Center>
        <Text>Invalid TextArea</Text>
      </Center>
      <TextArea numberOfLines={4} placeholder="Invalid TextArea" isInvalid />
      <Center>
        <Text>Disabled TextArea</Text>
      </Center>
      <TextArea placeholder="Disabled TextArea" isDisabled />
    </Stack>
  );
};
