import React from 'react';
import { Skeleton, Stack } from 'native-base';
export default function () {
  return (
    <Stack width="90%">
      <Skeleton my={2} height="20px" />
      <Skeleton my={2} height="20px" />
      <Skeleton my={2} height="20px" />
    </Stack>
  );
}
