import React from 'react';
import { CircularProgress, Center, Heading } from 'native-base';
export default function () {
  return (
    <Center>
      <Heading>Indeterminate Progress</Heading>
      <CircularProgress mt={6} value={60} thickness={6} isIndeterminate>
        60%
      </CircularProgress>
    </Center>
  );
}
