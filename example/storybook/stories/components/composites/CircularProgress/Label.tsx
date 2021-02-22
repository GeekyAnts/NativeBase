import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
export default function () {
  return (
    <Center>
      <Heading>Adding label</Heading>
      <CircularProgress mt={6} value={45} size={60} color="red.200">
        <CircularProgress.Label>45%</CircularProgress.Label>
      </CircularProgress>
    </Center>
  );
}
