import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { number } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading mb={6}>Changing the thickness</Heading>
      <CircularProgress value={60} thickness={8} />
    </Center>
  );
}
