import React from 'react';
import { IRadioValue, Radio, RadioGroup, Text, View } from 'native-base';
import { boolean, select, text } from '@storybook/addon-knobs';
import { useState } from 'react';

export default function () {
  const [value, setValue] = useState<IRadioValue>('');

  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <RadioGroup value={value} onChange={setValue} name="exampleGroup">
        <Radio
          colorScheme={text('colorScheme', 'default')}
          size={select('size', ['sm', 'md', 'lg'], 'md')}
          isDisabled={boolean('isDisabled', false)}
          isInvalid={boolean('isInvalid', false)}
          value={'cool'}
        >
          <Text mx={2}>Are you Awesome?</Text>
        </Radio>
        <Radio
          colorScheme={text('colorScheme', 'default')}
          size={select('size', ['sm', 'md', 'lg'], 'md')}
          isDisabled={boolean('isDisabled', false)}
          isInvalid={boolean('isInvalid', false)}
          value={'awesome'}
        >
          <Text mx={2}>Are you Cool?</Text>
        </Radio>
      </RadioGroup>
      <Text>{'Yes, you are ' + value}</Text>
    </View>
  );
}
