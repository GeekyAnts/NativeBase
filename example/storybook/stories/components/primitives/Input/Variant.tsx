import React from 'react';
import { Input, Stack, Center } from 'native-base';
export const Example = () => {
  return (
    <Stack space={4} w="75%">
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="underlined" placeholder="Underlined" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input variant="rounded" placeholder="Round" />
    </Stack>
  );
};
