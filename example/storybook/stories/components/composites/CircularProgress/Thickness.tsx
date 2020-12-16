import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { number } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading>Changing the thickness</Heading>
      <CircularProgress mt={6} value={30} thickness={number('Thickness', 7)} />
    </Center>
  );
}
