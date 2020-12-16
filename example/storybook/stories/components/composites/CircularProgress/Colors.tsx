import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { text } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading>Changing the color</Heading>
      <CircularProgress mt={6} value={50} color={text('Color', 'red.200')} />
    </Center>
  );
}
