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
    <Box mx={5} width="80%">
      <Slider
        defaultValue={70}
        colorScheme="lime"
        orientation="vertical"
        minH="400px"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
