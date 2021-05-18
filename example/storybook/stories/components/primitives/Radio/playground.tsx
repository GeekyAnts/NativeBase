import React from 'react';
import { Radio, Text, Box } from 'native-base';
import { boolean, select, text } from '@storybook/addon-knobs';
import { useState } from 'react';

export const Example = () => {
  const [value, setValue] = useState('');

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Radio.Group value={value} onChange={setValue} name="exampleGroup">
        <Radio
          colorScheme={text('colorScheme', 'primary')}
          size={select('size', ['sm', 'md', 'lg'], 'md')}
          isDisabled={boolean('isDisabled', false)}
          isInvalid={boolean('isInvalid', false)}
          value={'cool'}
          my={1}
        >
          Are you Awesome?
        </Radio>
        <Radio
          colorScheme={text('colorScheme', 'primary')}
          size={select('size', ['sm', 'md', 'lg'], 'md')}
          isDisabled={boolean('isDisabled', false)}
          isInvalid={boolean('isInvalid', false)}
          value={'awesome'}
          my={1}
        >
          Are you Cool?
        </Radio>
      </Radio.Group>
      <Text mt={2}>{'Yes, you are ' + value}</Text>
    </Box>
  );
};
