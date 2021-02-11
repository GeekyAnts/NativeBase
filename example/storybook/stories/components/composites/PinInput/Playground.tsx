import React from 'react';
import { PinInput } from 'native-base';
import { select, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <PinInput
      placeholder={text('placeholder', '○')}
      size={text('Size', 'sm')}
      variant={select(
        'variantType',
        ['outline', 'underlined', 'rounded', 'filled', 'unstyled'],
        'outline'
      )}
      defaultValue={text('defaultValue', '96')}
    >
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput>
  );
}
