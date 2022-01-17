import React from 'react';
import { Input, Stack, Center } from 'native-base';
export const Example = () => {
  return (
    <Center>
      <Stack space={4} w="75%" maxW="300px">
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="underlined" placeholder="Underlined" />
        <Input variant="unstyled" placeholder="Unstyled" />
        <Input variant="rounded" placeholder="Round" />
      </Stack>
    </Center>
  );
};
