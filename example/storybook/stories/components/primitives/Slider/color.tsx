import React from 'react';
import { Slider, Heading, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack width="80%" space={4}>
      <Heading mb="10" textAlign="center">
        Color Schemes
      </Heading>
      <Slider defaultValue={70} colorScheme="orange">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Slider defaultValue={70} colorScheme="emerald">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Slider defaultValue={70} colorScheme="indigo">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </VStack>
  );
};
