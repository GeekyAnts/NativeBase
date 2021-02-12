import React from 'react';
import { Slider, Box } from 'native-base';

export default function () {
  return (
    <Box mx={5} width="80%">
      <Slider
        defaultValue={70}
        colorScheme="lime"
        orientation="vertical"
        minH="400px"
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
}
