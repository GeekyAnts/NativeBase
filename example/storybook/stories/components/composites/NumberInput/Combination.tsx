import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
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
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
