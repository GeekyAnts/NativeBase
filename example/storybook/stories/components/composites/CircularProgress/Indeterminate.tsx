import React from 'react';
import { CircularProgress, Center, Heading } from 'native-base';
export default function () {
  return (
    <Center>
      <Heading>Indeterminate Progress</Heading>
      <CircularProgress mt={6} value={50} isIndeterminate color="red.200">
        50%
      </CircularProgress>
    </Center>
  );
}
