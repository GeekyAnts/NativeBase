import React from 'react';
import { Input, Stack, Center, Heading } from 'native-base';
export const Example = () => {
  return (
    <Stack space={4} w={{ base: '75%', md: '25%' }}>
      <Center>
        <Heading textAlign="center" mb="10">
          Input Variants
        </Heading>
      </Center>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="underlined" placeholder="Underlined" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input variant="rounded" placeholder="Round" />
    </Stack>
  );
};
