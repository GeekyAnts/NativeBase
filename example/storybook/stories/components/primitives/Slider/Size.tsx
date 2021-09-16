import React from 'react';
import { Slider, VStack, Heading } from 'native-base';

export const Example = () => {
  return (
    <VStack space={4} width="80%">
      <Heading mb="10" textAlign="center">
        Sizes
      </Heading>
      <Slider defaultValue={40} size="sm">
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
      <Slider defaultValue={80} size="lg">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </VStack>
  );
};
