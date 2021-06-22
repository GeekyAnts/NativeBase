import React from 'react';
import {
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
} from 'native-base';
export const Example = () => {
  const [value, setValue] = React.useState(20);
  return (
    <Stack w="90%">
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
    </Stack>
  );
};
