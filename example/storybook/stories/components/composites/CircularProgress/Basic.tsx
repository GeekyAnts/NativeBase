import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
export default function () {
  return (
    <Center>
      <Heading>Default CircularProgress</Heading>
      <CircularProgress mt={6} value={80} />
    </Center>
  );
}
