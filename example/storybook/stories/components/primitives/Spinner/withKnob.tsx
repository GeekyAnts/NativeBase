import React from 'react';
import { Spinner, Box, Heading } from 'native-base';
import { select } from '@storybook/addon-knobs';

export const Example = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Heading mb={3}>Playaround with Knobs</Heading>
      <Spinner
        size={select('size', ['sm', 'lg'], 'lg')}
        color={
          'primary.' +
          select(
            'color',
            [
              '50',
              '100',
              '200',
              '300',
              '400',
              '500',
              '600',
              '700',
              '800',
              '900',
            ],
            '300'
          )
        }
      />
    </Box>
  );
};
