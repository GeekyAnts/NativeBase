import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
} from 'native-base';
export default function () {
  const [value, setValue] = React.useState(20);
  return (
    <>
      <NumberInput
        value={`${value}`}
        step={5}
        onChange={(v: any) => setValue(v)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Slider
        my={10}
        defaultValue={value}
        colorScheme="cyan"
        onChange={(v) => {
          setValue(Math.floor(v));
        }}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </>
  );
}
