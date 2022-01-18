import React from 'react';
import { Slider, Box } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center" w="100%">
      <Slider
        w="3/4"
        maxW="300"
        defaultValue={70}
        minValue={0}
        maxValue={100}
        accessibilityLabel="hello world"
        step={10}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
};
