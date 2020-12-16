import React from 'react';
import { Skeleton, Stack, Text, Heading } from 'native-base';
import { boolean, color } from '@storybook/addon-knobs';
export default function () {
  return (
    <Stack width="90%">
      <Skeleton
        startColor={color('startColor', 'gray')}
        endColor={color('endColor', 'transparent')}
        isLoaded={boolean('isLoaded', false)}
      >
        <Heading>contents wrapped</Heading>
        <Text>won't be visible</Text>
      </Skeleton>
    </Stack>
  );
}
