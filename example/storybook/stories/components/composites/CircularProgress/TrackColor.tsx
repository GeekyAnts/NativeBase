import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { text } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading>Changing the TrackColor</Heading>
      <CircularProgress
        mt={6}
        size={80}
        thickness={10}
        value={20}
        trackColor={text('Track Color', 'blue.100')}
      />
    </Center>
  );
}
