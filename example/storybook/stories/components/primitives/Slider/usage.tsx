import React from 'react';
import { Slider, Box } from 'native-base';

export default function () {
  return (
    <Box mx={5} width="80%">
      <Slider
        defaultValue={70}
        accessibilityIncrementSteps={10}
        accessibilityDecrementSteps={5}
        accessibilityLabel="This is a test slider"
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
}
