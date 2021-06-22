import React from 'react';
import { Slider, Box } from 'native-base';

export const Example = () => {
  return (
    <Box mx={5} width="80%">
      <Slider
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
