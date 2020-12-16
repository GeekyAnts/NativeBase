import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  CircularProgressLabel,
} from 'native-base';
import { text, number } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading>Adding Min and Max</Heading>
      <CircularProgress
        mt={6}
        value={550}
        max={number('Max', 1000)}
        min={number('Min', 100)}
        size={100}
        color={text('Color', 'red.200')}
      >
        <CircularProgressLabel>550%</CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
}
