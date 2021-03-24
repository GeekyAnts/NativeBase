import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { text } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading mb={6}>Changing the color</Heading>
      <CircularProgress value={60} color={text('Color', 'secondary.400')} />
    </Center>
  );
}
