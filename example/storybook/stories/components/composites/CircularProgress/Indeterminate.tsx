import React from 'react';
import { CircularProgress, Center, Heading } from 'native-base';
export const Example = () => {
  return (
    <Center>
      <Heading>Indeterminate Progress</Heading>
      <CircularProgress mt={6} value={60} thickness={6} isIndeterminate>
        60%
      </CircularProgress>
    </Center>
  );
};
