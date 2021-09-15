import React from 'react';
import { Slider, Box } from 'native-base';

export const Example = () => {
  return (
    <Box mx={5} width="80%">
      <Slider
        minValue={0}
        maxValue={100}
        step={1}
        defaultValue={50}
        isDisabled
        _disabled={{ opacity: 0.6 }}
        colorScheme="indigo"
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
};
