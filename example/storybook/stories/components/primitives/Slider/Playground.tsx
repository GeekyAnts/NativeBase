import React from 'react';
import { Slider, Box } from 'native-base';
import { number, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <Box mx={5} width="80%">
      <Slider
        defaultValue={number('defaultValue', 50, {
          range: true,
          min: 0,
          max: 100,
          step: 1,
        })}
        colorScheme={text('colorScheme', 'purple')}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
}
