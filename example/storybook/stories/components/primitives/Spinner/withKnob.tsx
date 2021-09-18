import React from 'react';
import { Spinner, Box } from 'native-base';
import { select } from '@storybook/addon-knobs';

export const Example = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
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
