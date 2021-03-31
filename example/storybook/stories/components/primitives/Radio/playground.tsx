import React from 'react';
import { IRadioValue, Radio, Text, View } from 'native-base';
import { boolean, select, text } from '@storybook/addon-knobs';
import { useState } from 'react';

export default function () {
  const [value, setValue] = useState<IRadioValue>('');

  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Radio.Group value={value} onChange={setValue} name="exampleGroup">
        <Radio
          colorScheme={text('colorScheme', 'primary')}
          size={select('size', ['sm', 'md', 'lg'], 'md')}
          isDisabled={boolean('isDisabled', false)}
          isInvalid={boolean('isInvalid', false)}
          value={'cool'}
          my={1}
        >
          <Text mx={2}>Are you Awesome?</Text>
        </Radio>
        <Radio
          colorScheme={text('colorScheme', 'primary')}
          size={select('size', ['sm', 'md', 'lg'], 'md')}
          isDisabled={boolean('isDisabled', false)}
          isInvalid={boolean('isInvalid', false)}
          value={'awesome'}
          my={1}
        >
          <Text mx={2}>Are you Cool?</Text>
        </Radio>
      </Radio.Group>
      <Text mt={1}>{'Yes, you are ' + value}</Text>
    </View>
  );
}
