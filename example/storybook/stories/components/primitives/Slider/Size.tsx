import React from 'react';
import { Slider, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} width="80%">
      <Slider defaultValue={40} colorScheme="red" size="lg">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Slider defaultValue={60} size="md">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Slider defaultValue={80} colorScheme="green" size="sm">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </VStack>
  );
};
