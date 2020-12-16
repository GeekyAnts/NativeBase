import React from 'react';
import {
  CircularProgress,
  CircularProgressLabel,
  Center,
  Heading,
} from 'native-base';
export default function () {
  return (
    <Center>
      <Heading>Indeterminate Progress</Heading>
      <CircularProgress mt={6} value={50} isIndeterminate color="red.200">
        <CircularProgressLabel>50%</CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
}
