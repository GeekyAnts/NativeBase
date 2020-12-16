import React from 'react';
import { Skeleton, Stack, Text, Heading } from 'native-base';
export default function () {
  return (
    <Stack width="90%">
      <Skeleton>
        <Heading>contents wrapped</Heading>
        <Text>won't be visible</Text>
      </Skeleton>
    </Stack>
  );
}
