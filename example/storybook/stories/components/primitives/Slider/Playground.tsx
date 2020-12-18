import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from 'native-base';
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
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
