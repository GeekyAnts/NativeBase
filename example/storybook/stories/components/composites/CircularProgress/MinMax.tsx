import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { text, number } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading mb={6}>Adding Min and Max</Heading>
      <CircularProgress
        value={550}
        max={number('Max', 1000)}
        min={number('Min', 100)}
        size={100}
      >
        550%
      </CircularProgress>
    </Center>
  );
}
