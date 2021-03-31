import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from 'native-base';
import { boolean, number, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <NumberInput
      defaultValue={text('defaultValue', '20')}
      min={number('min', 5)}
      max={number('max', 40)}
      step={number('step', 3)}
      isDisabled={boolean('isDisabled', true)}
      keepWithinRange={boolean('keepWithinRange', true)}
      w="95%"
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
