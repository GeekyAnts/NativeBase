import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
import { text } from '@storybook/addon-knobs';
export const Example = () => {
  return (
    <Center>
      <Heading mb={6}>Changing the TrackColor</Heading>
      <CircularProgress
        value={60}
        trackColor={text('Track Color', 'secondary.100')}
      />
    </Center>
  );
};
