import React from 'react';
import { Input, Stack, Center } from 'native-base';

export const Example = () => {
  return (
    <Center>
      <Stack mt={3} space={4} w="75%" maxW="300px">
        <Input size="xs" placeholder="xs Input" />
        <Input size="sm" placeholder="sm Input" />
        <Input size="md" placeholder="md Input" />
        <Input size="lg" placeholder="lg Input" />
        <Input size="xl" placeholder="xl Input" />
        <Input size="2xl" placeholder="2xl Input" />
      </Stack>
    </Center>
  );
};
