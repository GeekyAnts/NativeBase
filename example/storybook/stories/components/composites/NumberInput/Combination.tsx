import React from 'react';
import { Stack, NumberInput, Slider } from 'native-base';
export const Example = () => {
  const [value, setValue] = React.useState(20);
  return (
    <Stack w="90%">
      <NumberInput
        value={value}
        step={5}
        onChange={(v: any) => {
          setValue(parseFloat(v.toString()));
        }}
      >
        <NumberInput.Field />
        <NumberInput.Stepper>
          <NumberInput.IncrementStepper />
          <NumberInput.DecrementStepper />
        </NumberInput.Stepper>
      </NumberInput>

      <Slider
        my={10}
        value={value}
        step={5}
        // defaultValue={value}
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
