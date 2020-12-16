import React from 'react';
import { TextArea, Heading, Center, Text, Stack } from 'native-base';

export default function () {
  return (
    <Stack space={4}>
      <Center>
        <Heading>TextArea</Heading>
      </Center>
      <Center>
        <Text>Default TextArea</Text>
      </Center>
      <TextArea w="90%" h="100" placeholder="Text Area Placeholder" />
    </Stack>
  );
}
