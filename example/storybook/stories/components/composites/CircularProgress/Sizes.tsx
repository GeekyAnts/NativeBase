import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { number } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading>Changing the size</Heading>
      <CircularProgress mt={6} value={60} size={number('Size(in px)', 60)} />
    </Center>
  );
}
