import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from 'native-base';

export default function () {
  return (
    <Box mx={5}>
      <Slider
        defaultValue={70}
        accessibilityIncrementSteps={10}
        accessibilityDecrementSteps={5}
        accessibilityLabel="This is a test slider"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
